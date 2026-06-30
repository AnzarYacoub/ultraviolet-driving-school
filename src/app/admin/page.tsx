import { BookOpenCheck, CalendarClock, CreditCard, MonitorPlay, Package, Store, Users } from "lucide-react";
import { AdminShell } from "@/components/AdminShell";
import { Badge, Button, Card, InfoTile, SectionHeader, StatsCard } from "@/components/ui";
import { bookings, discountPartners, mockTests, onlineClasses, packages, payments, students } from "@/data/mock";

export default function AdminDashboardPage() {
  return (
    <AdminShell>
      <SectionHeader eyebrow="Admin Dashboard" title="Ultraviolet platform overview" copy="Manage prototype courses, bookings, students, payments, classes, mock tests, and discount partners from one dashboard." />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard label="Total Students" value={String(students.length)} helper="Mock student records" icon={<Users size={20} />} />
        <StatsCard label="Active Bookings" value={String(bookings.length)} helper="Practical class requests" icon={<CalendarClock size={20} />} />
        <StatsCard label="Pending Payments" value={String(payments.filter((item) => item.status === "Pending").length)} helper="Manual review queue" icon={<CreditCard size={20} />} tone="yellow" />
        <StatsCard label="Packages Listed" value={String(packages.length)} helper="Visible package catalog" icon={<Package size={20} />} />
        <StatsCard label="Mock Tests" value={String(mockTests.length)} helper="One-attempt tests" icon={<BookOpenCheck size={20} />} tone="dark" />
        <StatsCard label="Discount Partners" value={String(discountPartners.length)} helper="Student card offers" icon={<Store size={20} />} />
        <StatsCard label="Online Classes" value={String(onlineClasses.length)} helper="Live schedule items" icon={<MonitorPlay size={20} />} />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<CalendarClock size={18} />} label="Booking Window" value="8 AM to 5 PM, Monday to Sunday" />
        <InfoTile icon={<Users size={18} />} label="Slot Capacity" value="4 students per class time" />
        <InfoTile icon={<CreditCard size={18} />} label="Payment Mode" value="MMG and cash confirmation" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Card>
          <h2 className="text-xl font-black text-brand-ink">Recent Bookings</h2>
          <div className="mt-5 grid gap-3">
            {bookings.map((booking) => (
              <div key={`${booking.student}-${booking.date}`} className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-black/[0.025] p-4">
                <div>
                  <p className="font-bold text-brand-ink">{booking.student}</p>
                  <p className="text-sm text-black/60">{booking.packageName} · {booking.date} · {booking.time}</p>
                </div>
                <Badge tone="purple">{booking.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-brand-ink">Quick Actions</h2>
          <div className="mt-5 grid gap-3">
            {[
              ["Add Package", "/admin/packages"],
              ["Add Booking Slot", "/admin/bookings"],
              ["Confirm Payment", "/admin/payments"],
              ["Add Mock Test", "/admin/mock-tests"],
              ["Add Discount Partner", "/admin/discount-partners"]
            ].map(([label, href]) => <Button key={href} href={href} variant="ghost" className="justify-start">{label}</Button>)}
          </div>
        </Card>
      </div>
    </AdminShell>
  );
}
