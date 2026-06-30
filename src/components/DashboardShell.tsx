import Link from "next/link";
import { BookOpen, CalendarDays, CreditCard, GraduationCap, LayoutDashboard, LogOut, TicketCheck } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/bookings", label: "My Bookings", icon: CalendarDays },
  { href: "/dashboard/classes", label: "Online Classes", icon: GraduationCap },
  { href: "/dashboard/mock-test", label: "Mock Test", icon: BookOpen },
  { href: "/dashboard/discount-card", label: "Discount Card", icon: TicketCheck }
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black/[0.025]">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-black/10 bg-white p-5 lg:block">
        <BrandLogo />
        <nav className="mt-8 grid gap-2">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="focus-ring flex items-center gap-3 rounded-md px-3 py-3 text-sm font-bold text-black/70 hover:bg-brand-purpleSoft hover:text-brand-purple">
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
          <Link href="/" className="mt-4 flex items-center gap-3 rounded-md px-3 py-3 text-sm font-bold text-black/40 hover:bg-black/5">
            <LogOut size={18} />
            Logout
          </Link>
        </nav>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 px-4 py-4 backdrop-blur lg:hidden">
          <BrandLogo />
          <nav aria-label="Student navigation" className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="focus-ring flex min-h-11 shrink-0 items-center gap-2 rounded-md bg-brand-purpleSoft px-3 text-xs font-bold text-brand-purple">
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
