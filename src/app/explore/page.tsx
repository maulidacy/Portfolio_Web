import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import ContactCtaSection from "@/components/sections/contact-cta";

export const metadata = {
  title: "Explore — Maulida Cahya Kurnia",
  description:
    "Tentang, Projects, Experience, dan kontak Maulida Cahya Kurnia.",
};

export default function ExplorePage() {
  return (
    <>
      <AboutSection />       {/* id="about" + scroll-mt di komponen */}
      <ProjectsSection />    {/* id="projects" */}
      <ExperienceSection />  {/* id="experience" */}
      <ContactCtaSection />  {/* id="contact" */}
    </>
  );
}
