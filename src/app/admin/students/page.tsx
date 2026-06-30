import { AdminShell } from "@/components/AdminShell";
import { Badge, Button, InfoTile, SectionHeader } from "@/components/ui";
import { students } from "@/data/mock";
import { BookOpenCheck, CreditCard, TicketCheck } from "lucide-react";

export default function AdminStudentsPage() {
  return (
    <AdminShell>
      <SectionHeader eyebrow="Students" title="Manage student accounts" copy="Approve students, assign packages, enable discount cards, and unlock mock test attempts." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<CreditCard size={18} />} label="Payment Review" value="Approve after MMG/cash check" />
        <InfoTile icon={<TicketCheck size={18} />} label="Discount Card" value="Enable or disable per student" />
        <InfoTile icon={<BookOpenCheck size={18} />} label="Mock Tests" value="Unlock extra attempts manually" />
      </div>
      <div className="mt-8 table-wrap">
        <table className="data-table">
          <thead><tr><th>Student</th><th>Email</th><th>Phone</th><th>Package</th><th>Payment</th><th>Booking</th><th>Discount</th><th>Mock Test</th><th>Actions</th></tr></thead>
          <tbody>
            {students.map((item) => (
              <tr key={item.email}>
                <td className="font-bold text-brand-ink">{item.name}</td><td>{item.email}</td><td>{item.phone}</td><td>{item.packageName}</td><td>{item.paymentStatus}</td><td>{item.bookingStatus}</td>
                <td><Badge tone="purple">{item.discountStatus}</Badge></td><td>{item.mockTestStatus}</td>
                <td><div className="flex gap-2"><Button variant="ghost" className="min-h-9 px-3">Profile</Button><Button variant="ghost" className="min-h-9 px-3">Approve</Button><Button variant="ghost" className="min-h-9 px-3">Assign</Button><Button variant="ghost" className="min-h-9 px-3">Card</Button><Button variant="ghost" className="min-h-9 px-3">Unlock</Button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
