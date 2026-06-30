import { DigitalDiscountCard, PartnerBusinessCard } from "@/components/Cards";
import { DashboardShell } from "@/components/DashboardShell";
import { InfoTile, SectionHeader } from "@/components/ui";
import { discountPartners } from "@/data/mock";
import { ShieldCheck, Store, TicketPercent } from "lucide-react";

export default function StudentDiscountCardPage() {
  return (
    <DashboardShell>
      <SectionHeader eyebrow="Discount Card" title="Your digital student discount card" copy="Show this card at active partner businesses. QR verification is intentionally left for a future upgrade." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<ShieldCheck size={18} />} label="Status" value="Active student card" />
        <InfoTile icon={<TicketPercent size={18} />} label="Discounts" value="Sample 10% partner offers" />
        <InfoTile icon={<Store size={18} />} label="Directory" value="Partner business list" />
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <DigitalDiscountCard />
        <div className="grid gap-4 sm:grid-cols-2">
          {discountPartners.map((partner) => <PartnerBusinessCard key={partner.name} partner={partner} />)}
        </div>
      </div>
    </DashboardShell>
  );
}
