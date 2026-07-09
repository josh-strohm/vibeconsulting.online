import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink-border bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-lg font-semibold">
            <span className="text-gradient">{siteConfig.name}</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-fog-muted">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-fog-muted">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-sm text-fog-muted hover:text-fog">
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-fog-muted hover:text-fog"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-fog-muted">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-fog-muted">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-fog"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <Link href="/calendar" className="hover:text-fog">
                Book a call
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-fog">
                Contact form
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-fog-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono">{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
