import { prisma } from "@/lib/prisma";

// DB-backed throttle for login attempts and public form submissions.
// Deliberately NOT in-memory — Vercel (and most serverless hosts) runs each
// request on one of several independent instances with their own memory, so
// an in-memory counter gives a different, inconsistent answer depending on
// which instance happens to handle the request. The database is the one
// shared source of truth every instance reads and writes.

function makeLimiter(maxAttempts: number, windowMs: number, lockoutMs: number) {
  return {
    async isLocked(key: string): Promise<{ locked: boolean; retryAfterSeconds: number }> {
      const row = await prisma.rateLimitAttempt.findUnique({ where: { key } });
      if (!row?.lockedUntil || row.lockedUntil <= new Date()) return { locked: false, retryAfterSeconds: 0 };
      return { locked: true, retryAfterSeconds: Math.ceil((row.lockedUntil.getTime() - Date.now()) / 1000) };
    },
    async registerFailure(key: string): Promise<void> {
      const now = new Date();
      const row = await prisma.rateLimitAttempt.findUnique({ where: { key } });
      if (!row || now.getTime() - row.windowStart.getTime() > windowMs) {
        await prisma.rateLimitAttempt.upsert({
          where: { key },
          create: { key, count: 1, windowStart: now, lockedUntil: null },
          update: { count: 1, windowStart: now, lockedUntil: null },
        });
        return;
      }
      const count = row.count + 1;
      await prisma.rateLimitAttempt.update({
        where: { key },
        data: { count, lockedUntil: count >= maxAttempts ? new Date(now.getTime() + lockoutMs) : row.lockedUntil },
      });
    },
    async clear(key: string): Promise<void> {
      await prisma.rateLimitAttempt.deleteMany({ where: { key } });
    },
  };
}

// Admin login: 5 attempts per 15 minutes, then locked out for 15 minutes.
const loginLimiter = makeLimiter(5, 15 * 60 * 1000, 15 * 60 * 1000);
export const isLoginLocked = loginLimiter.isLocked;
export const registerFailedLogin = loginLimiter.registerFailure;
export const clearLoginAttempts = loginLimiter.clear;

// Public forms (appointment request, newsletter signup): 5 submissions per
// 10 minutes, then throttled for 10 minutes. Looser than login since these
// have no "wrong answer" to count failures by — every submission counts.
const formLimiter = makeLimiter(5, 10 * 60 * 1000, 10 * 60 * 1000);
export const isFormThrottled = formLimiter.isLocked;
export const registerFormSubmission = formLimiter.registerFailure;
