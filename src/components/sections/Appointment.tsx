"use client";

import { useId, useState, type FormEvent } from "react";
import { CalendarIcon, ClockIcon, PhoneIcon } from "@/components/icons/icons";
import { clinic, treatmentOptions } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

// Configure NEXT_PUBLIC_LEAD_WEBHOOK_URL to point this form at a GoHighLevel
// workflow, a Google Apps Script Sheets endpoint, or any other webhook — no
// component changes required.
const WEBHOOK_URL = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

export default function Appointment() {
  const [status, setStatus] = useState<Status>("idle");
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, source: "website-appointment-form" };

    try {
      if (WEBHOOK_URL) {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
      } else {
        console.info("Appointment request (no webhook configured):", payload);
      }
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Failed to submit appointment request", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-mist-200"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
          <CalendarIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-xl font-medium text-ink-900">
          Request received
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
          Thanks — a member of our front desk team will call or email you
          within one business day to confirm your appointment.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-brand-700 underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-mist-200 sm:p-8"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-name`} className="text-sm font-medium text-ink-900">
            Full name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-mist-200 px-3.5 py-2.5 text-sm text-ink-900 outline-none placeholder:text-ink-300 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            placeholder="Jane Rivera"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-phone`} className="text-sm font-medium text-ink-900">
            Phone number
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 w-full rounded-lg border border-mist-200 px-3.5 py-2.5 text-sm text-ink-900 outline-none placeholder:text-ink-300 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-treatment`} className="text-sm font-medium text-ink-900">
            Preferred treatment
          </label>
          <select
            id={`${formId}-treatment`}
            name="treatment"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-lg border border-mist-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          >
            <option value="" disabled>
              Select a treatment
            </option>
            {treatmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-date`} className="text-sm font-medium text-ink-900">
            Preferred date
          </label>
          <input
            id={`${formId}-date`}
            name="preferredDate"
            type="date"
            required
            className="mt-1.5 w-full rounded-lg border border-mist-200 px-3.5 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          Something went wrong sending your request. Please call us at{" "}
          <a href={clinic.phoneHref} className="font-medium underline">
            {clinic.phone}
          </a>{" "}
          instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending request…" : "Request appointment"}
      </button>

      <p className="mt-4 flex items-center gap-2 text-xs text-ink-500">
        <ClockIcon className="h-3.5 w-3.5" />
        We reply within one business day. Prefer to talk now?{" "}
        <a href={clinic.phoneHref} className="inline-flex items-center gap-1 font-medium text-brand-700">
          <PhoneIcon className="h-3 w-3" />
          Call the studio
        </a>
      </p>
    </form>
  );
}
