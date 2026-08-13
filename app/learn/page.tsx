import Link from "next/link";
import { Navbar } from "@/components/navigation";
import Footer from "@/components/footer/Footer";

import CategorySection from "@/components/learn/CategorySection";
import SearchTopics from "@/components/learn/SearchTopics";
import RecentlyViewed from "@/components/learn/RecentlyViewed";

import { technologyCategories } from "@/data/technologies";

import {
  ArrowRight,
  BookOpen,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function LearnPage() {
  /* =========================================================
     TECHNOLOGY COUNT
     ---------------------------------------------------------
     Calculates the total number of technologies available
     across all categories.
     ========================================================= */

  const technologyCount = technologyCategories.reduce(
    (total, category) => total + category.technologies.length,
    0
  );

  return (
    <>
      {/* =====================================================
          TOP NAVBAR
          ===================================================== */}
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-background">

        {/* ===================================================
            HERO SECTION
            ---------------------------------------------------
            Compact version:
            - Less vertical padding
            - Responsive spacing
            - Smaller gaps on mobile
            =================================================== */}

        <section className="relative border-border/60">

          {/* -------------------------------------------------
              Background Glow
              -------------------------------------------------
              pointer-events-none ensures these decorative
              elements never block clicks/touches.
              ------------------------------------------------- */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* Main center glow */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-[350px]
                w-[650px]
                -translate-x-1/2
                rounded-full
                bg-emerald-500/10
                blur-3xl
                sm:h-[400px]
                sm:w-[750px]
              "
            />

            {/* Left glow */}
            <div
              className="
                absolute
                left-[5%]
                top-[25%]
                h-32
                w-32
                rounded-full
                bg-cyan-500/5
                blur-3xl
                sm:left-[10%]
                sm:h-40
                sm:w-40
              "
            />

            {/* Right glow */}
            <div
              className="
                absolute
                right-[2%]
                top-[20%]
                h-40
                w-40
                rounded-full
                bg-emerald-400/5
                blur-3xl
                sm:right-[5%]
                sm:h-52
                sm:w-52
              "
            />
          </div>

          {/* =================================================
              HERO CONTENT
              ================================================= */}

          <div
            className="
              relative
              mx-auto
              max-w-7xl
              px-4
              pb-8
              pt-5
              sm:px-6
              sm:pb-10
              sm:pt-6
              lg:px-8
              lg:pb-12
              lg:pt-7
            "
          >

            {/* =================================================
                BADGE
                ================================================= */}

            <div className="flex justify-center">

              <div
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/5
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-emerald-500
                  sm:gap-2
                  sm:px-3
                  sm:py-1.5
                  sm:text-xs
                "
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0" />

                <span>
                  The Developer Knowledge Atlas
                </span>
              </div>
            </div>

            {/* =================================================
                HERO HEADING
                ================================================= */}

            <div
              className="
                mx-auto
                mt-3
                max-w-5xl
                text-center
              "
            >
              <h1
                className="
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Master technology.
                <br />

                <span className="text-emerald-500">
                  Build the future.
                </span>
              </h1>

              {/* Hero description */}
              <p
                className="
                  mx-auto
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-muted-foreground
                  sm:text-base
                  sm:leading-7
                "
              >
                Learn modern development through structured paths,
                practical notes, real examples, projects, and concepts
                designed to take you from beginner to builder.
              </p>
            </div>

            {/* =================================================
                SEARCH
                ================================================= */}

            <div
              className="
                mx-auto
                mt-3
                w-full
                max-w-2xl
              "
            >
              <SearchTopics />
            </div>

            {/* =================================================
                QUICK LINKS
                ================================================= */}

            <div
              className="
                mt-3
                flex
                flex-wrap
                justify-center
                gap-2
              "
            >

              {/* Explore Technologies */}
              <Link
                href="#technologies"
                className="
                  group
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-border
                  bg-background/70
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  transition
                  hover:border-emerald-500/40
                  hover:bg-emerald-500/5
                  sm:gap-2
                  sm:px-4
                  sm:py-2
                  sm:text-sm
                "
              >
                <BookOpen className="h-3.5 w-3.5 text-emerald-500 sm:h-4 sm:w-4" />

                <span>
                  Explore Technologies
                </span>

                <ArrowRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* View Roadmaps */}
              <Link
                href="/roadmaps"
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-border
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-muted-foreground
                  transition
                  hover:text-foreground
                  sm:gap-2
                  sm:px-4
                  sm:py-2
                  sm:text-sm
                "
              >
                <Layers3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                <span>
                  View Roadmaps
                </span>
              </Link>
            </div>

            {/* =================================================
                STATISTICS
                ================================================= */}

            <div
              className="
                mx-auto
                mt-4
                grid
                max-w-3xl
                grid-cols-3
                overflow-hidden
                rounded-xl
                border
                border-border
                bg-card/50
                backdrop-blur-sm
              "
            >

              {/* Technologies */}
              <div
                className="
                  border-r
                  border-border
                  px-3
                  py-4
                  text-center
                  sm:px-4
                  sm:py-5
                "
              >
                <div
                  className="
                    text-xl
                    font-bold
                    sm:text-2xl
                  "
                >
                  {technologyCount}+
                </div>

                <div
                  className="
                    mt-0.5
                    text-[11px]
                    text-muted-foreground
                    sm:text-sm
                  "
                >
                  Technologies
                </div>
              </div>

              {/* Categories */}
              <div
                className="
                  border-r
                  border-border
                  px-3
                  py-4
                  text-center
                  sm:px-4
                  sm:py-5
                "
              >
                <div
                  className="
                    text-xl
                    font-bold
                    sm:text-2xl
                  "
                >
                  {technologyCategories.length}
                </div>

                <div
                  className="
                    mt-0.5
                    text-[11px]
                    text-muted-foreground
                    sm:text-sm
                  "
                >
                  Categories
                </div>
              </div>

              {/* Concepts */}
              <div
                className="
                  px-3
                  py-4
                  text-center
                  sm:px-4
                  sm:py-5
                "
              >
                <div
                  className="
                    text-xl
                    font-bold
                    sm:text-2xl
                  "
                >
                  100+
                </div>

                <div
                  className="
                    mt-0.5
                    text-[11px]
                    text-muted-foreground
                    sm:text-sm
                  "
                >
                  Concepts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RECENTLY VIEWED
            ===================================================== */}

        <RecentlyViewed />

        {/* =====================================================
            TECHNOLOGY LIBRARY
            ===================================================== */}

        <section
          id="technologies"
          className="
            mx-auto
            max-w-7xl
            px-4
            py-10
            sm:px-6
            sm:py-12
            lg:px-8
            lg:py-14
          "
        >

          {/* =================================================
              SECTION HEADER
              ================================================= */}

          <div
            className="
              mb-7
              flex
              flex-col
              gap-3
              sm:mb-8
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            {/* Left content */}
            <div>

              {/* Small label */}
              <div
                className="
                  mb-2
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  text-emerald-500
                  sm:text-sm
                "
              >
                <Code2 className="h-4 w-4" />

                <span>
                  LEARNING LIBRARY
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Explore technologies
              </h2>

              {/* Description */}
              <p
                className="
                  mt-2
                  max-w-2xl
                  text-sm
                  leading-6
                  text-muted-foreground
                  sm:text-base
                "
              >
                Pick a technology and follow a structured journey
                from fundamentals to advanced concepts.
              </p>
            </div>

            {/* =================================================
                ROADMAP LINK
                ================================================= */}

            <Link
              href="/roadmaps"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                text-sm
                font-medium
                text-emerald-500
              "
            >
              Explore roadmaps

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =================================================
              TECHNOLOGY CATEGORIES
              -------------------------------------------------
              Reduced from space-y-16 to a more compact spacing.
              ================================================= */}

          <div
            className="
              space-y-8
              sm:space-y-10
            "
          >
            {technologyCategories.map((category) => (
              <CategorySection
                key={category.name}
                {...category}
              />
            ))}
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />
    </>
  );
}