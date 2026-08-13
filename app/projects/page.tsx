"use client";
import Link from "next/link";
import { Navbar } from "@/components/navigation";
import Footer from "@/components/footer/Footer";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import {
    ArrowRight,
    BookOpen,
    Code2,
    ExternalLink,
    //   Github,
    Layers3,
} from "lucide-react";
const projects = [
    {
        title: "Student Management System",
        description:
            "Build a complete CRUD application with authentication, student records, search, filtering and database integration.",
        technology: "MERN Stack",
        level: "Intermediate",
        type: "Full Stack",
    },
    {
        title: "Career Guidance Platform",
        description:
            "Create a platform that helps students explore career paths based on their skills, interests and learning goals.",
        technology: "Next.js + MongoDB",
        level: "Intermediate",
        type: "Web App",
    },
    {
        title: "Developer Notes Platform",
        description:
            "Build a documentation-style platform for organizing programming concepts, examples and structured learning paths.",
        technology: "Next.js + MDX",
        level: "Intermediate",
        type: "Documentation",
    },
    {
        title: "Task Management App",
        description:
            "Create a modern task manager with authentication, CRUD operations, filters, priorities and persistent data.",
        technology: "React + Node.js",
        level: "Beginner",
        type: "Full Stack",
    },
    {
        title: "REST API",
        description:
            "Build a production-style REST API with authentication, validation, error handling and database operations.",
        technology: "Node.js + Express",
        level: "Intermediate",
        type: "Backend",
    },
    {
        title: "Portfolio Website",
        description:
            "Create a modern developer portfolio showcasing skills, projects, experience, blogs and contact information.",
        technology: "Next.js + Tailwind",
        level: "Beginner",
        type: "Frontend",
    },
];

export default function ProjectsPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [level, setLevel] = useState("All");

    const categories = [
        "All",
        "Frontend",
        "Backend",
        "Full Stack",
        "Documentation",
    ];

    const levels = [
        "All",
        "Beginner",
        "Intermediate",
        "Advanced",
    ];

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch =
                project.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                project.description
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                project.technology
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesCategory =
                category === "All" ||
                project.type === category;

            const matchesLevel =
                level === "All" ||
                project.level === level;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesLevel
            );
        });
    }, [search, category, level]);
    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-background">
            {/* Hero */}
            <section className="border-b border-border">
                <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
                        DEVATLAS PROJECTS
                    </p>

                    <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                        Stop learning.
                        <br />
                        Start building.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                        Practice what you learn by building real projects
                        that strengthen your development skills.
                    </p>
                </div>
            </section>

            {/* Projects */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Project Library
                    </h2>

                    <p className="mt-2 max-w-2xl text-muted-foreground">
                        Projects will eventually connect directly with
                        DevAtlas learning paths and technologies.
                    </p>
                </div>

                <div className="mt-8 flex flex-col gap-4 lg:flex-row">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search projects, technologies..."
                            className="h-11 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500"
                        />
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-emerald-500"
                        >
                            {categories.map((item) => (
                                <option key={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    {/* Level */}
                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-emerald-500"
                    >
                        {levels.map((item) => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <article
                            key={project.title}
                            className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5"
                        >
                            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl transition group-hover:bg-emerald-500/10" />

                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                                        <Code2 className="h-5 w-5" />
                                    </div>

                                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                        {project.type}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">
                                    {project.description}
                                </p>

                                <div className="mt-6 space-y-3 border-t border-border pt-4">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Layers3 className="h-4 w-4 text-emerald-500" />
                                        {project.technology}
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <BookOpen className="h-4 w-4 text-emerald-500" />
                                        {project.level}
                                    </div>
                                </div>

                                <Link
                                    href="#"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 transition hover:text-emerald-400"
                                >
                                    View Project
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Build CTA */}
            <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/20 px-6 py-14 text-center sm:px-12">
                    <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

                    <div className="relative">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                            {/* <Github className="h-5 w-5" /> */}
                            <Code2 className="h-4 w-4" />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold">
                            Build your own projects
                        </h2>

                        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                            Learn a concept, build something with it, and
                            turn your knowledge into a real portfolio.
                        </p>

                        <Link
                            href="/learn"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                        >
                            Start Learning
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
        </>
    );
}