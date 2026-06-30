import { DigitalDiscountCard, PartnerBusinessCard } from "@/components/Cards";
import { AdminShell } from "@/components/AdminShell";
import { Button, Card, Field, InfoTile, SectionHeader, SelectField, TextArea } from "@/components/ui";
import { discountPartners } from "@/data/mock";
import { ShieldCheck, Store, TicketPercent } from "lucide-react";

export default function AdminDiscountPartnersPage() {
  return (
    <AdminShell>
      <SectionHeader eyebrow="Discount Partners" title="Manage student discount businesses" copy="Create partner offers and preview the digital card students will show. QR verification is intentionally excluded in this first version." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<Store size={18} />} label="Partners" value={`${discountPartners.length} sample businesses`} />
        <InfoTile icon={<TicketPercent size={18} />} label="Offer Type" value="10% placeholder discounts" />
        <InfoTile icon={<ShieldCheck size={18} />} label="Card Status" value="Active student validation" />
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h2 className="text-xl font-black text-brand-ink">Partner Business Form</h2>
          <div className="mt-5 grid gap-4">
            <Field label="Business Name" placeholder="Auto Parts Partner" />
            <Field label="Logo / Image Placeholder" placeholder="Upload later with Supabase storage" />
            <Field label="Discount Percentage" placeholder="10%" />
            <Field label="Location" placeholder="Georgetown" />
            <Field label="Contact" placeholder="Phone or email" />
            <TextArea label="Discount Rules" placeholder="Valid for active students with digital card." />
            <SelectField label="Status"><option>Active</option><option>Inactive</option></SelectField>
          </div>
          <Button className="mt-6">Save Partner</Button>
        </Card>
        <div className="grid gap-5">
          <DigitalDiscountCard compact />
          <div className="grid gap-4 md:grid-cols-2">
            {discountPartners.map((partner) => <PartnerBusinessCard key={partner.name} partner={partner} />)}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
