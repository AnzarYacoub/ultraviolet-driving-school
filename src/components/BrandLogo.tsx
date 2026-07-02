import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({ compact = false, tone = "light" }: { compact?: boolean; tone?: "light" | "dark" }) {
  return (
    <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
      <Image src="/logo.png" alt="Ultraviolet Driving School logo" width={48} height={48} className="size-12 rounded-md object-cover" />
      {!compact ? (
        <span className="leading-tight">
          <span className={cn("block text-sm font-black", tone === "dark" ? "text-white" : "text-brand-ink")}>Ultraviolet Driving School</span>
          <span className={cn("block text-xs font-semibold", tone === "dark" ? "text-brand-yellow" : "text-brand-purple")}>Ultraviolet 592</span>
        </span>
      ) : null}
    </Link>
  );
}
