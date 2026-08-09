"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Learn",
    href: "/learn",
  },
  {
    name: "Roadmaps",
    href: "/roadmaps",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Resources",
    href: "/resources",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 md:flex">
      {links.map((link) => {
        const isActive =
          pathname === link.href ||
          pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              relative rounded-lg px-3 py-2
              text-sm font-medium
              transition-all duration-200
              ${
                isActive
                  ? "bg-emerald-500/10 text-emerald-500"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }
            `}
          >
            {link.name}

            {isActive && (
              <span
                className="
                  absolute
                  bottom-0.5
                  left-1/2
                  h-0.5
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-emerald-500
                "
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}