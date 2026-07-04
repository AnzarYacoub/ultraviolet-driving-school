import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Badge, Button, Card, Field, SelectField } from "@/components/ui";
import { packages } from "@/data/mock";

export default function RegisterPage() {
  return (
    <main className="instructor-motif instructor-motif-light min-h-dvh bg-[radial-gradient(circle_at_top_right,#f6c94555,transparent_30%),linear-gradient(135deg,#f3ecfb,#ffffff)] px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <BrandLogo />
        <Card className="mt-8 border-brand-purple/15 shadow-lift">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <Badge tone="purple">Student Registration</Badge>
              <h1 className="text-3xl font-black text-brand-ink">Register as a student</h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-black/60">
                Student accounts and bookings may require payment/admin confirmation before full access is activated.
              </p>
            </div>
            <Link href="/login" className="text-sm font-bold text-brand-purple hover:underline">Already registered?</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Field label="Full Name" placeholder="Alicia Persaud" />
            <Field label="Email" type="email" placeholder="student@example.com" />
            <Field label="Phone" placeholder="602-2583" />
            <SelectField label="Preferred Package">
              {packages.map((item) => <option key={item.name}>{item.name}</option>)}
            </SelectField>
            <Field label="Password" type="password" placeholder="Create password" />
            <Field label="Confirm Password" type="password" placeholder="Confirm password" />
          </div>
          <Button href="/dashboard" className="mt-6">Register Prototype Account</Button>
        </Card>
      </div>
    </main>
  );
}
