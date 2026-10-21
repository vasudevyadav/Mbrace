"use server";

import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { isFormThrottled, registerFormSubmission } from "@/lib/rateLimit";

function str(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

async function clientKey() {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0].trim() || h.get("x-real-ip") || "unknown";
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s-]{6,19}$/;

async function forwardToWebhook(payload: Record<string, unknown>) {
  const url = process.env.LEAD_WEBHOOK_URL || process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Best-effort forward to the CRM only — the local save above already succeeded.
  }
}

export type AppointmentActionResult = { ok: true } | { ok: false; message: string };

export async function submitAppointmentRequestAction(formData: FormData): Promise<AppointmentActionResult> {
  const name = str(formData, "name");
  const email = str(formData, "email");
  const phone = str(formData, "phone");
  const preferredDate = str(formData, "preferredDate");
  const service = str(formData, "service");
  const location = str(formData, "location");
  const doctor = str(formData, "doctor");
  const appointmentType = str(formData, "appointmentType");
  const source = str(formData, "source");

  if (!name || !email || !phone || !preferredDate || !service || !location) {
    return { ok: false, message: "Please fill in all required fields." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, message: "Enter a valid email address." };
  }
  if (!PHONE_PATTERN.test(phone)) {
    return { ok: false, message: "Enter a valid phone number." };
  }

  const key = `appointment:${await clientKey()}`;
  const throttle = await isFormThrottled(key);
  if (throttle.locked) {
    return { ok: false, message: "Too many requests. Please try again in a few minutes." };
  }
  await registerFormSubmission(key);

  try {
    await prisma.appointmentRequest.create({
      data: {
        name,
        email,
        phone,
        preferredDate,
        service,
        location,
        doctor: doctor || null,
        appointmentType: appointmentType || null,
        source: source || null,
      },
    });
  } catch {
    return { ok: false, message: "We couldn’t save your request. Please try again." };
  }

  await forwardToWebhook({ name, email, phone, preferredDate, service, location, doctor, appointmentType, source });

  return { ok: true };
}

export type SubscribeActionResult = { ok: true } | { ok: false; message: string };

export async function subscribeAction(formData: FormData): Promise<SubscribeActionResult> {
  const email = str(formData, "email");
  const source = str(formData, "source") || "footer";

  if (!email || !EMAIL_PATTERN.test(email)) {
    return { ok: false, message: "Enter a valid email address." };
  }

  const key = `subscribe:${await clientKey()}`;
  const throttle = await isFormThrottled(key);
  if (throttle.locked) {
    return { ok: false, message: "Too many requests. Please try again in a few minutes." };
  }
  await registerFormSubmission(key);

  try {
    await prisma.subscriber.upsert({
      where: { email },
      create: { email, source },
      update: {},
    });
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  return { ok: true };
}
