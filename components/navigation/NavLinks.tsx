"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  BookOpen,
  Code2,
  FolderKanban,
  GraduationCap,
  Home,
  Library,
  Map,
  LucideIcon,
} from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const links: NavLink[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Roadmaps", href: "/roadmaps", icon: Map },
  { name: "Learn", href: "/learn", icon: BookOpen },
  { name: "Practice", href: "/practice", icon: Code2 },
  { name: "Interview", href: "/interview", icon: GraduationCap },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Resources", href: "/resources", icon: Library },
];

export default function NavLinks() {
  const pathname = usePathname();
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      activeLinkRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [pathname]);

  return (
    <nav className="flex w-max min-w-full items-center justify-center gap-0.5 sm:gap-1">
      {links.map((link) => {
        const Icon = link.icon;

        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(`${link.href}/`));

        return (
          <Link
            key={link.name}
            ref={isActive ? activeLinkRef : null}
            href={link.href}
            className={`
              group relative flex shrink-0 items-center gap-1.5
              whitespace-nowrap rounded-lg px-2.5 py-1.5
              text-xs font-medium transition-all duration-200
              sm:gap-2 sm:px-4 sm:py-2 sm:text-sm
              ${
                isActive
                  ? "bg-emerald-500/10 text-emerald-500"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }
            `}
          >
            <Icon
              className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                isActive
                  ? "text-emerald-500"
                  : "text-muted-foreground"
              }`}
            />

            <span>{link.name}</span>

            {isActive && (
              <span className="absolute bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-emerald-500 sm:w-6" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}