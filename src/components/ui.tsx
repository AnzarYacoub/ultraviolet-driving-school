import Link from "next/link";
import type { ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "ghost" | "soft";
};

export function Button({ href, variant = "primary", className, children, ...props }: ButtonProps) {
  const base =
    "focus-ring inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold transition duration-200 active:translate-y-px";
  const styles = {
    primary: "bg-brand-purple text-white shadow-soft hover:bg-brand-purpleDark",
    secondary: "bg-brand-yellow text-brand-ink shadow-soft hover:bg-yellow-300",
    dark: "bg-brand-ink text-white hover:bg-black",
    ghost: "bg-white text-brand-purple ring-1 ring-brand-purple/20 hover:bg-brand-purpleSoft",
    soft: "bg-brand-purpleSoft text-brand-purple hover:bg-brand-purple hover:text-white"
  };

  if (href) {
    return (
      <Link href={href} className={cn(base, styles[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-lg border border-black/10 bg-white p-6 shadow-soft", className)}>{children}</div>;
}

export function Badge({ children, tone = "purple" }: { children: React.ReactNode; tone?: "purple" | "yellow" | "dark" | "muted" | "outline" }) {
  const styles = {
    purple: "bg-brand-purpleSoft text-brand-purple",
    yellow: "bg-brand-yellow/25 text-black",
    dark: "bg-brand-ink text-white",
    muted: "bg-black/5 text-black/70",
    outline: "border border-black/10 bg-white text-black/70"
  };

  return <span className={cn("inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold", styles[tone])}>{children}</span>;
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light"
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className={cn("mb-3 text-sm font-bold uppercase tracking-[0.16em]", tone === "dark" ? "text-brand-yellow" : "text-brand-purple")}>{eyebrow}</p> : null}
      <h2 className={cn("text-3xl font-black tracking-normal md:text-4xl", tone === "dark" ? "text-white" : "text-brand-ink")}>{title}</h2>
      {copy ? <p className={cn("mt-4 text-base leading-7 md:text-lg", tone === "dark" ? "text-white/70" : "text-black/70")}>{copy}</p> : null}
    </div>
  );
}

export function StatsCard({
  label,
  value,
  icon,
  helper,
  tone = "purple"
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  helper?: string;
  tone?: "purple" | "yellow" | "dark";
}) {
  const iconStyles = {
    purple: "bg-brand-purpleSoft text-brand-purple",
    yellow: "bg-brand-yellow/30 text-brand-ink",
    dark: "bg-brand-ink text-white"
  };

  return (
    <Card className="p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-black/60">{label}</p>
          <p className="mt-2 text-2xl font-black leading-tight text-brand-ink">{value}</p>
          {helper ? <p className="mt-2 text-xs font-semibold text-black/40">{helper}</p> : null}
        </div>
        {icon ? <div className={cn("shrink-0 rounded-md p-3", iconStyles[tone])}>{icon}</div> : null}
      </div>
    </Card>
  );
}

export function InfoTile({ icon, label, value }: { icon?: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-4 shadow-soft">
      <div className="flex items-start gap-3">
        {icon ? <div className="rounded-md bg-brand-purpleSoft p-2 text-brand-purple">{icon}</div> : null}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-black/40">{label}</p>
          <p className="mt-1 text-sm font-black leading-5 text-brand-ink">{value}</p>
        </div>
      </div>
    </div>
  );
}

export function Field({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-brand-ink">
      {label}
      <input
        className="focus-ring h-11 rounded-md border border-black/15 bg-white px-3 text-sm font-normal text-brand-ink outline-none transition placeholder:text-black/35 hover:border-brand-purple/40"
        {...props}
      />
    </label>
  );
}

export function TextArea({ label, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-brand-ink">
      {label}
      <textarea
        className="focus-ring min-h-28 rounded-md border border-black/15 bg-white px-3 py-3 text-sm font-normal text-brand-ink outline-none transition placeholder:text-black/35 hover:border-brand-purple/40"
        {...props}
      />
    </label>
  );
}

export function SelectField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-brand-ink">
      {label}
      <select className="focus-ring h-11 rounded-md border border-black/15 bg-white px-3 text-sm font-normal text-brand-ink outline-none transition hover:border-brand-purple/40">
        {children}
      </select>
    </label>
  );
}
