import fs from "fs";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");

export function getNoteContent(
  technology: string,
  topic: string
) {
  const filePath = path.join(
    contentDirectory,
    technology,
    `${topic}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}