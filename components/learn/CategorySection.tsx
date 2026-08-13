import TechnologyCard from "./TechnologyCard";

/* =========================================================
   Technology Type
   ---------------------------------------------------------
   Each technology contains:
   - name
   - slug
   - description
   ========================================================= */

interface Technology {
  name: string;
  slug: string;
  description: string;
}

/* =========================================================
   Category Section Props
   ========================================================= */

interface CategorySectionProps {
  name: string;
  description: string;
  technologies: Technology[];
}

/* =========================================================
   CategorySection
   ---------------------------------------------------------
   Displays:
   1. Category heading
   2. Category description
   3. Responsive technology card grid
   ========================================================= */

export default function CategorySection({
  name,
  description,
  technologies,
}: CategorySectionProps) {
  return (
    <section>
      {/* ===================================================
          CATEGORY HEADER
          ---------------------------------------------------
          Reduced spacing so categories don't look oversized.
          =================================================== */}

      <div className="mb-4 sm:mb-5">
        <div className="flex items-center gap-2.5">
          {/* Green category indicator */}
          <div
            className="
              h-7
              w-1
              shrink-0
              rounded-full
              bg-emerald-500
              sm:h-8
            "
          />

          {/* Category name */}
          <h2
            className="
              text-xl
              font-bold
              tracking-tight
              sm:text-2xl
            "
          >
            {name}
          </h2>
        </div>

        {/* Category description */}
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
          {description}
        </p>
      </div>

      {/* ===================================================
          TECHNOLOGY CARDS
          ---------------------------------------------------
          Responsive grid:

          Mobile      → 1 column
          Small       → 2 columns
          Large       → 3 columns
          =================================================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          sm:gap-4
          lg:grid-cols-3
        "
      >
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.slug}
            {...technology}
          />
        ))}
      </div>
    </section>
  );
}