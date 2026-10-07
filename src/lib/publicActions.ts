"use server";

import { prisma } from "@/lib/prisma";

function str(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

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

  if (!email || !email.includes("@")) {
    return { ok: false, message: "Enter a valid email address." };
  }

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
