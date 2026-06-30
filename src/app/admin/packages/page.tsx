import { Edit, Plus, Trash2 } from "lucide-react";
import { AdminShell } from "@/components/AdminShell";
import { Badge, Button, Card, Field, InfoTile, SectionHeader, SelectField, TextArea } from "@/components/ui";
import { packages } from "@/data/mock";

export default function AdminPackagesPage() {
  return (
    <AdminShell>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <SectionHeader eyebrow="Packages" title="Manage courses and packages" copy="Update package details, duration options, active status, and publishing state." />
        <Button><Plus size={18} /> Add New Package</Button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile label="Published" value={`${packages.filter((item) => item.status === "Active").length} active packages`} />
        <InfoTile label="Most booked" value="Silver Package" />
        <InfoTile label="Future table" value="Supabase packages/courses" />
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Package</th><th>Price</th><th>Duration</th><th>Status</th><th>Bookings</th><th>Actions</th></tr></thead>
            <tbody>
              {packages.map((item) => (
                <tr key={item.name}>
                  <td className="font-bold text-brand-ink">{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.duration}</td>
                  <td><Badge tone={item.status === "Active" ? "purple" : "muted"}>{item.status}</Badge></td>
                  <td>{item.bookings}</td>
                  <td><div className="flex gap-2"><Button variant="ghost" className="min-h-9 px-3"><Edit size={16} /></Button><Button variant="ghost" className="min-h-9 px-3"><Trash2 size={16} /></Button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card>
          <h2 className="text-xl font-black text-brand-ink">Create/Edit Package</h2>
          <div className="mt-5 grid gap-4">
            <Field label="Package Name" placeholder="Gold Package" />
            <TextArea label="Description" placeholder="Professional package description." />
            <Field label="Price" placeholder="GYD $75,000" />
            <SelectField label="Session Duration Options"><option>1 hour and 2 hour sessions</option><option>1 hour only</option><option>2 hours only</option></SelectField>
            <SelectField label="Package Type"><option>Beginner</option><option>Practical</option><option>Premium</option></SelectField>
            <SelectField label="Status"><option>Active / Published</option><option>Inactive / Unpublished</option></SelectField>
          </div>
          <Button className="mt-6">Save Package</Button>
        </Card>
      </div>
    </AdminShell>
  );
}
