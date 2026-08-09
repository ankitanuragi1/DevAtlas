import TechnologyCard from "./TechnologyCard";

interface Technology {
  name: string;
  slug: string;
  description: string;
}

interface CategorySectionProps {
  name: string;
  description: string;
  technologies: Technology[];
}

export default function CategorySection({
  name,
  description,
  technologies,
}: CategorySectionProps) {
  return (
    <section>
      {/* Category Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-emerald-500" />

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {name}
          </h2>
        </div>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Technology Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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