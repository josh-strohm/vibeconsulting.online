"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm({ source = "/contact" }: { source?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      source,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!res.ok) {
        if (json.fieldErrors) setFieldErrors(json.fieldErrors);
        setError(json.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setError("Network error. Check your connection and try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 sm:p-10 lg:p-12"
        role="status"
      >
        <p className="font-heading text-lg font-semibold text-fog">
          Message sent
        </p>
        <p className="mt-3 text-sm leading-relaxed text-fog-muted">
          Thanks. We will get back to you soon. You can also{" "}
          <a href="/calendar" className="text-fog underline-offset-4 hover:underline">
            book a call
          </a>{" "}
          or email us anytime.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 border-ink-border"
          onClick={() => setState("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      id="message"
      onSubmit={onSubmit}
      className="space-y-7 rounded-2xl border border-ink-border bg-ink-elevated p-8 sm:space-y-8 sm:p-10 lg:p-12"
      noValidate
    >
      <div className="pb-1">
        <h2 className="font-heading text-xl font-semibold text-fog sm:text-2xl">
          Send a message
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-fog-muted sm:text-base">
          Tell us a bit about your team and what you are trying to fix.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
        <div className="space-y-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Alex Rivera"
            aria-invalid={!!fieldErrors.name}
            className="h-11 border-ink-border bg-ink px-3.5"
          />
          {fieldErrors.name ? (
            <p className="text-xs text-coral">{fieldErrors.name}</p>
          ) : null}
        </div>
        <div className="space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="alex@company.com"
            aria-invalid={!!fieldErrors.email}
            className="h-11 border-ink-border bg-ink px-3.5"
          />
          {fieldErrors.email ? (
            <p className="text-xs text-coral">{fieldErrors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="company">
          Company <span className="text-fog-muted">(optional)</span>
        </Label>
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Acme Services"
          className="h-11 border-ink-border bg-ink px-3.5"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={8}
          placeholder="What are you trying to fix? Tools you use, team size, anything useful."
          aria-invalid={!!fieldErrors.message}
          className="min-h-[11rem] border-ink-border bg-ink px-3.5 py-3"
        />
        {fieldErrors.message ? (
          <p className="text-xs text-coral">{fieldErrors.message}</p>
        ) : null}
      </div>

      {error ? (
        <p className="text-sm text-coral" role="alert">
          {error}
        </p>
      ) : null}

      <div className="pt-1">
        <Button
          type="submit"
          size="lg"
          className="h-12 w-full sm:w-auto sm:px-10"
          disabled={state === "loading"}
        >
          {state === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
      </div>
    </form>
  );
}
