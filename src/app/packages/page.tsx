import { PackageCard } from "@/components/Cards";
import { PageShell } from "@/components/PageShell";
import { Badge, Card, InfoTile, SectionHeader } from "@/components/ui";
import { CarFront, Clock, CreditCard, Route, ShieldCheck, TrafficCone, Users } from "lucide-react";
import { packages } from "@/data/mock";

export default function PackagesPage() {
  return (
    <PageShell>
      <section className="instructor-motif instructor-motif-dark relative overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(246,201,69,0.16),transparent_26%),radial-gradient(circle_at_78%_10%,rgba(87,34,143,0.72),transparent_32%),linear-gradient(135deg,#050207,#1a082d_48%,#09070d)] py-14 text-white">
        <div className="pointer-events-none absolute -right-28 top-10 h-72 w-96 rounded-full border border-brand-yellow/25 bg-brand-purple/15" />
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <Badge tone="yellow"><TrafficCone size={14} /> Driving lesson packages</Badge>
              <SectionHeader tone="dark" as="h1" title="Choose the package that fits your driving journey" copy="Compare full driving packages for new learners, refresher students, exam preparation, and priority support. Each package is built around practical driving progress, confidence, and road readiness." />
            </div>
            <Card className="border-white/15 bg-white/95 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <Badge tone="yellow">Before you book</Badge>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <InfoTile icon={<Clock size={18} />} label="Hours" value="8 AM to 5 PM" />
                <InfoTile icon={<Users size={18} />} label="Capacity" value="4 students per slot" />
                <InfoTile icon={<CreditCard size={18} />} label="Payment" value="MMG or cash review" />
                <InfoTile icon={<ShieldCheck size={18} />} label="Notice" value="3 to 4 hours to reschedule" />
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="border-b border-black/10 bg-white/90 py-8 backdrop-blur">
        <div className="container-shell grid gap-4 md:grid-cols-3">
          <InfoTile icon={<CarFront size={18} />} label="Practical Focus" value="Road lessons and confidence building" />
          <InfoTile icon={<Route size={18} />} label="Progress Path" value="Beginner to priority support" />
          <InfoTile icon={<TrafficCone size={18} />} label="Class Readiness" value="Theory, vehicle basics, and mock prep" />
        </div>
      </section>
      <section className="py-14 md:py-16">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => <PackageCard key={item.name} item={item} />)}
        </div>
      </section>
    </PageShell>
  );
}
