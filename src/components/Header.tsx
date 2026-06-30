"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui";

const links = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/book", label: "Book Class" },
  { href: "/#online-classes", label: "Online Classes" },
  { href: "/#mock-test", label: "Mock Test" },
  { href: "/#discount-card", label: "Discount Card" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <BrandLogo />
        <nav className="hidden items-center gap-5 text-sm font-semibold text-black/70 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring rounded-md hover:text-brand-purple">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/login" variant="ghost" className="px-4">
            Login
          </Button>
          <Button href="/register" variant="secondary" className="px-4">
            Register
          </Button>
        </div>
        <button
          type="button"
          aria-label="Open menu"
          className="focus-ring inline-flex size-11 items-center justify-center rounded-md border border-black/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <nav className="container-shell grid gap-2 py-4 text-sm font-semibold text-black/75">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 hover:bg-brand-purpleSoft" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <Button href="/login" variant="ghost">
                Login
              </Button>
              <Button href="/register" variant="secondary">
                Register
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
