import Link from "next/link";
import { Navbar } from "@/components/navigation";
import Footer from "@/components/footer/Footer";
import {
    ArrowRight,
    BookOpen,
    Code2,
    FileText,
    //   Github,
    Globe,
    Layers3,
    Video,
} from "lucide-react";

const resources = [
    {
        title: "Documentation",
        description:
            "Official documentation and trusted references for the technologies you are learning.",
        icon: BookOpen,
        type: "Docs",
    },
    {
        title: "Cheat Sheets",
        description:
            "Quick-reference guides for syntax, commands, concepts and commonly used patterns.",
        icon: FileText,
        type: "Reference",
    },
    {
        title: "Developer Tools",
        description:
            "Useful tools that help you write, test, debug and deploy better applications.",
        icon: Layers3,
        type: "Tools",
    },
    {
        title: "GitHub",
        description:
            "Explore open-source projects, repositories and real-world code from developers.",
        icon: Code2,
        type: "Open Source",
    },
    {
        title: "Learning Websites",
        description:
            "Curated websites and platforms that complement the DevAtlas learning experience.",
        icon: Globe,
        type: "Web",
    },
    {
        title: "Video Resources",
        description:
            "Carefully selected visual resources for concepts that benefit from demonstrations.",
        icon: Video,
        type: "Videos",
    },
];

export default function ResourcesPage() {
    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-background">
            {/* Hero */}
            <section className="border-b border-border">
                <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
                        DEVATLAS RESOURCES
                    </p>

                    <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                        The right resource.
                        <br />
                        At the right time.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                        A curated collection of documentation, tools,
                        references and resources to help you go deeper.
                    </p>
                </div>
            </section>

            {/* Resource Grid */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Resource Library
                    </h2>

                    <p className="mt-2 max-w-2xl text-muted-foreground">
                        Everything you need beyond the core learning
                        notes.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {resources.map((resource) => {
                        const Icon = resource.icon;

                        return (
                            <Link
                                key={resource.title}
                                href="#"
                                className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5"
                            >
                                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl transition group-hover:bg-emerald-500/10" />

                                <div className="relative">
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                            {resource.type}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold">
                                        {resource.title}
                                    </h3>

                                    <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">
                                        {resource.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-500">
                                        Explore
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="rounded-2xl border border-border bg-muted/20 px-6 py-14 text-center sm:px-12">
                    <h2 className="text-2xl font-bold">
                        Keep exploring.
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                        Start with structured learning, then use the
                        right resources to deepen your understanding.
                    </p>

                    <Link
                        href="/learn"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                    >
                        Explore DevAtlas
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
}