// In-memory throttle for login attempts and public form submissions. Stops a
// script from hammering an endpoint at unlimited speed. This resets on
// server restart and isn't shared across instances — fine for a single
// process under normal attack traffic; upgrade to a DB-backed or Redis store
// if this ever runs across multiple serverless instances under sustained abuse.

type Entry = { count: number; windowStart: number; lockedUntil: number };

function makeLimiter(maxAttempts: number, windowMs: number, lockoutMs: number) {
  const attempts = new Map<string, Entry>();

  function prune(now: number) {
    for (const [key, entry] of attempts) {
      if (entry.lockedUntil < now && now - entry.windowStart > windowMs) {
        attempts.delete(key);
      }
    }
  }

  return {
    isLocked(key: string): { locked: boolean; retryAfterSeconds: number } {
      const now = Date.now();
      const entry = attempts.get(key);
      if (!entry || entry.lockedUntil <= now) return { locked: false, retryAfterSeconds: 0 };
      return { locked: true, retryAfterSeconds: Math.ceil((entry.lockedUntil - now) / 1000) };
    },
    registerFailure(key: string) {
      const now = Date.now();
      prune(now);
      const entry = attempts.get(key);
      if (!entry || now - entry.windowStart > windowMs) {
        attempts.set(key, { count: 1, windowStart: now, lockedUntil: 0 });
        return;
      }
      entry.count += 1;
      if (entry.count >= maxAttempts) {
        entry.lockedUntil = now + lockoutMs;
      }
    },
    clear(key: string) {
      attempts.delete(key);
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
export function isFormThrottled(key: string) {
  return formLimiter.isLocked(key);
}
export function registerFormSubmission(key: string) {
  formLimiter.registerFailure(key);
}
