import { BookingCard } from "@/components/Cards";
import { DashboardShell } from "@/components/DashboardShell";
import { Badge, Button, Card, Field, InfoTile, SectionHeader, SelectField, TextArea } from "@/components/ui";
import { bookings, packages } from "@/data/mock";
import { Clock, GraduationCap, ShieldAlert, Users } from "lucide-react";

export default function StudentBookingsPage() {
  return (
    <DashboardShell>
      <SectionHeader eyebrow="My Bookings" title="Practical class schedule" copy="Students must notify 3 to 4 hours before class start to rebook. Otherwise the session may be lost." />
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <InfoTile icon={<Clock size={18} />} label="Hours" value="8 AM to 5 PM" />
        <InfoTile icon={<Users size={18} />} label="Capacity" value="4 students per slot" />
        <InfoTile icon={<GraduationCap size={18} />} label="Type" value="Full package booking" />
        <InfoTile icon={<ShieldAlert size={18} />} label="Rule" value="3 to 4 hour notice" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          {bookings.map((booking) => <BookingCard key={`${booking.student}-${booking.date}`} booking={booking} />)}
        </div>
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-black text-brand-ink">Request a Booking</h2>
            <Badge tone="yellow">Pending admin review</Badge>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <SelectField label="Choose Package">
              {packages.map((item) => <option key={item.name}>{item.name}</option>)}
            </SelectField>
            <Field label="Choose Date" type="date" />
            <SelectField label="Choose Time">
              {["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => <option key={time}>{time}</option>)}
            </SelectField>
            <SelectField label="Session Duration">
              <option>1 hour</option>
              <option>2 hours</option>
            </SelectField>
            <div className="sm:col-span-2">
              <TextArea label="Student Notes" placeholder="Preferred instructor, availability, or rescheduling reason." />
            </div>
          </div>
          <Button className="mt-6">Submit Booking Request</Button>
        </Card>
      </div>
    </DashboardShell>
  );
}
