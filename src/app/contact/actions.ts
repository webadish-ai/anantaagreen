"use server";

import { contact } from "@/lib/site";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field name -> error, for inline display. */
  fieldErrors?: Record<string, string>;
};

const MAX = { name: 120, email: 200, phone: 40, company: 160, message: 4000 };

function str(formData: FormData, key: string) {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

/**
 * Handles the contact form.
 *
 * Delivery is intentionally pluggable: set RESEND_API_KEY and ENQUIRY_TO_EMAIL
 * in the environment and enquiries are emailed. Without them the action fails
 * loudly rather than pretending to have sent something — the contact page keeps
 * phone numbers and the email address visible for exactly that case.
 */
export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // Honeypot: real users never fill a hidden field.
  if (str(formData, "website")) {
    return { status: "success", message: "Thank you — we will be in touch." };
  }

  const name = str(formData, "name").slice(0, MAX.name);
  const email = str(formData, "email").slice(0, MAX.email);
  const phone = str(formData, "phone").slice(0, MAX.phone);
  const company = str(formData, "company").slice(0, MAX.company);
  const interest = str(formData, "interest");
  const message = str(formData, "message").slice(0, MAX.message);

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    fieldErrors.email = "Please enter a valid email address.";
  if (message.length < 10)
    fieldErrors.message = "A sentence or two about your project, please.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL ?? contact.email;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn(
      "[enquiry] RESEND_API_KEY / ENQUIRY_FROM_EMAIL not set — enquiry not delivered.",
    );
    return {
      status: "error",
      message: `The enquiry form is not connected to email yet. Please write to ${contact.email} or call ${contact.phones[0]} and we will respond the same way.`,
    };
  }

  const lines = [
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Phone:    ${phone || "—"}`,
    `Company:  ${company || "—"}`,
    `Interest: ${interest || "—"}`,
    "",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry — ${name}${company ? ` (${company})` : ""}`,
        text: lines,
      }),
    });

    if (!res.ok) {
      console.error("[enquiry] delivery failed", res.status, await res.text());
      return {
        status: "error",
        message: `We could not send that just now. Please email ${contact.email} directly.`,
      };
    }
  } catch (err) {
    console.error("[enquiry] delivery threw", err);
    return {
      status: "error",
      message: `We could not send that just now. Please email ${contact.email} directly.`,
    };
  }

  return {
    status: "success",
    message:
      "Thank you — your enquiry has reached us. We typically reply within one working day.",
  };
}
