import Link from "next/link";
import {
  BookOpenCheck,
  CalendarClock,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  MonitorPlay,
  Package,
  Store,
  Users
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const nav = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/packages", label: "Packages", icon: Package },
  { href: "/admin/bookings", label: "Bookings", icon: CalendarClock },
  { href: "/admin/students", label: "Students", icon: Users },
  { href: "/admin/payments", label: "Payments", icon: CreditCard },
  { href: "/admin/classes", label: "Online Classes", icon: MonitorPlay },
  { href: "/admin/mock-tests", label: "Mock Tests", icon: BookOpenCheck },
  { href: "/admin/discount-partners", label: "Discount Partners", icon: Store }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black/[0.025]">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-black/10 bg-brand-ink p-5 text-white lg:block">
        <div className="rounded-lg bg-white p-3 text-brand-ink">
          <BrandLogo />
        </div>
        <p className="mt-5 rounded-md bg-brand-yellow/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-yellow">Admin Panel</p>
        <nav className="mt-5 grid gap-2">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="focus-ring flex items-center gap-3 rounded-md px-3 py-3 text-sm font-bold text-white/70 hover:bg-white/10 hover:text-white">
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
          <Link href="/" className="mt-4 flex items-center gap-3 rounded-md px-3 py-3 text-sm font-bold text-white/40 hover:bg-white/10">
            <ClipboardList size={18} />
            Public Website
          </Link>
        </nav>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 px-4 py-4 backdrop-blur lg:hidden">
          <BrandLogo />
          <nav aria-label="Admin navigation" className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="focus-ring flex min-h-11 shrink-0 items-center gap-2 rounded-md bg-brand-ink px-3 text-xs font-bold text-white">
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>
        <main className="container-shell py-8 lg:py-10">{children}</main>
      </div>
    </div>
  );
}
