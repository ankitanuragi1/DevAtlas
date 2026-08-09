import Link from "next/link";

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
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}