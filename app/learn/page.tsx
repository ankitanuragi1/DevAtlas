import { Navbar } from "@/components/navigation";
import CategorySection from "@/components/learn/CategorySection";
import { technologyCategories } from "@/data/technologies";

export default function LearnPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="text-sm font-medium tracking-wide text-emerald-500">
              DEVATLAS LEARNING
            </p>

            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Learn Technology.
              <br />
              Build Real Skills.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Explore structured notes, concepts, examples,
              projects, and learning paths for modern
              development technologies.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold">
                  {technologyCategories.reduce(
                    (total, category) =>
                      total + category.technologies.length,
                    0
                  )}
                  +
                </p>

                <p className="text-sm text-muted-foreground">
                  Technologies
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  {technologyCategories.length}
                </p>

                <p className="text-sm text-muted-foreground">
                  Categories
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  100+
                </p>

                <p className="text-sm text-muted-foreground">
                  Concepts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Categories */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Explore Technologies
            </h2>

            <p className="mt-2 max-w-2xl text-muted-foreground">
              Choose a technology and follow its structured
              learning path from fundamentals to advanced
              concepts.
            </p>
          </div>

          <div className="space-y-16">
            {technologyCategories.map((category) => (
              <CategorySection
                key={category.name}
                {...category}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}