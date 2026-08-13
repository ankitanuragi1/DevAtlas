"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronRight,
} from "lucide-react";
import { technologyTopics } from "@/data/topics";

interface LearningSidebarProps {
  technology: string;
}

export default function LearningSidebar({
  technology,
}: LearningSidebarProps) {
  const pathname = usePathname();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const slug = technology.toLowerCase();
  const topics = technologyTopics[slug] ?? [];

  const filteredTopics = topics.filter((topic) =>
    topic.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      {/* Mobile menu */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          fixed left-4 top-20 z-40
          flex h-10 w-10 items-center justify-center
          rounded-lg border border-border
          bg-background/95 shadow-sm backdrop-blur
          lg:hidden
        "
        aria-label="Open learning menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-72 border-r border-border
          bg-background

          transition-transform duration-200

          lg:sticky
          lg:top-0
          lg:z-0
          lg:h-screen
          lg:w-64
          lg:translate-x-0

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div className="border-b border-border px-5 py-5">
          <div className="flex items-center justify-between">
            <Link
              href={`/learn/${slug}`}
              className="flex min-w-0 items-center gap-3"
            >
              <div
                className="
                  flex h-8 w-8 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-emerald-500/10
                  text-sm font-bold
                  text-emerald-500
                "
              >
                {technology.charAt(0)}
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold">
                  {technology}
                </h2>

                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Learning path
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                rounded-md p-1.5
                text-muted-foreground
                hover:bg-muted
                hover:text-foreground
                lg:hidden
              "
              aria-label="Close learning menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="border-b border-border p-3">
          <div className="relative">
            <Search
              className="
                pointer-events-none
                absolute left-3 top-1/2
                h-3.5 w-3.5
                -translate-y-1/2
                text-muted-foreground
              "
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search topics..."
              className="
                h-9 w-full
                rounded-md
                border border-border
                bg-muted/30
                pl-9 pr-3
                text-xs
                outline-none
                transition
                placeholder:text-muted-foreground
                focus:border-emerald-500/60
                focus:bg-background
              "
            />
          </div>
        </div>

        {/* Topics */}
        <nav className="h-[calc(100vh-125px)] overflow-y-auto px-3 py-5">
          <div className="mb-3 flex items-center justify-between px-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Topics
            </p>

            <span className="text-[10px] tabular-nums text-muted-foreground">
              {filteredTopics.length}
            </span>
          </div>

          <div className="space-y-0.5">
            {filteredTopics.map((topic, index) => {
              const href = `/learn/${slug}/${topic.slug}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={topic.slug}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`
                    group relative flex items-center
                    gap-3 rounded-md
                    px-3 py-2
                    text-[13px]
                    transition-colors

                    ${
                      isActive
                        ? "bg-emerald-500/10 font-medium text-emerald-500"
                        : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                    }
                  `}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <span
                      className="
                        absolute left-0 top-1/2
                        h-5 w-0.5
                        -translate-y-1/2
                        rounded-full
                        bg-emerald-500
                      "
                    />
                  )}

                  <span
                    className={`
                      w-5 shrink-0
                      text-[10px]
                      tabular-nums
                      ${
                        isActive
                          ? "text-emerald-500"
                          : "text-muted-foreground/60"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1 truncate">
                    {topic.title}
                  </span>

                  <ChevronRight
                    className={`
                      h-3 w-3 shrink-0
                      transition-all
                      ${
                        isActive
                          ? "translate-x-0 text-emerald-500 opacity-100"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredTopics.length === 0 && (
            <div className="px-3 py-10 text-center">
              <Search className="mx-auto h-5 w-5 text-muted-foreground" />

              <p className="mt-3 text-xs text-muted-foreground">
                No topics found.
              </p>

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="
                    mt-2 text-xs
                    font-medium
                    text-emerald-500
                    hover:underline
                  "
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}