import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiTailwindcss,
  SiGit,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

interface TechnologyCardProps {
  name: string;
  slug: string;
  description: string;
}

const icons: Record<string, React.ReactNode> = {
  react: <SiReact className="text-cyan-400" />,
  javascript: <SiJavascript className="text-yellow-400" />,
  typescript: <SiTypescript className="text-blue-500" />,
  nextjs: <SiNextdotjs className="text-foreground" />,
  "node-js": <SiNodedotjs className="text-green-500" />,
  nodejs: <SiNodedotjs className="text-green-500" />,
  cpp: <SiCplusplus className="text-blue-500" />,
  python: <SiPython className="text-blue-500" />,
  html: <SiHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,
  tailwindcss: <SiTailwindcss className="text-cyan-400" />,
  git: <SiGit className="text-orange-600" />,
  github: <FaGithub className="text-foreground" />,
  mongodb: <SiMongodb className="text-green-500" />,
  express: <SiExpress className="text-foreground" />,
  docker: <SiDocker className="text-blue-500" />,
  mysql: <SiMysql className="text-blue-500" />,
  postgresql: <SiPostgresql className="text-blue-400" />,
};

export default function TechnologyCard({
  name,
  slug,
  description,
}: TechnologyCardProps) {
  const icon = icons[slug.toLowerCase()] ?? name.charAt(0);

  return (
    <Link
      href={`/learn/${slug}`}
      className="
        group
        relative
        flex
        min-h-[165px]
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-border
        bg-card
        p-4
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-emerald-500/50
        hover:shadow-lg
        sm:min-h-[175px]
        sm:p-5
      "
    >
      <div className="flex items-start justify-between">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-muted
            text-xl
            text-foreground
            transition-colors
            duration-200
            
          "
        >
          {icon}
        </div>

        <ArrowUpRight
          className="
            h-4
            w-4
            text-muted-foreground
            transition-all
            duration-200
            group-hover:-translate-y-1
            group-hover:translate-x-1
           
          "
        />
      </div>

      <div className="mt-3">
        <h3 className="text-base font-semibold tracking-tight sm:text-lg">
          {name}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-3 text-sm font-medium text-emerald-500">
        Start learning
        <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}