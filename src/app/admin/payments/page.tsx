import { AdminShell } from "@/components/AdminShell";
import { Badge, Button, Card, InfoTile, SectionHeader } from "@/components/ui";
import { payments } from "@/data/mock";
import { Banknote, CreditCard, ShieldCheck } from "lucide-react";

export default function AdminPaymentsPage() {
  return (
    <AdminShell>
      <SectionHeader eyebrow="Payments" title="Manual payment confirmations" copy="This system is designed for MMG and cash payment confirmation. No automatic payment gateway is included in this first version." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<CreditCard size={18} />} label="MMG" value="Review uploaded/reference proof" />
        <InfoTile icon={<Banknote size={18} />} label="Cash" value="Admin confirms local payment" />
        <InfoTile icon={<ShieldCheck size={18} />} label="No Gateway" value="Stripe/PayPal not included" />
      </div>
      <Card className="mt-8 bg-brand-yellowSoft">
        <p className="font-semibold text-brand-ink">Payment note: admins review MMG proof or cash payment records, then confirm or reject the student payment status manually.</p>
      </Card>
      <div className="mt-6 table-wrap">
        <table className="data-table">
          <thead><tr><th>Student</th><th>Package</th><th>Amount</th><th>Method</th><th>Proof</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {payments.map((item) => (
              <tr key={`${item.student}-${item.amount}`}>
                <td className="font-bold text-brand-ink">{item.student}</td><td>{item.packageName}</td><td>{item.amount}</td><td>{item.method}</td><td>{item.proof}</td>
                <td><Badge tone={item.status === "Confirmed" ? "purple" : "yellow"}>{item.status}</Badge></td>
                <td><div className="flex gap-2"><Button variant="ghost" className="min-h-9 px-3">Confirm</Button><Button variant="ghost" className="min-h-9 px-3">Reject</Button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
