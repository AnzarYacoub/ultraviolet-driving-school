import { ArrowRight, BookOpenCheck, CarFront, Clock, CreditCard, GraduationCap, MessageCircle, ShieldCheck, TicketCheck, Users } from "lucide-react";
import { DigitalDiscountCard, OnlineClassCard, PackageCard, PartnerBusinessCard } from "@/components/Cards";
import { PageShell } from "@/components/PageShell";
import { Badge, Button, Card, Field, InfoTile, SectionHeader, TextArea } from "@/components/ui";
import { discountPartners, onlineClasses, packages } from "@/data/mock";

const heroServices = [
  { label: "Practical Lessons", value: "Road-ready driving classes", icon: <CarFront size={18} /> },
  { label: "Full Packages", value: "Teen, refresher, Bronze to VIP", icon: <GraduationCap size={18} /> },
  { label: "Mock Tests", value: "One-attempt theory prep", icon: <BookOpenCheck size={18} /> },
  { label: "Discount Card", value: "Student partner benefits", icon: <TicketCheck size={18} /> }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="overflow-hidden bg-[radial-gradient(circle_at_top_right,#f6c94540,transparent_28%),linear-gradient(135deg,#2a0f45,#57228f_55%,#111014)] py-16 text-white md:py-24">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge tone="yellow">Ultraviolet 592 Driving School Platform</Badge>
            <h1 className="mt-5 text-4xl font-black tracking-normal md:text-6xl">Ultraviolet Driving School</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Practical driving lessons, full packages, live online theory classes, mock test preparation, digital student discount cards, and easy booking in one professional student platform.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/packages" variant="secondary">
                Compare Packages <ArrowRight size={18} />
              </Button>
              <Button href="/book" variant="ghost">
                Book Practical Class
              </Button>
              <Button href="https://wa.me/5926022583" variant="dark">
                <MessageCircle size={18} /> WhatsApp Us
              </Button>
            </div>
            <div className="mt-10 grid gap-4 text-sm text-white/75 sm:grid-cols-3">
              <span className="flex items-center gap-2"><Clock size={18} className="text-brand-yellow" /> 8 AM to 5 PM</span>
              <span className="flex items-center gap-2"><Users size={18} className="text-brand-yellow" /> 4 students per slot</span>
              <span className="flex items-center gap-2"><CreditCard size={18} className="text-brand-yellow" /> MMG or cash confirmation</span>
            </div>
          </div>
          <Card className="bg-white/95 p-5 shadow-lift">
            <div className="rounded-lg bg-brand-purpleSoft p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-purple">Student Journey</p>
                  <h2 className="mt-2 text-2xl font-black text-brand-ink">From booking to test prep</h2>
                </div>
                <div className="hidden size-12 items-center justify-center rounded-lg bg-brand-purple text-white sm:flex">
                  <CarFront size={24} />
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {heroServices.map((item) => (
                  <InfoTile key={item.label} icon={item.icon} label={item.label} value={item.value} />
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-brand-ink p-4 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-yellow">Rescheduling Policy</p>
                <p className="mt-2 text-sm leading-6 text-white/75">Students notify 3 to 4 hours before class to rebook and protect their session.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader eyebrow="Packages" title="Training paths for every type of learner" copy="Choose from beginner, refresher, balanced, advanced, and priority support packages. Pricing and session counts are ready to connect to Supabase later." />
            <Button href="/packages" variant="ghost">View All Packages</Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => <PackageCard key={item.name} item={item} />)}
          </div>
        </div>
      </section>

      <section className="bg-black/[0.025] py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow="Practical Booking" title="Book full practical packages with clear class rules" copy="Classes run Monday to Sunday from 8:00 AM to 5:00 PM. Students can request 1-hour or 2-hour sessions, with up to 4 students per time slot." />
          <Card>
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoTile icon={<Users size={18} />} label="Capacity" value="Up to 4 students per slot" />
              <InfoTile icon={<GraduationCap size={18} />} label="Booking Type" value="Students book a full package" />
              <InfoTile icon={<Clock size={18} />} label="Notice" value="Notify 3 to 4 hours before class" />
              <InfoTile icon={<ShieldCheck size={18} />} label="Late Notice" value="Missed notice may lose the session" />
            </div>
            <Button href="/book" className="mt-6">Book Your Practical Class</Button>
          </Card>
        </div>
      </section>

      <section id="online-classes" className="py-16 md:py-20">
        <div className="container-shell">
          <SectionHeader eyebrow="Live Online Classes" title="Theory, road rules, and vehicle basics support" copy="Students log in to view live schedules, access instructions, and future Google Meet, Zoom, or WhatsApp class links." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {onlineClasses.map((item) => <OnlineClassCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      <section id="mock-test" className="bg-brand-purpleSoft py-16 md:py-20">
        <div className="container-shell grid items-center gap-8 lg:grid-cols-2">
          <SectionHeader eyebrow="Mock Test Prep" title="One-attempt theory practice with admin unlocks" copy="Students can prepare for the theoretical driving exam with multiple-choice tests. Admin can unlock or release another attempt when needed." />
          <Card>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-brand-ink">Theory Mock Test 01</h3>
                <p className="mt-2 text-sm text-black/70">Status: Available · Attempts: 0 of 1 used</p>
              </div>
              <Badge tone="yellow">One Attempt</Badge>
            </div>
            <Button href="/dashboard/mock-test" className="mt-6">Access Mock Test</Button>
          </Card>
        </div>
      </section>

      <section id="discount-card" className="py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader eyebrow="Digital Discount Card" title="A real student membership benefit" copy="Students can receive a digital Ultraviolet Driving School card for participating partner discounts, starting with clean 10% placeholder offers." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {discountPartners.map((partner) => <PartnerBusinessCard key={partner.name} partner={partner} />)}
            </div>
          </div>
          <DigitalDiscountCard />
        </div>
      </section>

      <section id="about" className="bg-brand-ink py-16 text-white md:py-20">
        <div className="container-shell grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader tone="dark" eyebrow="About" title="Built for safer, more confident drivers" copy="Ultraviolet Driving School provides practical driving training, theory preparation, vehicle basics education, and student support for persons learning to drive safely and confidently." />
          <div className="grid gap-4 sm:grid-cols-3">
            {["Practical driving classes", "Live theory preparation", "Vehicle basics pre-class learning"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.08] p-5 text-sm font-bold text-white/80">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Contact" title="Start your driving journey" copy="Call or WhatsApp 602-2583, or send a message for package selection and practical booking guidance." />
          <Card>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" placeholder="Your full name" />
              <Field label="Phone or Email" placeholder="602-2583 or email@example.com" />
              <div className="sm:col-span-2">
                <TextArea label="Message" placeholder="Tell us which package or class you are interested in." />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button>Send Message</Button>
              <Button href="https://wa.me/5926022583" variant="secondary">WhatsApp 602-2583</Button>
            </div>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
