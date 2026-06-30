import { AdminShell } from "@/components/AdminShell";
import { Badge, Button, Card, Field, InfoTile, SectionHeader, SelectField, TextArea } from "@/components/ui";
import { onlineClasses } from "@/data/mock";
import { LinkIcon, MonitorPlay, Video } from "lucide-react";

export default function AdminClassesPage() {
  return (
    <AdminShell>
      <SectionHeader eyebrow="Online Classes" title="Manage live theory and vehicle basics classes" copy="Add, edit, delete, and publish class details with future platform/access links." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<Video size={18} />} label="Class Types" value="Theory, vehicle basics, road rules" />
        <InfoTile icon={<MonitorPlay size={18} />} label="Platforms" value="Meet, Zoom, WhatsApp" />
        <InfoTile icon={<LinkIcon size={18} />} label="Access Links" value="Stored later in Supabase" />
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Class</th><th>Date</th><th>Time</th><th>Platform</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {onlineClasses.map((item) => (
                <tr key={item.title}>
                  <td className="font-bold text-brand-ink">{item.title}</td><td>{item.date}</td><td>{item.time}</td><td>{item.platform}</td><td>{item.type}</td>
                  <td><Badge tone={item.status === "Scheduled" ? "purple" : "muted"}>{item.status}</Badge></td>
                  <td><div className="flex gap-2"><Button variant="ghost" className="min-h-9 px-3">Edit</Button><Button variant="ghost" className="min-h-9 px-3">Delete</Button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card>
          <h2 className="text-xl font-black text-brand-ink">Class Details</h2>
          <div className="mt-5 grid gap-4">
            <Field label="Class Title" placeholder="Theory Exam Prep Live Class" />
            <TextArea label="Description" placeholder="Class summary and student instructions." />
            <Field label="Date" placeholder="Every Tuesday" />
            <Field label="Time" placeholder="6:00 PM" />
            <Field label="Platform / Link" placeholder="Google Meet link placeholder" />
            <SelectField label="Class Type"><option>Theory</option><option>Vehicle Basics</option><option>Readiness</option><option>Road Rules</option></SelectField>
            <SelectField label="Status"><option>Scheduled</option><option>Draft</option><option>Completed</option></SelectField>
          </div>
          <Button className="mt-6">Save Class</Button>
        </Card>
      </div>
    </AdminShell>
  );
}
