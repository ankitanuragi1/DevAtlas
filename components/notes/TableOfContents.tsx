"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({
  items,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!items.length) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -65% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) =>
      observer.observe(heading)
    );

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-24 px-6">
        {/* Header */}
        <div className="mb-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            On this page
          </p>
        </div>

        {/* Navigation */}
        <nav className="relative">
          {/* Base vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border/70" />

          <div className="space-y-0.5">
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                    group relative block
                    border-l-2
                    py-1.5
                    text-[13px]
                    leading-5
                    transition-all
                    duration-200
                    ${
                      item.level === 3
                        ? "pl-7"
                        : "pl-4"
                    }
                    ${
                      isActive
                        ? "border-emerald-500 font-medium text-foreground"
                        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                    }
                  `}
                >
                  {/* Active indicator glow */}
                  {isActive && (
                    <span className="absolute left-[-3px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-500" />
                  )}

                  <span
                    className={`
                      transition-colors
                      ${
                        isActive
                          ? "text-emerald-500"
                          : "group-hover:text-foreground"
                      }
                    `}
                  >
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}