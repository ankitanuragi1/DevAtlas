"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type {
  LearningTopic,
  LearningSubgroup,
} from "./types/learning";

import LearningSidebarSubgroup from "./LearningSidebarSubgroup";

interface LearningSidebarGroupProps {
  title: string;
  technology: string;
  items: LearningTopic[];
  subgroups?: LearningSubgroup[];
  defaultOpen?: boolean;
}

export default function LearningSidebarGroup({
  title,
  technology,
  items,
  subgroups = [],
  defaultOpen = false,
}: LearningSidebarGroupProps) {
  const pathname = usePathname();

  const hasActiveItem = items.some(
    (item) =>
      pathname === `/learn/${technology}/${item.slug}`
  );

  const hasActiveSubgroup = subgroups.some((group) =>
    group.items.some(
      (item) =>
        pathname ===
        `/learn/${technology}/${item.slug}`
    )
  );

  const [isOpen, setIsOpen] = useState(
    defaultOpen ||
      hasActiveItem ||
      hasActiveSubgroup
  );

  useEffect(() => {
    if (hasActiveItem || hasActiveSubgroup) {
      setIsOpen(true);
    }
  }, [hasActiveItem, hasActiveSubgroup]);

  const topicCount =
    items.length +
    subgroups.reduce(
      (total, group) => total + group.items.length,
      0
    );

  return (
    <div className="space-y-0.5">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="
          group flex w-full items-center gap-2
          rounded-md px-3 py-2
          text-left text-[13px] font-medium
          text-muted-foreground
          transition-colors
          hover:bg-muted/70
          hover:text-foreground
        "
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <ChevronDown className="h-3.5 w-3.5 shrink-0" />
        ) : (
          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
        )}

        <span className="min-w-0 flex-1 truncate">
          {title}
        </span>

        <span className="text-[10px] tabular-nums text-muted-foreground/60">
          {topicCount}
        </span>
      </button>

      {isOpen && (
        <div className="ml-3 border-l border-border/70 pl-2">
          {items.map((item) => {
            const href = `/learn/${technology}/${item.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={item.slug}
                href={href}
                className={`
                  group relative flex items-center
                  rounded-md px-3 py-1.5
                  text-[12px]
                  transition-colors
                  ${
                    isActive
                      ? "bg-emerald-500/10 font-medium text-emerald-500"
                      : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                  }
                `}
              >
                {isActive && (
                  <span
                    className="
                      absolute -left-[9px] top-1/2
                      h-4 w-0.5
                      -translate-y-1/2
                      rounded-full
                      bg-emerald-500
                    "
                  />
                )}

                <span className="min-w-0 truncate">
                  {item.title}
                </span>
              </Link>
            );
          })}

          {subgroups.map((group) => (
            <LearningSidebarSubgroup
              key={group.title}
              title={group.title}
              technology={technology}
              items={group.items}
              defaultOpen={group.items.some(
                (item) =>
                  pathname ===
                  `/learn/${technology}/${item.slug}`
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}