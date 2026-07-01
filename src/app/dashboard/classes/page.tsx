import { OnlineClassCard } from "@/components/Cards";
import { DashboardShell } from "@/components/DashboardShell";
import { Badge, Card, InfoTile, SectionHeader } from "@/components/ui";
import { onlineClasses } from "@/data/mock";
import { LinkIcon, MonitorPlay, Video } from "lucide-react";

export default function StudentClassesPage() {
  return (
    <DashboardShell>
      <SectionHeader eyebrow="Online Classes" title="Live theory and vehicle basics classes" copy="Class links are placeholders for now. Supabase will later store schedules, access links, and class status." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<Video size={18} />} label="Live Format" value="Theory, vehicle basics, road rules" />
        <InfoTile icon={<MonitorPlay size={18} />} label="Platforms" value="Google Meet, Zoom, WhatsApp" />
        <InfoTile icon={<LinkIcon size={18} />} label="Access" value="Student dashboard link placeholder" />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {onlineClasses.map((item) => <OnlineClassCard key={item.title} item={item} />)}
      </div>
      <Card className="mt-6 bg-brand-purpleSoft">
        <Badge tone="purple">Student Note</Badge>
        <h2 className="text-xl font-black text-brand-ink">Student Instructions</h2>
        <p className="mt-3 leading-7 text-black/70">
          Join live classes on time, keep your package/payment status updated, and check this area for Zoom, Google Meet, WhatsApp, or other class access instructions.
        </p>
      </Card>
    </DashboardShell>
  );
}
