import { CalendarDays, CarFront, CheckCircle2, Clock, CreditCard, GraduationCap, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";
import { student } from "@/data/mock";
import type { PackageTier } from "@/data/mock";

export function PackageCard({ item }: { item: PackageTier }) {
  return (
    <Card className={`relative flex h-full flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lift ${item.featured ? "border-brand-purple/35 ring-2 ring-brand-purple/10" : ""}`}>
      {item.featured ? <div className="absolute right-4 top-4"><Badge tone="yellow">Most Popular</Badge></div> : null}
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-purpleSoft text-brand-purple">
          {item.type === "Premium" ? <Sparkles size={22} /> : item.type === "Beginner" ? <GraduationCap size={22} /> : <CarFront size={22} />}
        </div>
        <Badge tone={item.type === "Premium" ? "yellow" : "purple"}>{item.type}</Badge>
      </div>
      <h3 className="mt-5 text-2xl font-black text-brand-ink">{item.name}</h3>
      <p className="mt-2 text-sm leading-6 text-black/70">{item.description}</p>
      <div className="mt-5 rounded-lg bg-black/[0.025] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/40">Starting Price</p>
        <p className="mt-1 text-2xl font-black text-brand-ink">{item.price}</p>
        <div className="mt-3 grid gap-2 text-sm text-black/70">
          <p className="flex items-center gap-2"><Clock size={16} className="text-brand-purple" />{item.duration}</p>
          <p className="flex items-center gap-2"><CreditCard size={16} className="text-brand-purple" />{item.sessions}</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/40">Best for</p>
        <p className="mt-1 text-sm font-bold text-brand-ink">{item.bestFor}</p>
      </div>
      <ul className="mt-4 grid gap-2 text-sm text-black/70">
        {item.includes.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckCircle2 size={16} className="shrink-0 text-brand-purple" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <Button href="/book" variant={item.featured || item.type === "Premium" ? "secondary" : "primary"} className="w-full">
          Book This Package
        </Button>
      </div>
    </Card>
  );
}

export function BookingCard({ booking }: { booking: { date: string; time: string; duration: string; packageName: string; status: string; paymentStatus: string } }) {
  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-black text-brand-ink">{booking.packageName}</h3>
          <div className="mt-3 grid gap-2 text-sm text-black/70">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-brand-purple" />
              {booking.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-brand-purple" />
              {booking.time} · {booking.duration}
            </span>
          </div>
        </div>
        <div className="grid gap-2 text-right">
          <Badge tone={booking.status === "Confirmed" ? "purple" : booking.status === "Completed" ? "dark" : "yellow"}>{booking.status}</Badge>
          <span className="text-xs font-semibold text-black/60">{booking.paymentStatus}</span>
        </div>
      </div>
    </Card>
  );
}

export function OnlineClassCard({
  item
}: {
  item: { title: string; description: string; date: string; time: string; platform: string; type: string; status: string };
}) {
  return (
    <Card className="h-full transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-md bg-brand-purpleSoft text-brand-purple">
          <GraduationCap size={20} />
        </div>
        <Badge tone={item.status === "Scheduled" ? "purple" : "muted"}>{item.status}</Badge>
      </div>
      <h3 className="mt-4 text-lg font-black text-brand-ink">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-black/70">{item.description}</p>
      <div className="mt-5 grid gap-2 text-sm text-black/70">
        <span className="flex items-center gap-2">
          <CalendarDays size={16} className="text-brand-purple" />
          {item.date}
        </span>
        <span className="flex items-center gap-2">
          <Clock size={16} className="text-brand-purple" />
          {item.time}
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={16} className="text-brand-purple" />
          {item.platform}
        </span>
      </div>
    </Card>
  );
}

export function DigitalDiscountCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[radial-gradient(circle_at_top_right,#f6c945,transparent_34%),linear-gradient(135deg,#111014,#2a0f45_55%,#57228f)] p-1 shadow-lift">
      <div className="relative overflow-hidden rounded-[7px] border border-white/15 p-6 text-white">
        <div className="absolute -right-8 -top-8 size-36 rounded-full border border-white/20" />
        <div className="absolute bottom-5 right-6 text-7xl font-black text-white/[0.06]">592</div>
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">Ultraviolet 592</p>
            <h3 className="mt-2 text-2xl font-black">Student Discount Card</h3>
          </div>
          <div className="flex size-12 items-center justify-center rounded-lg bg-white/12 text-brand-yellow">
            <ShieldCheck size={24} />
          </div>
        </div>
        <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-md bg-white/8 p-3">
            <p className="text-xs uppercase text-white/50">Student Name</p>
            <p className="font-bold">{student.name}</p>
          </div>
          <div className="rounded-md bg-white/8 p-3">
            <p className="text-xs uppercase text-white/50">Student ID</p>
            <p className="font-bold">{student.id}</p>
          </div>
          <div className="rounded-md bg-white/8 p-3">
            <p className="text-xs uppercase text-white/50">Package</p>
            <p className="font-bold">{student.packageName}</p>
          </div>
          <div className="rounded-md bg-white/8 p-3">
            <p className="text-xs uppercase text-white/50">Status</p>
            <p className="font-bold text-brand-yellow">Active Student</p>
          </div>
        </div>
        {!compact ? <p className="relative mt-8 text-xs font-semibold text-white/70">Verification ID: {student.verificationId} · Valid until {student.validUntil}</p> : null}
      </div>
    </div>
  );
}

export function PartnerBusinessCard({
  partner
}: {
  partner: { name: string; discount: string; location: string; contact: string; rules: string; status: string };
}) {
  return (
    <Card className="h-full transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-md bg-brand-purpleSoft font-black text-brand-purple">
          {partner.name.slice(0, 1)}
        </div>
        <Badge tone={partner.status === "Active" ? "purple" : "yellow"}>{partner.status}</Badge>
      </div>
      <h3 className="mt-4 font-black text-brand-ink">{partner.name}</h3>
      <p className="mt-2 text-sm font-bold text-brand-purple">{partner.discount}</p>
      <p className="mt-3 text-sm leading-6 text-black/70">{partner.rules}</p>
      <p className="mt-4 text-xs text-black/50">{partner.location} · {partner.contact}</p>
    </Card>
  );
}
