import { PackageCard } from "@/components/Cards";
import { PageShell } from "@/components/PageShell";
import { Badge, Card, InfoTile, SectionHeader } from "@/components/ui";
import { Clock, CreditCard, ShieldCheck, Users } from "lucide-react";
import { packages } from "@/data/mock";

export default function PackagesPage() {
  return (
    <PageShell>
      <section className="bg-brand-purpleSoft py-14">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <SectionHeader eyebrow="Packages" title="Choose a practical driving package" copy="Compare full driving packages for new learners, refresher students, exam preparation, and priority support. Final prices and session counts can be updated from the admin dashboard later." />
            <Card className="bg-white/90">
              <Badge tone="yellow">Booking rules</Badge>
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
      <section className="py-14">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => <PackageCard key={item.name} item={item} />)}
        </div>
      </section>
    </PageShell>
  );
}
