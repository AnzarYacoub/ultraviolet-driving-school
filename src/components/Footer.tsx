import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const quickLinks = [
  ["Packages", "/packages"],
  ["Book Class", "/book"],
  ["Student Dashboard", "/dashboard"],
  ["Admin Dashboard", "/admin"]
];

export function Footer() {
  return (
    <footer className="bg-brand-ink py-12 text-white">
      <div className="container-shell grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="rounded-lg bg-white p-3 text-brand-ink md:w-fit">
            <BrandLogo />
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
            Practical driving classes, live theory support, mock test preparation, and student discount card access for Ultraviolet 592.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <ul className="mt-4 grid gap-2 text-sm text-white/70">
            <li>Phone/WhatsApp: 602-2583</li>
            <li>Email: Udsdrivingschool30@gmail.com</li>
            <li>Facebook, TikTok, and Instagram links coming soon</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-4 grid gap-2 text-sm text-white/70">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-brand-yellow">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-white/40">Designed and developed as a first-stage frontend prototype.</p>
        </div>
      </div>
    </footer>
  );
}
