import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TechnologyCardProps {
  name: string;
  slug: string;
  description: string;
}

export default function TechnologyCard({
  name,
  slug,
  description,
}: TechnologyCardProps) {
  return (
    <Link
      href={`/learn/${slug}`}
      className="group relative flex min-h-[190px] flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg"
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-sm font-bold text-foreground transition-colors group-hover:bg-emerald-500/10 group-hover:text-emerald-500">
          {name.charAt(0)}
        </div>

        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-500" />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold tracking-tight">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Bottom */}
      <div className="mt-auto pt-6 text-sm font-medium text-emerald-500">
        Start learning
        <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}