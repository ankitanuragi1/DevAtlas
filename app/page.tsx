import { Navbar } from "@/components/navigation";
import Hero from "@/components/home/Hero";
import PopularTechnologies from "@/components/home/PopularTechnologies";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <PopularTechnologies />
      </main>
    </>
  );
}