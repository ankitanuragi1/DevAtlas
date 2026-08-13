import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              Dev<span className="text-emerald-500">Atlas</span>
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              A developer learning platform to explore technologies,
              understand concepts, and build strong programming fundamentals.
            </p>

            {/* Socials */}
            <div className="mt-5 flex gap-2.5">
              <a
                href="https://github.com/ankitanuragi1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex h-9 w-9 items-center justify-center rounded-lg
                  border border-border
                  bg-muted/40
                  text-foreground
                  transition-all duration-200

                  /* Mobile */
                  max-sm:text-foreground

                  /* Desktop */
                  sm:text-muted-foreground
                  sm:hover:border-emerald-500/50
                  sm:hover:bg-emerald-500/10
                  sm:hover:text-emerald-500
                "
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex h-9 w-9 items-center justify-center rounded-lg
                  border border-border
                  bg-muted/40
                  text-foreground
                  transition-all duration-200
                  sm:text-muted-foreground
                  sm:hover:border-emerald-500/50
                  sm:hover:bg-emerald-500/10
                  sm:hover:text-emerald-500
                "
              >
                <FaLinkedin className="text-base" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex h-9 w-9 items-center justify-center rounded-lg
                  border border-border
                  bg-muted/40
                  text-foreground
                  transition-all duration-200
                  sm:text-muted-foreground
                  sm:hover:border-emerald-500/50
                  sm:hover:bg-emerald-500/10
                  sm:hover:text-emerald-500
                "
              >
                <FaInstagram className="text-base" />
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">
              Learn
            </h3>

            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/learn"
                  className="transition-colors hover:text-emerald-500"
                >
                  Technologies
                </Link>
              </li>

              <li>
                <Link
                  href="/learn/javascript"
                  className="transition-colors hover:text-emerald-500"
                >
                  JavaScript
                </Link>
              </li>

              <li>
                <Link
                  href="/learn/react"
                  className="transition-colors hover:text-emerald-500"
                >
                  React
                </Link>
              </li>

              <li>
                <Link
                  href="/learn/nextjs"
                  className="transition-colors hover:text-emerald-500"
                >
                  Next.js
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">
              Resources
            </h3>

            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-emerald-500"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/notes"
                  className="transition-colors hover:text-emerald-500"
                >
                  Notes
                </Link>
              </li>

              <li>
                <Link
                  href="/roadmaps"
                  className="transition-colors hover:text-emerald-500"
                >
                  Roadmaps
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-emerald-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-7 flex flex-col gap-3
            border-t border-border pt-5
            text-xs text-muted-foreground

            sm:text-sm
            md:flex-row md:items-center md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} DevAtlas. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with
            <FaHeart className="mx-1 text-emerald-500" />
            for developers
          </p>
        </div>
      </div>
    </footer>
  );
}