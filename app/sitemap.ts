import type { MetadataRoute } from "next";
import { technologyCategories } from "@/data/technologies";
import { technologyTopics } from "@/data/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devatlas.vercel.app";

  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: new Date(),
    },
  ];

  for (const category of technologyCategories) {
    for (const technology of category.technologies) {
      urls.push({
        url: `${baseUrl}/learn/${technology.slug}`,
        lastModified: new Date(),
      });
    }
  }

  for (const [technology, topics] of Object.entries(
    technologyTopics
  )) {
    for (const topic of topics) {
      urls.push({
        url: `${baseUrl}/learn/${technology}/${topic.slug}`,
        lastModified: new Date(),
      });
    }
  }

  return urls;
}