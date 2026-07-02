import Image from "next/image";
import { BookOpenCheck, CalendarCheck, CarFront, CheckCircle2, ClipboardCheck, Clock, CreditCard, Crown, GraduationCap, MessageCircle, Route, ShieldCheck, Star, TicketCheck, Users } from "lucide-react";
import { DigitalDiscountCard, OnlineClassCard, PackageCard, PartnerBusinessCard } from "@/components/Cards";
import { PageShell } from "@/components/PageShell";
import { Badge, Button, Card, Field, InfoTile, SectionHeader, TextArea } from "@/components/ui";
import { discountPartners, onlineClasses, packages } from "@/data/mock";

const heroTrustBadges = [
  { label: "Professional Instructors", icon: <ShieldCheck size={20} /> },
  { label: "Mock Test Preparation", icon: <ClipboardCheck size={20} /> },
  { label: "Flexible Booking", icon: <CalendarCheck size={20} /> },
  { label: "Student Benefits", icon: <Star size={20} /> }
];

const heroFeatureCards = [
  { label: "Practical Lessons", value: "Road-ready driving classes with focused guidance.", icon: <CarFront size={28} /> },
  { label: "Theory Support", value: "Live online classes and study preparation.", icon: <BookOpenCheck size={28} /> },
  { label: "Mock Tests", value: "Practice with confidence before exam day.", icon: <ClipboardCheck size={28} /> },
  { label: "Full Packages", value: "Teen, refresher, Bronze, Silver, Gold, and VIP.", icon: <Crown size={28} /> }
];

const howItWorks = [
  { step: "01", title: "Choose a package", copy: "Pick the driving package that matches your experience level.", icon: <GraduationCap size={20} /> },
  { step: "02", title: "Book your class", copy: "Request a preferred day, time, and 1-hour or 2-hour session.", icon: <CalendarCheck size={20} /> },
  { step: "03", title: "Confirm payment", copy: "Use MMG or cash with manual admin confirmation.", icon: <CreditCard size={20} /> },
  { step: "04", title: "Start learning", copy: "Attend practical lessons, theory support, and mock test prep.", icon: <CarFront size={20} /> }
];

const whyChoose = [
  { title: "Practical driving guidance", copy: "Structured road practice for new, returning, and exam-ready students.", icon: <CarFront size={22} /> },
  { title: "Live theory support", copy: "Online classes for theory preparation, road signs, road rules, and vehicle basics.", icon: <BookOpenCheck size={22} /> },
  { title: "Flexible package options", copy: "Teen, Refreshers, Bronze, Silver, Gold, and VIP packages for different goals.", icon: <GraduationCap size={22} /> },
  { title: "Mock exam preparation", copy: "One-attempt mock test flow with admin unlock support for future retakes.", icon: <ShieldCheck size={22} /> },
  { title: "Student discount benefits", copy: "Digital card and partner directory for future active-student perks.", icon: <TicketCheck size={22} /> },
  { title: "Easy booking process", copy: "Clear schedule rules, session options, capacity, and rescheduling policy.", icon: <CalendarCheck size={22} /> }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_9%_14%,rgba(246,201,69,0.18),transparent_25%),radial-gradient(circle_at_72%_18%,rgba(127,56,210,0.6),transparent_34%),linear-gradient(135deg,#050207_0%,#180829_42%,#09070d_100%)] pb-10 pt-12 text-white md:pb-16 md:pt-16">
        <div className="pointer-events-none absolute -right-32 bottom-[-14rem] h-[34rem] w-[58rem] rounded-[50%] border border-brand-yellow/35 bg-brand-purple/20" />
        <div className="pointer-events-none absolute bottom-5 left-[-8rem] h-24 w-[56rem] rotate-[-2deg] rounded-[50%] border-t-4 border-brand-yellow/80 opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
        <div className="container-shell relative">
          <div className="grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative z-10">
              <Badge tone="yellow"><CarFront size={14} /> Ultraviolet 592 Driving School</Badge>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
                Learn to drive with <span className="text-brand-yellow">confidence</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                Professional practical driving lessons, full driving packages, live theory support, mock test preparation, student bookings, and digital student benefits with Ultraviolet Driving School.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/book" variant="secondary" className="min-h-14 px-6 text-base">
                  <CalendarCheck size={19} /> Book Driving Class
                </Button>
                <Button href="/packages" variant="outlineDark" className="min-h-14 px-6 text-base">
                  View Packages
                </Button>
                <Button href="https://wa.me/5926022583" variant="dark" className="min-h-14 border border-white/15 bg-black/55 px-6 text-base hover:bg-black">
                  <MessageCircle size={19} /> WhatsApp
                </Button>
                <Button href="/login" variant="ghost" className="min-h-14 px-6 text-base">
                  Student Login
                </Button>
              </div>
              <div className="mt-9 grid gap-3 text-sm text-white/80 sm:grid-cols-2 xl:grid-cols-4">
                {heroTrustBadges.map((item) => (
                  <span key={item.label} className="flex items-center gap-3 border-white/15 py-2 font-semibold sm:border-r sm:pr-4 last:border-r-0">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-brand-purple text-brand-yellow shadow-[0_10px_28px_rgba(87,34,143,0.35)]">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[360px] lg:min-h-[560px]">
              <div className="absolute -inset-2 rounded-full bg-brand-purple/30 blur-3xl" />
              <div className="relative h-[360px] overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-[0_36px_100px_rgba(0,0,0,0.42)] sm:h-[460px] lg:absolute lg:-right-28 lg:top-0 lg:h-[560px] lg:w-[calc(100%+7rem)] lg:rounded-l-[44%] lg:rounded-r-none">
                <Image
                  src="/images/driving-lesson-hero.png"
                  alt="Driving instructor guiding a student vehicle through cones"
                  fill
                  priority
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover object-center lg:object-[48%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purpleDark/75 via-brand-purpleDark/20 to-black/10" />
                <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[#12051f] to-transparent lg:block" />
                <div className="absolute bottom-6 right-4 max-w-xs rounded-lg border border-white/15 bg-brand-purple/80 p-4 text-white shadow-lift backdrop-blur sm:right-8">
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-full border-2 border-brand-yellow text-brand-yellow">
                      <CheckCircle2 size={28} />
                    </span>
                    <div>
                      <p className="font-bold">Quality lessons.</p>
                      <p className="text-sm text-white/75">Safe drivers. Better roads.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 rounded-lg border border-white/20 bg-white p-4 text-brand-ink shadow-[0_24px_80px_rgba(0,0,0,0.3)] md:mt-[-1rem] md:p-6">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {heroFeatureCards.map((item) => (
                <div key={item.label} className="flex gap-4 border-black/10 pb-5 md:pb-0 lg:border-r lg:pr-5 last:lg:border-r-0">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-brand-purple text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,0.12),0_14px_30px_rgba(87,34,143,0.24)]">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-normal text-brand-purpleDark">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/70">{item.value}</p>
                    <span className="mt-4 block h-1 w-14 rounded-full bg-brand-purple" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white py-12">
        <div className="container-shell">
          <div className="grid gap-4 md:grid-cols-4">
            {howItWorks.map((item) => (
              <Card key={item.step} className="relative overflow-hidden p-5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-purple to-brand-purpleDark" />
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-md bg-brand-purpleSoft p-3 text-brand-purple">{item.icon}</div>
                  <span className="text-3xl font-black text-brand-purple/10">{item.step}</span>
                </div>
                <h3 className="mt-5 text-lg font-black text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/70">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-purpleSoft py-16 md:py-20">
        <div className="container-shell">
          <SectionHeader eyebrow="Why Learn With Ultraviolet" title="Driving-school support from first booking to exam prep" copy="Ultraviolet Driving School brings practical lessons, theory support, mock testing, flexible packages, and student benefits into a simple platform students can understand quickly." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <Card key={item.title} className="h-full transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand-purple text-white">{item.icon}</div>
                <h3 className="mt-5 text-lg font-black text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/70">{item.copy}</p>
              </Card>
            ))}
          </div>
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
          <div>
            <SectionHeader eyebrow="Practical Booking" title="Book your driving class without confusion" copy="Classes run Monday to Sunday from 8:00 AM to 5:00 PM. Students request 1-hour or 2-hour sessions, book full packages, and follow a clear rescheduling policy." />
            <div className="mt-6 rounded-lg bg-brand-ink p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-yellow">Rescheduling rule</p>
              <p className="mt-2 text-sm leading-6 text-white/75">Notify the school 3 to 4 hours before class starts. Without timely notice, that session may be lost.</p>
            </div>
          </div>
          <Card className="bg-white">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoTile icon={<Clock size={18} />} label="Hours" value="8:00 AM to 5:00 PM" />
              <InfoTile icon={<CalendarCheck size={18} />} label="Days" value="Monday to Sunday" />
              <InfoTile icon={<Users size={18} />} label="Capacity" value="Up to 4 students per slot" />
              <InfoTile icon={<Route size={18} />} label="Sessions" value="1-hour or 2-hour options" />
              <InfoTile icon={<GraduationCap size={18} />} label="Booking Type" value="Full package booking" />
              <InfoTile icon={<ShieldCheck size={18} />} label="Payment" value="MMG or cash confirmation" />
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
