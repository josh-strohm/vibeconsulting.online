"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-border/80 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-fog transition-colors hover:text-white"
        >
          <span className="text-gradient">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-fog-muted transition-colors hover:text-fog"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/calendar"
            className={cn(buttonVariants({ size: "default" }), "h-9 px-4")}
          >
            Book a call
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-ink-border text-fog md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-ink-border bg-ink px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-fog-muted hover:bg-ink-elevated hover:text-fog"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/calendar"
              className={cn(buttonVariants({ size: "lg" }), "mt-2 justify-center")}
              onClick={() => setOpen(false)}
            >
              Book a call
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
