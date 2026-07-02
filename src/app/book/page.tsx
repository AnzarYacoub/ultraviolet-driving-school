import Image from "next/image";
import { CalendarDays, Clock, CreditCard, GraduationCap, ShieldAlert, Users } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Badge, Button, Card, Field, InfoTile, SectionHeader, SelectField, TextArea } from "@/components/ui";
import { packages } from "@/data/mock";

export default function BookPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(246,201,69,0.16),transparent_26%),radial-gradient(circle_at_78%_10%,rgba(87,34,143,0.72),transparent_32%),linear-gradient(135deg,#050207,#1a082d_48%,#09070d)] py-14 text-white">
        <div className="pointer-events-none absolute -right-28 top-10 h-72 w-96 rounded-full border border-brand-yellow/25 bg-brand-purple/15" />
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Badge tone="yellow">Practical driving class booking</Badge>
            <SectionHeader tone="dark" as="h1" title="Request your driving lesson time" copy="Students book full driving packages, choose a preferred day and time, then wait for manual payment/admin confirmation." />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoTile icon={<CalendarDays size={18} />} label="Days" value="Monday to Sunday" />
              <InfoTile icon={<Clock size={18} />} label="Hours" value="8:00 AM to 5:00 PM" />
              <InfoTile icon={<Users size={18} />} label="Capacity" value="Up to 4 students per time slot" />
              <InfoTile icon={<GraduationCap size={18} />} label="Booking" value="Full package booking only" />
            </div>
          </div>
          <Card className="overflow-hidden border-white/15 bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src="/images/driving-lesson-hero.png"
                alt="Instructor guiding a driving school vehicle through cones"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-yellow">Practical lesson request</p>
                <p className="mt-2 text-xl font-black">Choose your package, date, time, and session duration.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <section className="py-14">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-black text-brand-ink">Booking Request</h2>
                <p className="mt-2 text-sm leading-6 text-black/60">Choose a package, preferred date, time, and session length. This is a prototype form ready for Supabase booking capacity later.</p>
              </div>
              <Badge tone="purple">Phase 1 UI</Badge>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" placeholder="Alicia Persaud" />
              <Field label="Phone or Email" placeholder="602-2583" />
              <SelectField label="Choose Package">
                {packages.map((item) => <option key={item.name}>{item.name}</option>)}
              </SelectField>
              <Field label="Preferred Date" type="date" />
              <SelectField label="Preferred Time">
                {["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => <option key={time}>{time}</option>)}
              </SelectField>
              <SelectField label="Session Duration">
                <option>1 hour</option>
                <option>2 hours</option>
              </SelectField>
              <div className="sm:col-span-2">
                <TextArea label="Student Notes" placeholder="Add availability details, package questions, or payment notes." />
              </div>
            </div>
            <Button className="mt-6">Submit Booking Request</Button>
          </Card>
          <div className="grid gap-5">
            <Card className="bg-brand-ink text-white">
              <Badge tone="yellow">Important Rule</Badge>
              <h3 className="mt-4 text-2xl font-black">Rescheduling notice</h3>
              <p className="mt-3 leading-7 text-white/70">
                Students must notify the school 3 to 4 hours before class starts so the session can be rebooked. If notice is not provided in time, that session may be lost.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-lg bg-white/10 p-4 text-sm text-white/75">
                <ShieldAlert size={20} className="mt-0.5 shrink-0 text-brand-yellow" />
                This rule is intentionally visible so students understand the booking policy before submitting a request.
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-brand-yellow/30 p-3 text-brand-ink"><CreditCard size={20} /></div>
                <div>
                  <h3 className="font-black text-brand-ink">Manual/local payment</h3>
                  <p className="mt-2 text-sm leading-6 text-black/70">Payment options are MMG payment and cash payment with admin confirmation. Stripe, PayPal, and card checkout are intentionally not included yet.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
