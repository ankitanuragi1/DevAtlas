import Link from "next/link";
import { Navbar } from "@/components/navigation";
import Footer from "@/components/footer/Footer";
import {
    ArrowRight,
    CheckCircle2,
    Code2,
    Database,
    Globe,
    Server,
    Smartphone,
    Terminal,
} from "lucide-react";

const roadmaps = [
    {
        title: "Frontend Developer",
        description:
            "Master HTML, CSS, JavaScript, React and modern frontend development.",
        icon: Globe,
        level: "Beginner → Advanced",
        topics: "12 stages",
    },
    {
        title: "Full Stack Developer",
        description:
            "Build complete applications from frontend interfaces to backend APIs and databases.",
        icon: Code2,
        level: "Beginner → Advanced",
        topics: "18 stages",
    },
    {
        title: "Backend Developer",
        description:
            "Learn servers, APIs, authentication, databases and scalable backend systems.",
        icon: Server,
        level: "Intermediate → Advanced",
        topics: "14 stages",
    },
    {
        title: "JavaScript Developer",
        description:
            "Go from JavaScript fundamentals to advanced concepts and real-world development.",
        icon: Terminal,
        level: "Beginner → Advanced",
        topics: "15 stages",
    },
    {
        title: "Database Developer",
        description:
            "Understand SQL, NoSQL, data modeling, queries and database architecture.",
        icon: Database,
        level: "Beginner → Advanced",
        topics: "10 stages",
    },
    {
        title: "Mobile Developer",
        description:
            "Explore the fundamentals required to build modern mobile applications.",
        icon: Smartphone,
        level: "Beginner → Advanced",
        topics: "10 stages",
    },
];

export default function RoadmapsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background">
                {/* Hero */}
                <section className="border-b border-border">
                    <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
                            DEVATLAS ROADMAPS
                        </p>

                        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                            Know exactly what to learn.
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                            Follow carefully structured paths that take you
                            from fundamentals to real-world development skills.
                        </p>
                    </div>
                </section>

                {/* Roadmaps */}
                <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold sm:text-3xl">
                            Developer Roadmaps
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            Choose a path and learn in the right order.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {roadmaps.map((roadmap) => {
                            const Icon = roadmap.icon;

                            return (
                                <Link
                                    key={roadmap.title}
                                    href="#"
                                    className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5"
                                >
                                    {/* Glow */}
                                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl transition group-hover:bg-emerald-500/10" />

                                    <div className="relative">
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-emerald-500" />
                                        </div>

                                        <h3 className="mt-6 text-xl font-semibold">
                                            {roadmap.title}
                                        </h3>

                                        <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">
                                            {roadmap.description}
                                        </p>

                                        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                                                {roadmap.level}
                                            </span>

                                            <span>•</span>

                                            <span>{roadmap.topics}</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* CTA */}
                <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                    <div className="rounded-2xl border border-border bg-muted/20 px-6 py-12 text-center sm:px-12">
                        <h2 className="text-2xl font-bold">
                            Learn by building.
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                            Roadmaps will eventually connect learning topics,
                            projects and resources into one complete developer journey.
                        </p>

                        <Link
                            href="/learn"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                        >
                            Explore Learning
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}