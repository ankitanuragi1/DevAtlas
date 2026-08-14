import type {
  LearningGroup,
  LearningTopic,
} from "@/components/learn/types/learning";

export const topicGroups: Record<
  string,
  LearningGroup[]
> = {
  javascript: [
    {
      title: "Fundamentals",
      slugs: [
        "introduction",
        "variables",
        "data-types",
        "operators",
      ],
    },

    {
      title: "Control Flow",
      slugs: [],
      subgroups: [
        {
          title: "Conditions",
          items: [
            {
              title: "If Statement",
              slug: "if-statement",
            },
            {
              title: "If Else",
              slug: "if-else",
            },
            {
              title: "Else If",
              slug: "else-if",
            },
            {
              title: "Switch Statement",
              slug: "switch",
            },
            {
              title: "Ternary Operator",
              slug: "ternary-operator",
            },
          ],
        },

        {
          title: "Loops",
          items: [
            {
              title: "For Loop",
              slug: "for-loop",
            },
            {
              title: "While Loop",
              slug: "while-loop",
            },
            {
              title: "Do While Loop",
              slug: "do-while-loop",
            },
            {
              title: "Break",
              slug: "break",
            },
            {
              title: "Continue",
              slug: "continue",
            },
            {
              title: "Nested Loops",
              slug: "nested-loops",
            },
          ],
        },
      ],
    },

    {
      title: "Functions",
      slugs: [],
      subgroups: [
        {
          title: "Function Basics",
          items: [
            {
              title: "Function Declaration",
              slug: "function-declaration",
            },
            {
              title: "Function Expression",
              slug: "function-expression",
            },
            {
              title: "Parameters & Arguments",
              slug: "parameters-arguments",
            },
            {
              title: "Return Statement",
              slug: "return-statement",
            },
          ],
        },

        {
          title: "Advanced Functions",
          items: [
            {
              title: "Arrow Functions",
              slug: "arrow-functions",
            },
            {
              title: "Callback Functions",
              slug: "callback-functions",
            },
            {
              title: "Higher Order Functions",
              slug: "higher-order-functions",
            },
            {
              title: "Closures",
              slug: "closures",
            },
            {
              title: "Recursion",
              slug: "recursion",
            },
          ],
        },
      ],
    },

    {
      title: "Arrays",
      slugs: [],
      subgroups: [
        {
          title: "Array Basics",
          items: [
            {
              title: "Creating Arrays",
              slug: "creating-arrays",
            },
            {
              title: "Accessing Elements",
              slug: "accessing-array-elements",
            },
            {
              title: "Adding & Removing Elements",
              slug: "adding-removing-array-elements",
            },
          ],
        },

        {
          title: "Array Methods",
          items: [
            {
              title: "forEach",
              slug: "foreach",
            },
            {
              title: "map",
              slug: "map",
            },
            {
              title: "filter",
              slug: "filter",
            },
            {
              title: "reduce",
              slug: "reduce",
            },
            {
              title: "find",
              slug: "find",
            },
            {
              title: "some & every",
              slug: "some-every",
            },
            {
              title: "sort",
              slug: "sort",
            },
          ],
        },
      ],
    },

    {
      title: "Objects",
      slugs: [],
      subgroups: [
        {
          title: "Object Basics",
          items: [
            {
              title: "Creating Objects",
              slug: "creating-objects",
            },
            {
              title: "Properties & Methods",
              slug: "object-properties-methods",
            },
            {
              title: "Destructuring",
              slug: "object-destructuring",
            },
          ],
        },

        {
          title: "Advanced Objects",
          items: [
            {
              title: "Object.keys",
              slug: "object-keys",
            },
            {
              title: "Object.values",
              slug: "object-values",
            },
            {
              title: "Object.entries",
              slug: "object-entries",
            },
            {
              title: "Spread Operator",
              slug: "object-spread",
            },
          ],
        },
      ],
    },

    {
      title: "Asynchronous JavaScript",
      slugs: [],
      subgroups: [
        {
          title: "Async Basics",
          items: [
            {
              title: "Synchronous vs Asynchronous",
              slug: "sync-vs-async",
            },
            {
              title: "Callbacks",
              slug: "async-callbacks",
            },
          ],
        },

        {
          title: "Promises",
          items: [
            {
              title: "Promise Basics",
              slug: "promises",
            },
            {
              title: "Promise Methods",
              slug: "promise-methods",
            },
            {
              title: "Promise Chaining",
              slug: "promise-chaining",
            },
          ],
        },

        {
          title: "Async / Await",
          items: [
            {
              title: "Async Functions",
              slug: "async-functions",
            },
            {
              title: "Await",
              slug: "await",
            },
            {
              title: "Error Handling",
              slug: "async-error-handling",
            },
          ],
        },
      ],
    },

    {
      title: "Browser & DOM",
      slugs: [],
      subgroups: [
        {
          title: "DOM",
          items: [
            {
              title: "DOM Introduction",
              slug: "dom",
            },
            {
              title: "Selecting Elements",
              slug: "selecting-dom-elements",
            },
            {
              title: "Creating Elements",
              slug: "creating-dom-elements",
            },
            {
              title: "Modifying Elements",
              slug: "modifying-dom-elements",
            },
          ],
        },

        {
          title: "Events",
          items: [
            {
              title: "Event Basics",
              slug: "events",
            },
            {
              title: "Event Listeners",
              slug: "event-listeners",
            },
            {
              title: "Event Bubbling",
              slug: "event-bubbling",
            },
            {
              title: "Event Delegation",
              slug: "event-delegation",
            },
          ],
        },
      ],
    },

    {
      title: "Modules",
      slugs: [],
      subgroups: [
        {
          title: "ES Modules",
          items: [
            {
              title: "Import",
              slug: "import",
            },
            {
              title: "Export",
              slug: "export",
            },
            {
              title: "Default Export",
              slug: "default-export",
            },
            {
              title: "Named Export",
              slug: "named-export",
            },
          ],
        },
      ],
    },
  ],

  typescript: [
    {
      title: "Fundamentals",
      slugs: [
        "introduction",
        "types",
        "type-inference",
        "variables",
      ],
    },

    {
      title: "Type System",
      slugs: [],
      subgroups: [
        {
          title: "Basic Types",
          items: [
            {
              title: "Any",
              slug: "any",
            },
            {
              title: "Unknown",
              slug: "unknown",
            },
            {
              title: "Never",
              slug: "never",
            },
            {
              title: "Void",
              slug: "void",
            },
          ],
        },

        {
          title: "Advanced Types",
          items: [
            {
              title: "Union Types",
              slug: "union-types",
            },
            {
              title: "Intersection Types",
              slug: "intersection-types",
            },
            {
              title: "Literal Types",
              slug: "literal-types",
            },
            {
              title: "Enums",
              slug: "enums",
            },
          ],
        },
      ],
    },

    {
      title: "Objects & Structures",
      slugs: [
        "objects",
        "interfaces",
        "type-aliases",
        "tuples",
      ],
    },

    {
      title: "Functions",
      slugs: [
        "functions",
        "function-types",
      ],
    },

    {
      title: "Advanced TypeScript",
      slugs: [
        "generics",
        "utility-types",
        "type-guards",
        "mapped-types",
      ],
    },
  ],

  react: [
    {
      title: "Fundamentals",
      slugs: [
        "introduction",
        "components",
        "jsx",
        "props",
        "state",
        "events",
      ],
    },

    {
      title: "Hooks",
      slugs: [],
      subgroups: [
        {
          title: "Core Hooks",
          items: [
            {
              title: "useState",
              slug: "use-state",
            },
            {
              title: "useEffect",
              slug: "use-effect",
            },
            {
              title: "useContext",
              slug: "use-context",
            },
          ],
        },

        {
          title: "Advanced Hooks",
          items: [
            {
              title: "useReducer",
              slug: "use-reducer",
            },
            {
              title: "useMemo",
              slug: "use-memo",
            },
            {
              title: "useCallback",
              slug: "use-callback",
            },
            {
              title: "useRef",
              slug: "use-ref",
            },
          ],
        },
      ],
    },

    {
      title: "Application Patterns",
      slugs: [
        "forms",
        "conditional-rendering",
        "lists",
        "context",
      ],
    },

    {
      title: "Performance",
      slugs: [
        "react-memo",
        "lazy-loading",
        "code-splitting",
      ],
    },
  ],

  nodejs: [
    {
      title: "Fundamentals",
      slugs: [
        "introduction",
        "modules",
        "npm",
      ],
    },

    {
      title: "Core APIs",
      slugs: [
        "file-system",
        "path",
        "http",
        "events",
      ],
    },

    {
      title: "Advanced Node.js",
      slugs: [
        "streams",
        "buffers",
        "worker-threads",
      ],
    },
  ],

  express: [
    {
      title: "Fundamentals",
      slugs: [
        "introduction",
        "routing",
      ],
    },

    {
      title: "Middleware",
      slugs: [
        "middleware",
        "custom-middleware",
        "error-handling",
      ],
    },

    {
      title: "API Development",
      slugs: [
        "rest-api",
        "authentication",
        "validation",
      ],
    },
  ],

  mongodb: [
    {
      title: "Fundamentals",
      slugs: [
        "introduction",
        "documents-and-collections",
      ],
    },

    {
      title: "CRUD",
      slugs: [
        "insert",
        "find",
        "update",
        "delete",
      ],
    },

    {
      title: "Advanced",
      slugs: [
        "indexes",
        "aggregation",
        "transactions",
      ],
    },
  ],
};

export function getTopicGroups(
  technology: string,
  topics: LearningTopic[]
): LearningGroup[] {
  const groups = topicGroups[technology];

  if (!groups) {
    return [
      {
        title: "Topics",
        slugs: topics.map((topic) => topic.slug),
      },
    ];
  }

  const existingSlugs = new Set(
    topics.map((topic) => topic.slug)
  );

  return groups
    .map((group) => ({
      ...group,

      slugs: group.slugs.filter((slug) =>
        existingSlugs.has(slug)
      ),

      subgroups: group.subgroups
        ?.map((subgroup) => ({
          ...subgroup,

          items: subgroup.items.filter((item) =>
            existingSlugs.has(item.slug)
          ),
        }))
        .filter(
          (subgroup) => subgroup.items.length > 0
        ),
    }))
    .filter(
      (group) =>
        group.slugs.length > 0 ||
        Boolean(group.subgroups?.length)
    );
}