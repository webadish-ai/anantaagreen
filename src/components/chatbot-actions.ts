"use server";

import { contact } from "@/lib/site";
import { sendEmail } from "@/lib/email";

export type ChatbotLeadState = {
  status: "idle" | "success" | "error";
  message: string;
};

const MAX = { name: 120, email: 200, question: 2000 };

function str(formData: FormData, key: string) {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

/**
 * Fires when the FAQ matcher can't confidently answer a chatbot question.
 * Same Resend pipeline as the contact form — see src/app/contact/actions.ts.
 */
export async function submitChatbotLead(
  _prev: ChatbotLeadState,
  formData: FormData,
): Promise<ChatbotLeadState> {
  // Honeypot.
  if (str(formData, "website")) {
    return { status: "success", message: "Thanks — we'll be in touch." };
  }

  const name = str(formData, "name").slice(0, MAX.name);
  const email = str(formData, "email").slice(0, MAX.email);
  const question = str(formData, "question").slice(0, MAX.question);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid name and email address.",
    };
  }

  const to = process.env.ENQUIRY_TO_EMAIL ?? contact.email;
  const result = await sendEmail({
    to,
    replyTo: email,
    subject: `Chatbot lead — ${name}`,
    text: [
      `Name:  ${name}`,
      `Email: ${email}`,
      "",
      "Question the chatbot couldn't answer:",
      question || "(not provided)",
    ].join("\n"),
  });

  if (!result.ok) {
    const message =
      result.reason === "not-configured"
        ? `The chat isn't connected to email yet. Please write to ${contact.email} directly.`
        : `We couldn't send that just now. Please email ${contact.email} directly.`;
    return { status: "error", message };
  }

  return {
    status: "success",
    message: "Thanks — that's been sent to the team. We typically reply within one working day.",
  };
}
