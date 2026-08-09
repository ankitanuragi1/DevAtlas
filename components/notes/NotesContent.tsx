import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import CodeBlock from "./CodeBlock";
import TableOfContents from "./TableOfContents";
import Callout from "./Callout";
import { highlightCode } from "@/lib/highlight";

interface NotesContentProps {
  content: string;
  technology: string;
}

function getLanguage(className?: string) {
  if (!className) return "text";

  const match = className.match(/language-(\w+)/);

  return match?.[1] ?? "text";
}

function createId(children: React.ReactNode) {
  return String(children)
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractHeadings(content: string) {
  return content
    .split("\n")
    .filter((line) => /^#{2,3}\s/.test(line))
    .map((line) => {
      const match = line.match(/^(#{2,3})\s(.+)$/);

      if (!match) return null;

      const level = match[1].length;
      const title = match[2].trim();

      return {
        id: createId(title),
        title,
        level,
      };
    })
    .filter(Boolean) as {
    id: string;
    title: string;
    level: number;
  }[];
}

export default async function NotesContent({
  content,
  technology,
}: NotesContentProps) {
  const tocItems = extractHeadings(content);

  const components = {
    Callout,

    h1: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <h1 className="text-4xl font-bold tracking-tight">
        {children}
      </h1>
    ),

    h2: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <h2
        id={createId(children)}
        className="mt-12 scroll-mt-20 border-b border-border pb-2 text-2xl font-bold tracking-tight"
      >
        {children}
      </h2>
    ),

    h3: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <h3
        id={createId(children)}
        className="mt-8 scroll-mt-20 text-xl font-semibold tracking-tight"
      >
        {children}
      </h3>
    ),

    p: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <p className="mt-4 text-base leading-7 text-muted-foreground">
        {children}
      </p>
    ),

    table: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <div className="my-8 overflow-x-auto rounded-lg border border-border">
        <table className="w-full border-collapse text-sm">
          {children}
        </table>
      </div>
    ),

    thead: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <thead className="bg-muted">
        {children}
      </thead>
    ),

    tbody: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <tbody>
        {children}
      </tbody>
    ),

    tr: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <tr className="border-b border-border last:border-0">
        {children}
      </tr>
    ),

    th: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <th className="px-4 py-3 text-left font-semibold text-foreground">
        {children}
      </th>
    ),

    td: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <td className="px-4 py-3 text-muted-foreground">
        {children}
      </td>
    ),

    ul: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        {children}
      </ul>
    ),

    ol: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),

    li: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <li className="pl-1 leading-7">
        {children}
      </li>
    ),

    blockquote: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <blockquote className="mt-6 border-l-4 border-emerald-500 pl-5 italic text-muted-foreground">
        {children}
      </blockquote>
    ),

    a: ({
      children,
      href,
    }: {
      children: React.ReactNode;
      href?: string;
    }) => (
      <a
        href={href}
        className="font-medium text-emerald-500 underline-offset-4 hover:underline"
      >
        {children}
      </a>
    ),

    strong: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <strong className="font-semibold text-foreground">
        {children}
      </strong>
    ),

    code: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => {
      const isBlock =
        className?.includes("language-");

      if (!isBlock) {
        return (
          <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
            {children}
          </code>
        );
      }

      return (
        <code className={className}>
          {children}
        </code>
      );
    },

    pre: async ({
      children,
    }: {
      children: React.ReactNode;
    }) => {
      const child =
        children as React.ReactElement<{
          children?: React.ReactNode;
          className?: string;
        }>;

      const code = String(
        child.props.children ?? ""
      );

      const language = getLanguage(
        child.props.className
      );

      const highlightedCode = await highlightCode(
        code.replace(/\n$/, ""),
        language
      );

      return (
        <CodeBlock
          code={highlightedCode}
          language={language}
        />
      );
    },

    hr: () => (
      <hr className="my-10 border-border" />
    ),
  };

  return (
    <article className="relative">
      <div className="mx-auto max-w-3xl px-6 py-10 lg:px-10">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-500">
            {technology}
          </p>
        </div>

        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>

      <TableOfContents items={tocItems} />
    </article>
  );
}