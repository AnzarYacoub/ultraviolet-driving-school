import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Badge, Button, Card, Field } from "@/components/ui";

export default function LoginPage() {
  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_top_right,#f6c94555,transparent_30%),linear-gradient(135deg,#f3ecfb,#ffffff)] px-4 py-10">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-5xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <BrandLogo />
          <div className="mt-8"><Badge tone="purple">Student Portal</Badge></div>
          <h1 className="mt-8 text-4xl font-black text-brand-ink">Student login</h1>
          <p className="mt-4 max-w-md leading-7 text-black/70">
            Access bookings, payment instructions, live class information, mock tests, and the digital discount card.
          </p>
        </div>
        <Card className="border-brand-purple/15 shadow-lift">
          <h2 className="text-2xl font-black text-brand-ink">Welcome back</h2>
          <p className="mt-2 text-sm leading-6 text-black/60">Backend authentication will be connected with Supabase later. This prototype button opens the student dashboard preview.</p>
          <div className="mt-6 grid gap-4">
            <Field label="Email" type="email" placeholder="student@example.com" />
            <Field label="Password" type="password" placeholder="••••••••" />
          </div>
          <Button href="/dashboard" className="mt-6 w-full">Open Student Dashboard</Button>
          <div className="mt-5 flex flex-wrap justify-between gap-3 text-sm font-semibold">
            <Link href="/register" className="text-brand-purple hover:underline">Create account</Link>
            <Link href="#" className="text-black/55 hover:text-brand-purple">Forgot password?</Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
