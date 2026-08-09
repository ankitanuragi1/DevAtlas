const technologies = [
  {
    name: "HTML",
    description: "Structure of the web",
  },
  {
    name: "CSS",
    description: "Style and layout",
  },
  {
    name: "JavaScript",
    description: "Web programming",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript",
  },
  {
    name: "React",
    description: "Build user interfaces",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime",
  },
  {
    name: "Python",
    description: "General-purpose programming",
  },
  {
    name: "Git",
    description: "Version control",
  },
];

export default function PopularTechnologies() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-medium text-emerald-500">
            START LEARNING
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Popular Technologies
          </h2>

          <p className="mt-3 text-muted-foreground">
            Explore detailed notes and practical concepts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-emerald-500/50"
            >
              <h3 className="text-xl font-semibold group-hover:text-emerald-500">
                {technology.name}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {technology.description}
              </p>

              <span className="mt-5 inline-block text-sm text-emerald-500">
                Explore →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}