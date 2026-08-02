"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  chatbotIntro,
  findFaqAnswer,
  noMatchMessage,
  suggestedQuestions,
  type FaqEntry,
} from "@/lib/chatbot-faq";
import { submitChatbotLead, type ChatbotLeadState } from "@/components/chatbot-actions";

type Message =
  | { id: number; role: "user"; text: string }
  | { id: number; role: "bot"; text: string; links?: FaqEntry["links"] }
  | { id: number; role: "lead-form"; question: string };

let nextId = 1;

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId++, role: "bot", text: chatbotIntro },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((m) => [...m, { id: nextId++, role: "user", text: trimmed }]);
    setInput("");

    const match = findFaqAnswer(trimmed);
    if (match) {
      setMessages((m) => [
        ...m,
        { id: nextId++, role: "bot", text: match.answer, links: match.links },
      ]);
    } else {
      setMessages((m) => [
        ...m,
        { id: nextId++, role: "bot", text: noMatchMessage },
        { id: nextId++, role: "lead-form", question: trimmed },
      ]);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chatbot-panel"
        aria-label={open ? "Close chat" : "Open chat"}
        className="from-flame-500 to-flame-400 fixed right-5 bottom-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br text-forest-950 shadow-[0_10px_30px_-8px_rgba(243,118,33,0.75)] transition-transform duration-300 hover:-translate-y-0.5 sm:right-8 sm:bottom-8"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="currentColor">
            <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-4.4 3.3A1 1 0 0 1 3 19.5V5a1 1 0 0 1 1-1Z" />
          </svg>
        )}
      </button>

      <div
        id="chatbot-panel"
        hidden={!open}
        className="border-cream-50/12 bg-forest-950 fixed right-5 bottom-24 z-[60] flex h-[min(560px,70svh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border shadow-2xl sm:right-8"
      >
        <div className="border-cream-50/10 flex items-center gap-3 border-b px-5 py-4">
          <span
            aria-hidden
            className="from-flame-500 to-flame-400 display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br text-sm text-forest-950"
          >
            A
          </span>
          <div>
            <p className="text-cream-50 text-sm font-medium">Anantaa Assistant</p>
            <p className="eyebrow text-cream-50/40 mt-0.5">Usually answers instantly</p>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
        </div>

        <div className="border-cream-50/10 border-t px-4 py-3">
          {messages.length <= 1 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => ask(q)}
                  className="border-cream-50/15 text-cream-50/70 hover:border-flame-400 hover:text-flame-400 rounded-full border px-3 py-1.5 text-xs transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="bg-forest-900/60 border-cream-50/15 text-cream-50 placeholder:text-cream-50/35 focus:border-flame-400 flex-1 rounded-full border px-4 py-2.5 text-sm focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send"
              className="from-flame-500 to-flame-400 text-forest-950 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
                <path d="M3 11.5 20 4l-7.5 17-2.5-7.5L3 11.5Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function MessageBubble({ message }: { message: Message }) {
  if (message.role === "lead-form") {
    return <LeadForm question={message.question} />;
  }

  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-flame-500 text-forest-950"
            : "bg-forest-900 text-cream-50/85 border-cream-50/10 border"
        }`}
      >
        <p>{message.text}</p>
        {message.role === "bot" && message.links && message.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="eyebrow text-flame-400 hover:text-flame-300 inline-flex items-center gap-1.5"
              >
                {l.label}
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const leadInitialState: ChatbotLeadState = { status: "idle", message: "" };

function LeadForm({ question }: { question: string }) {
  const [state, formAction] = useActionState(submitChatbotLead, leadInitialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (state.status === "success") {
    return (
      <div className="border-flame-400/40 bg-forest-900/60 rounded-2xl border px-4 py-3 text-sm">
        <p className="text-cream-50/85">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="border-cream-50/12 bg-forest-900/60 space-y-2.5 rounded-2xl border px-4 py-4"
    >
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="cb-website">Leave this empty</label>
        <input id="cb-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="question" value={question} />

      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
        className="bg-forest-950/60 border-cream-50/15 text-cream-50 placeholder:text-cream-50/35 focus:border-flame-400 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none"
      />
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
        className="bg-forest-950/60 border-cream-50/15 text-cream-50 placeholder:text-cream-50/35 focus:border-flame-400 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none"
      />
      {state.status === "error" && (
        <p className="text-flame-400 text-xs">{state.message}</p>
      )}
      <LeadSubmitButton />
    </form>
  );
}

function LeadSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="eyebrow from-flame-500 to-flame-400 text-forest-950 w-full rounded-lg bg-linear-to-r py-2.5 text-xs transition-opacity disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send to the team"}
    </button>
  );
}
