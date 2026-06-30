import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
      <Image src="/logo.png" alt="Ultraviolet Driving School logo" width={48} height={48} className="size-12 rounded-md object-cover" />
      {!compact ? (
        <span className="leading-tight">
          <span className="block text-sm font-black text-brand-ink">Ultraviolet Driving School</span>
          <span className="block text-xs font-semibold text-brand-purple">Ultraviolet 592</span>
        </span>
      ) : null}
    </Link>
  );
}
