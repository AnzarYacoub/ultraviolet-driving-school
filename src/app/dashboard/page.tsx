import { BookOpen, CalendarDays, CreditCard, MonitorPlay, Package, ShieldCheck, TicketCheck } from "lucide-react";
import { BookingCard, DigitalDiscountCard } from "@/components/Cards";
import { DashboardShell } from "@/components/DashboardShell";
import { Badge, Button, Card, InfoTile, StatsCard } from "@/components/ui";
import { bookings, student } from "@/data/mock";

const quickAccess = [
  { label: "Online class access", href: "/dashboard/classes", icon: MonitorPlay },
  { label: "Mock test status", href: "/dashboard/mock-test", icon: BookOpen },
  { label: "Digital discount card", href: "/dashboard/discount-card", icon: TicketCheck }
];

export default function StudentDashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-purple">Student Portal</p>
          <h1 className="mt-2 text-3xl font-black text-brand-ink">Welcome, {student.name}</h1>
          <p className="mt-2 text-black/60">Track your package, classes, mock test access, and discount card status.</p>
        </div>
        <Button href="/dashboard/bookings" variant="secondary">Book a Class</Button>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard label="Current Package" value={student.packageName} helper="Full practical booking path" icon={<Package size={20} />} />
        <StatsCard label="Payment Status" value={student.paymentStatus} helper="MMG/cash admin review" icon={<CreditCard size={20} />} tone="yellow" />
        <StatsCard label="Mock Test" value={student.mockTestStatus} helper="One attempt available" icon={<BookOpen size={20} />} />
        <StatsCard label="Discount Card" value={student.discountStatus} helper="Valid student benefit" icon={<TicketCheck size={20} />} tone="dark" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-black text-brand-ink">Upcoming Booking</h2>
            <Badge tone="yellow">Action needed</Badge>
          </div>
          <div className="mt-5">
            <BookingCard booking={bookings[0]} />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <InfoTile icon={<CalendarDays size={18} />} label="Class Hours" value="8 AM to 5 PM" />
            <InfoTile icon={<ShieldCheck size={18} />} label="Notice" value="3 to 4 hours" />
            <InfoTile icon={<CreditCard size={18} />} label="Payment" value="Manual review" />
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-brand-ink">Quick Access</h2>
          <div className="mt-5 grid gap-3">
            {quickAccess.map(({ label, href, icon: Icon }) => (
              <Button key={href} href={href} variant="ghost" className="justify-start">
                <Icon size={18} /> {label}
              </Button>
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="bg-brand-purpleSoft">
          <h2 className="text-xl font-black text-brand-ink">Student Progress Snapshot</h2>
          <div className="mt-5 grid gap-3">
            {["Package selected", "Booking request pending", "Payment waiting for confirmation", "Mock test available"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md bg-white p-3 text-sm font-bold text-black/70">
                <span className="size-2 rounded-full bg-brand-purple" />
                {item}
              </div>
            ))}
          </div>
        </Card>
        <DigitalDiscountCard compact />
      </div>
    </DashboardShell>
  );
}
