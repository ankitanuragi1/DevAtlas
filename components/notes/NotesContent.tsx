import { MDXRemote } from "next-mdx-remote/rsc";
import CodeBlock from "./CodeBlock";
import TableOfContents from "./TableOfContents";
import Callout from "./Callout";
import BookmarkButton from "./BookmarkButton";
import CompleteTopicButton from "./CompleteTopicButton";
import { highlightCode } from "@/lib/highlight";

interface NotesContentProps {
  content: string;
  technology: string;
  topic: string;
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

      return {
        id: createId(match[2].trim()),
        title: match[2].trim(),
        level: match[1].length,
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
  topic,
}: NotesContentProps) {
  const tocItems = extractHeadings(content);

  const components = {
    Callout,

    h1: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <h1 className="text-4xl font-bold tracking-[-0.035em] text-foreground sm:text-5xl">
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
        className="mt-16 scroll-mt-24 border-b border-border/60 pb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
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
        className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground"
      >
        {children}
      </h3>
    ),

    p: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <p className="mt-5 text-[16px] leading-8 text-muted-foreground sm:text-[17px]">
        {children}
      </p>
    ),

    table: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <div className="my-8 overflow-x-auto rounded-xl border border-border/70">
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
      <thead className="bg-muted/60">
        {children}
      </thead>
    ),

    tbody: ({
      children,
    }: {
      children: React.ReactNode;
    }) => <tbody>{children}</tbody>,

    tr: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <tr className="border-b border-border/60 last:border-0">
        {children}
      </tr>
    ),

    th: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-foreground">
        {children}
      </th>
    ),

    td: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <td className="px-4 py-3 leading-6 text-muted-foreground">
        {children}
      </td>
    ),

    ul: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
        {children}
      </ul>
    ),

    ol: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),

    li: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <li className="pl-1 leading-8">
        {children}
      </li>
    ),

    blockquote: ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <blockquote className="my-8 rounded-r-xl border-l-4 border-emerald-500 bg-emerald-500/5 px-5 py-4 italic text-muted-foreground">
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
        className="font-medium text-emerald-500 underline-offset-4 transition hover:text-emerald-400 hover:underline"
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
      const isBlock = className?.includes("language-");

      if (!isBlock) {
        return (
          <code className="rounded-md border border-border/60 bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">
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
      <hr className="my-12 border-border/60" />
    ),
  };

  const topicTitle = topic
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

  return (
    <article className="min-w-0">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:py-12 lg:px-10 lg:py-14">

        {/* Topic header */}
        <header className="mb-12 border-b border-border/60 pb-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {technology}
              </div>

              <h1 className="text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl">
                {topicTitle}
              </h1>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Learn the fundamentals, concepts, and practical
                details you need to understand {topicTitle}.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <BookmarkButton
                technology={technology}
                topic={topic}
              />

              <CompleteTopicButton
                technology={technology}
                topic={topic}
              />
            </div>
          </div>
        </header>

        {/* MDX content */}
        <div className="min-w-0">
          <MDXRemote
            source={content}
            components={components}
          />
        </div>
      </div>

      {/* Right-side TOC */}
      <TableOfContents items={tocItems} />
    </article>
  );
}