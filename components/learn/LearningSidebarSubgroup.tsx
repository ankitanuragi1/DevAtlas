"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface LearningSubtopic {
  slug: string;
  title: string;
}

interface LearningSidebarSubgroupProps {
  title: string;
  technology: string;
  items: LearningSubtopic[];
  defaultOpen?: boolean;
}

export default function LearningSidebarSubgroup({
  title,
  technology,
  items,
  defaultOpen = false,
}: LearningSidebarSubgroupProps) {
  const pathname = usePathname();

  const hasActiveItem = items.some(
    (item) =>
      pathname === `/learn/${technology}/${item.slug}`
  );

  const [isOpen, setIsOpen] = useState(
    defaultOpen || hasActiveItem
  );

  useEffect(() => {
    if (hasActiveItem) {
      setIsOpen(true);
    }
  }, [hasActiveItem]);

  return (
    <div className="mt-0.5">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="
          flex w-full items-center gap-2
          rounded-md px-3 py-1.5
          text-left text-xs font-medium
          text-muted-foreground
          transition-colors
          hover:bg-muted/70
          hover:text-foreground
        "
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <ChevronDown className="h-3 w-3 shrink-0" />
        ) : (
          <ChevronRight className="h-3 w-3 shrink-0" />
        )}

        <span className="min-w-0 flex-1 truncate">
          {title}
        </span>

        <span className="text-[9px] text-muted-foreground/50">
          {items.length}
        </span>
      </button>

      {isOpen && (
        <div className="ml-3 border-l border-border/50 pl-2">
          {items.map((item) => {
            const href = `/learn/${technology}/${item.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={item.slug}
                href={href}
                className={`
                  relative block rounded-md
                  px-3 py-1.5 text-[11px]
                  transition-colors
                  ${
                    isActive
                      ? "font-medium text-emerald-500"
                      : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  }
                `}
              >
                {isActive && (
                  <span
                    className="
                      absolute -left-[9px] top-1/2
                      h-3.5 w-0.5
                      -translate-y-1/2
                      rounded-full bg-emerald-500
                    "
                  />
                )}

                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}