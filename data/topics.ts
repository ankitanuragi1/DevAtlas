export interface Topic {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
}

export const technologyTopics: Record<string, Topic[]> = {
  javascript: [
    {
      slug: "introduction",
      title: "Introduction",
      description:
        "Understand what JavaScript is and how it works.",
      level: "Beginner",
      duration: "10 min",
    },
    {
      slug: "variables",
      title: "Variables",
      description:
        "Learn let, const and var.",
      level: "Beginner",
      duration: "15 min",
    },
    {
      slug: "data-types",
      title: "Data Types",
      description:
        "Understand JavaScript data types.",
      level: "Beginner",
      duration: "20 min",
    },
    {
      slug: "operators",
      title: "Operators",
      description:
        "Learn arithmetic, comparison and logical operators.",
      level: "Beginner",
      duration: "15 min",
    },
    {
      slug: "conditions",
      title: "Conditions",
      description:
        "Learn how JavaScript makes decisions.",
      level: "Beginner",
      duration: "15 min",
    },
    {
      slug: "loops",
      title: "Loops",
      description:
        "Learn how to repeat code.",
      level: "Beginner",
      duration: "20 min",
    },
    {
      slug: "functions",
      title: "Functions",
      description:
        "Learn reusable blocks of code.",
      level: "Beginner",
      duration: "25 min",
    },
    {
      slug: "arrays",
      title: "Arrays",
      description:
        "Learn how to work with collections of values.",
      level: "Beginner",
      duration: "25 min",
    },
    {
      slug: "objects",
      title: "Objects",
      description:
        "Learn JavaScript objects and key-value data.",
      level: "Beginner",
      duration: "25 min",
    },
  ],

  typescript: [
    {
      slug: "introduction",
      title: "Introduction",
      description:
        "Understand TypeScript and why it exists.",
      level: "Beginner",
      duration: "10 min",
    },
    {
      slug: "types",
      title: "Types",
      description:
        "Learn the TypeScript type system.",
      level: "Beginner",
      duration: "20 min",
    },
    {
      slug: "interfaces",
      title: "Interfaces",
      description:
        "Learn how to define object structures.",
      level: "Beginner",
      duration: "20 min",
    },
    {
      slug: "functions",
      title: "Functions",
      description:
        "Use TypeScript types with functions.",
      level: "Intermediate",
      duration: "25 min",
    },
    {
      slug: "generics",
      title: "Generics",
      description:
        "Create reusable type-safe code.",
      level: "Intermediate",
      duration: "30 min",
    },
  ],

  react: [
    {
      slug: "introduction",
      title: "Introduction",
      description:
        "Understand React and component-based development.",
      level: "Beginner",
      duration: "15 min",
    },
    {
      slug: "components",
      title: "Components",
      description:
        "Learn how React components work.",
      level: "Beginner",
      duration: "20 min",
    },
    {
      slug: "jsx",
      title: "JSX",
      description:
        "Learn how JSX works in React.",
      level: "Beginner",
      duration: "15 min",
    },
    {
      slug: "props",
      title: "Props",
      description:
        "Learn how data flows between components.",
      level: "Beginner",
      duration: "20 min",
    },
    {
      slug: "state",
      title: "State",
      description:
        "Understand state and dynamic UI updates.",
      level: "Beginner",
      duration: "25 min",
    },
    {
      slug: "hooks",
      title: "Hooks",
      description:
        "Learn React Hooks.",
      level: "Intermediate",
      duration: "30 min",
    },
  ],
};