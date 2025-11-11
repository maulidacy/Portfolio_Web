import ProjectCard from "@/components/sections/project-card";
import { projects } from "@/features/projects/data";

export const metadata = {
  title: "Projects",
  description: "Semua project yang pernah saya kerjakan",
};

export default function ProjectsPage() {
  const allProjects = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <main className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          Semua Projects
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((p, i) => (
            <ProjectCard key={p.title} p={{ ...p, priority: i === 0 }} />
          ))}
        </div>
      </div>
    </main>
  );
}
