import { AdminShell } from "@/components/AdminShell";
import { Badge, Button, Card, Field, InfoTile, SectionHeader, SelectField } from "@/components/ui";
import { bookings } from "@/data/mock";
import { CalendarClock, Clock, Users } from "lucide-react";

export default function AdminBookingsPage() {
  return (
    <AdminShell>
      <SectionHeader eyebrow="Bookings" title="Manage practical class bookings" copy="Set available days, times from 8 AM to 5 PM, capacity limits, blocked dates, and booking statuses." />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<Clock size={18} />} label="Operating Hours" value="8:00 AM to 5:00 PM" />
        <InfoTile icon={<CalendarClock size={18} />} label="Available Days" value="Monday to Sunday" />
        <InfoTile icon={<Users size={18} />} label="Slot Limit" value="4 students per time slot" />
      </div>
      <div className="mt-8 grid gap-6">
        <div className="table-wrap">
          <table className="data-table">
            <thead><tr><th>Student</th><th>Package</th><th>Date</th><th>Time</th><th>Duration</th><th>Payment</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {bookings.map((item) => (
                <tr key={`${item.student}-${item.date}`}>
                  <td className="font-bold text-brand-ink">{item.student}</td><td>{item.packageName}</td><td>{item.date}</td><td>{item.time}</td><td>{item.duration}</td><td>{item.paymentStatus}</td>
                  <td><Badge tone={item.status === "Confirmed" ? "purple" : "yellow"}>{item.status}</Badge></td>
                  <td><div className="flex gap-2"><Button variant="ghost" className="min-h-9 px-3">Confirm</Button><Button variant="ghost" className="min-h-9 px-3">Reschedule</Button><Button variant="ghost" className="min-h-9 px-3">Completed</Button><Button variant="ghost" className="min-h-9 px-3">Missed</Button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card>
          <h2 className="text-xl font-black text-brand-ink">Availability Controls</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <SelectField label="Available Days"><option>Monday to Sunday</option><option>Monday to Friday</option><option>Saturday and Sunday</option></SelectField>
            <SelectField label="Time Window"><option>8:00 AM to 5:00 PM</option></SelectField>
            <Field label="Capacity Per Slot" placeholder="4 students" />
            <Field label="Block Date/Time" placeholder="2026-07-10 9:00 AM" />
          </div>
          <Button className="mt-6">Save Availability</Button>
        </Card>
      </div>
    </AdminShell>
  );
}
