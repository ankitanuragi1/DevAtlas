"use client";

import Link from "next/link";

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
  if (!items.length) return null;

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-8 w-56">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          On this page
        </p>

        <nav className="space-y-2 border-l border-border">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`block border-l-2 py-1 text-sm text-muted-foreground transition hover:border-emerald-500 hover:text-foreground ${
                item.level === 3
                  ? "pl-6"
                  : "pl-4"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}