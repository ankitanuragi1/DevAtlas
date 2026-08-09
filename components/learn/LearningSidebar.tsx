"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
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
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-20 z-40 rounded-lg border border-border bg-background p-2 shadow-md lg:hidden"
        aria-label="Open learning menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72
          border-r border-border bg-background
          transition-transform duration-200

          lg:sticky
          lg:top-0
          lg:z-0
          lg:block
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
        <div className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h2 className="text-lg font-bold">
              {technology}
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              Learning Path
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-2 hover:bg-muted lg:hidden"
            aria-label="Close learning menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search */}
        <div className="border-b border-border p-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search topics..."
              className="w-full rounded-md border border-border bg-muted/40 py-2 pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Topics */}
        <nav className="h-[calc(100vh-145px)] overflow-y-auto p-3">
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Topics
          </p>

          <div className="space-y-1">
            {filteredTopics.map((topic) => {
              const href = `/learn/${slug}/${topic.slug}`;

              const isActive = pathname === href;

              return (
                <Link
                  key={topic.slug}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-emerald-500/10 font-medium text-emerald-500"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {topic.title}
                </Link>
              );
            })}
          </div>

          {/* No Results */}
          {filteredTopics.length === 0 && (
            <p className="px-3 py-4 text-sm text-muted-foreground">
              No topics found.
            </p>
          )}
        </nav>
      </aside>
    </>
  );
}