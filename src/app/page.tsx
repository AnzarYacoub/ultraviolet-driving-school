import Image from "next/image";
import { BookOpenCheck, CalendarCheck, CarFront, CheckCircle2, ClipboardCheck, Clock, CreditCard, Crown, GraduationCap, MessageCircle, PlayCircle, Route, ShieldCheck, Star, TicketCheck, Users } from "lucide-react";
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

const lessonVideos = [
  {
    title: "Ultraviolet Driving School Lesson Preview",
    id: "aHPM8pmaWZY"
  },
  {
    title: "Ultraviolet Practical Driving Experience",
    id: "dJ-z0ClOczU"
  }
];

const marqueePhrases = [
  "PRACTICAL LESSONS",
  "THEORY SUPPORT",
  "MOCK TEST PREPARATION",
  "FLEXIBLE BOOKING",
  "STUDENT DISCOUNT CARD",
  "ROAD CONFIDENCE",
  "SAFE DRIVING STARTS HERE"
];

const howItWorks = [
  { step: "01", title: "Choose a package", copy: "Pick the driving package that matches your experience level.", icon: <GraduationCap size={20} /> },
  { step: "02", title: "Book your class", copy: "Request a preferred day, time, and 1-hour or 2-hour session.", icon: <CalendarCheck size={20} /> },
  { step: "03", title: "Confirm payment", copy: "Use MMG or cash with manual admin confirmation.", icon: <CreditCard size={20} /> },
  { step: "04", title: "Start learning", copy: "Attend practical lessons, theory support, and mock test prep.", icon: <CarFront size={20} /> }
];

const supportLabels = ["Driving Basics", "Parking & Reversing", "Road Rules", "Test Confidence"];

const outcomeCards = [
  { title: "Build Driving Confidence", copy: "Grow from nervous beginner to road-ready learner with patient, practical guidance.", icon: <ShieldCheck size={22} /> },
  { title: "Learn Road Rules", copy: "Strengthen theory knowledge, signs, right-of-way, and safe road habits.", icon: <BookOpenCheck size={22} /> },
  { title: "Master Parking & Reversing", copy: "Practice key manoeuvres with simple steps and steady instructor feedback.", icon: <Route size={22} /> },
  { title: "Prepare for Your Test", copy: "Use mock tests, road practice, and test-day support to feel ready.", icon: <ClipboardCheck size={22} /> }
];

const serviceCards = [
  { title: "Practical Driving Lessons", copy: "Guided road sessions for new learners, teen students, and returning drivers.", icon: <CarFront size={22} /> },
  { title: "Live Theory Support", copy: "Online support for road signs, rules, safety, and vehicle basics.", icon: <BookOpenCheck size={22} /> },
  { title: "Mock Test Preparation", copy: "Theory practice and road mock support to build exam confidence.", icon: <ClipboardCheck size={22} /> },
  { title: "Digital Discount Card", copy: "Student benefit card concept with partner discounts and verification details.", icon: <TicketCheck size={22} /> },
  { title: "Test Day Assistance", copy: "Focused support for students preparing for their practical test day.", icon: <ShieldCheck size={22} /> },
  { title: "VIP Driving Support", copy: "Priority schedule, pick-up/drop-off, highway, night drive, and advanced coaching.", icon: <Crown size={22} /> }
];

const communityActions = [
  { title: "Register as a Student", href: "/register", icon: <Users size={22} /> },
  { title: "Book a Driving Package", href: "/book", icon: <CalendarCheck size={22} /> },
  { title: "Join the Discount Card Programme", href: "/dashboard/discount-card", icon: <TicketCheck size={22} /> }
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
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-brand-purple/30 blur-3xl" />
              <div className="relative h-[360px] overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-[0_36px_100px_rgba(0,0,0,0.42)] sm:h-[460px] lg:h-[560px] lg:rounded-l-[34%]">
                <Image
                  src="/images/hero-georgetown-driving.jpg"
                  alt="Ultraviolet driving school car in Georgetown, Guyana"
                  fill
                  priority
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-cover object-[center_58%]"
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

          <div className="relative z-10 mt-10 rounded-lg border border-white/20 bg-white p-4 text-brand-ink shadow-[0_24px_80px_rgba(0,0,0,0.3)] md:p-6">
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

      <section aria-label="Driving school highlights" className="overflow-hidden border-y border-brand-yellow/30 bg-brand-ink py-4 text-white">
        <div className="marquee-track flex w-max items-center gap-4 whitespace-nowrap text-sm font-black uppercase tracking-[0.18em] text-brand-yellow">
          {[...marqueePhrases, ...marqueePhrases].map((phrase, index) => (
            <span key={`${phrase}-${index}`} className="inline-flex items-center gap-4">
              {phrase}
              <span className="text-white/35">{"//"}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="instructor-motif instructor-motif-light bg-white py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <Badge tone="purple">Welcome</Badge>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-brand-ink md:text-5xl">Welcome to Ultraviolet Driving School</h2>
          </div>
          <Card className="border-brand-purple/15 bg-[linear-gradient(135deg,#ffffff,#f8f4fd)]">
            <p className="text-lg leading-8 text-black/70">
              Ultraviolet Driving School helps new learners and returning drivers build confidence through practical lessons, structured packages, theory support, mock tests, and guided driving preparation.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Teen learners", "Refresher lessons", "Theory support", "Booking guidance"].map((item) => (
                <span key={item} className="flex items-center gap-2 rounded-md bg-brand-purpleSoft px-3 py-2 text-sm font-bold text-brand-purple">
                  <CheckCircle2 size={16} />
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="instructor-motif instructor-motif-soft bg-brand-purpleSoft py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Card className="relative overflow-hidden bg-brand-ink text-white">
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-brand-yellow/15" />
            <Badge tone="yellow">Driving Support Team</Badge>
            <h2 className="relative mt-5 text-3xl font-black tracking-normal md:text-4xl">Guided by patient driving instructors</h2>
            <p className="relative mt-4 max-w-2xl leading-7 text-white/70">
              Our instructors guide students through practical lessons, road confidence, parking, reversing, road rules, and test preparation with steady support.
            </p>
            <Button href="/book" variant="secondary" className="relative mt-6">Book With Guidance</Button>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            {supportLabels.map((label) => (
              <div key={label} className="rounded-lg border border-black/10 bg-white p-5 shadow-soft">
                <div className="flex size-11 items-center justify-center rounded-md bg-brand-purple text-brand-yellow">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="mt-4 text-lg font-black text-brand-ink">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-shell">
          <SectionHeader eyebrow="Student Outcomes" title="What We Help You Do" copy="Every section of the platform points students toward practical confidence, safer decisions, and clearer test preparation." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {outcomeCards.map((item) => (
              <Card key={item.title} className="h-full transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand-purple text-white">{item.icon}</div>
                <h3 className="mt-5 text-lg font-black text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/70">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="instructor-motif instructor-motif-dark relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(246,201,69,0.24),transparent_32%),linear-gradient(135deg,#111014,#2a0f45_62%,#57228f)] py-16 text-white md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <Badge tone="yellow">Featured Booking Path</Badge>
            <h2 className="mt-4 text-4xl font-black tracking-normal md:text-5xl">Start your driving journey</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Choose your package, book your session, confirm payment, and begin learning with structured guidance.
            </p>
          </div>
          <Card className="border-white/15 bg-white/95">
            <div className="grid gap-4 sm:grid-cols-2">
              <Button href="/packages" variant="primary">View Packages</Button>
              <Button href="/book" variant="secondary">Book a Class</Button>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-black/70">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex items-start gap-3 rounded-md bg-black/[0.025] p-3">
                  <span className="font-black text-brand-purple">{item.step}</span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-brand-purpleSoft py-16 md:py-20">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader eyebrow="Services" title="How We Serve You" copy="From practical road sessions to theory preparation and student benefits, each service is shaped around a clearer driving journey." />
            <Button href="/packages" variant="ghost">View Packages</Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((item) => (
              <Card key={item.title} className="h-full">
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand-purple text-white">{item.icon}</div>
                <h3 className="mt-5 text-lg font-black text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/70">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-ink py-16 text-white md:py-20">
        <div className="pointer-events-none absolute -left-32 top-[-10rem] size-96 rounded-full bg-brand-purple/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-12rem] right-[-10rem] size-[28rem] rounded-full bg-brand-yellow/10 blur-3xl" />
        <div className="container-shell relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              tone="dark"
              eyebrow="Video Preview"
              title="Watch Ultraviolet Driving School in action"
              copy="Watch our driving school experience and get a better feel for the practical guidance, confidence building, and student support offered through Ultraviolet Driving School."
            />
            <Badge tone="yellow"><PlayCircle size={14} /> Muted autoplay enabled</Badge>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {lessonVideos.map((video) => (
              <div key={video.id} className="overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
                <div className="relative aspect-video overflow-hidden rounded-md bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=1&rel=0&playsinline=1&loop=1&playlist=${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-yellow">Video Preview</p>
                    <h3 className="mt-1 font-black">{video.title}</h3>
                  </div>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-brand-purple text-brand-yellow">
                    <PlayCircle size={22} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Videos are embedded with muted autoplay and visible controls. Some browsers may still require a user tap before playback starts.
          </p>
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

      <section id="about" className="instructor-motif instructor-motif-dark bg-brand-ink py-16 text-white md:py-20">
        <div className="container-shell grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader tone="dark" eyebrow="About" title="Built for safer, more confident drivers" copy="Ultraviolet Driving School provides practical driving training, theory preparation, vehicle basics education, and student support for persons learning to drive safely and confidently." />
          <div className="grid gap-4 sm:grid-cols-3">
            {["Practical driving classes", "Live theory preparation", "Vehicle basics pre-class learning"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.08] p-5 text-sm font-bold text-white/80">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="instructor-motif instructor-motif-soft bg-brand-purpleSoft py-16 md:py-20">
        <div className="container-shell">
          <SectionHeader eyebrow="Student Community" title="Be part of the Ultraviolet community" copy="Register, book your package, and stay connected to future student benefits, discount-card updates, and class announcements." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {communityActions.map((item) => (
              <Card key={item.title} className="h-full">
                <div className="flex size-12 items-center justify-center rounded-lg bg-brand-purple text-white">{item.icon}</div>
                <h3 className="mt-5 text-lg font-black text-brand-ink">{item.title}</h3>
                <Button href={item.href} variant="ghost" className="mt-5 w-full">Open</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="instructor-motif instructor-motif-light py-16 md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader eyebrow="Stay Connected" title="Stay connected with Ultraviolet" copy="Contact the school for packages, practical bookings, theory class updates, mock test support, and discount-card programme details." />
            <div className="mt-6 grid gap-3 text-sm font-bold text-brand-ink">
              <p className="rounded-md bg-brand-purpleSoft px-4 py-3">Phone/WhatsApp: 602-2583</p>
              <p className="rounded-md bg-brand-purpleSoft px-4 py-3">Email: Udsdrivingschool30@gmail.com</p>
              <p className="rounded-md bg-brand-purpleSoft px-4 py-3">Social media: Facebook, TikTok, Instagram, and YouTube placeholders</p>
            </div>
          </div>
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
              <Button href="https://wa.me/5926022583" variant="secondary">WhatsApp Us</Button>
            </div>
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
