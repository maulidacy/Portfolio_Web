import Container from "@/components/layout/container";
import { projects } from "@/features/projects/data";
import { ProjectCard } from "@/components/sections/project-card";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  if (!projects.length) {
    return <Container className="py-12"><p className="text-muted-foreground">Belum ada proyek.</p></Container>;
  }
  return (
    <Container className="py-12">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p._id} slug={p.slug} title={p.title} summary={p.summary} cover={p.cover} tags={p.tags} />
        ))}
      </div>
    </Container>
  );
}
