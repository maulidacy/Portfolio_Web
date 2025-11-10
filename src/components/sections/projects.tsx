"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionDiv, fadeInUp, stagger } from "@/components/layout/motion";

const PROJECTS = [
  {
    slug: "ml-ops-pipeline",
    title: "ML Ops Pipeline",
    summary: "Pipeline training & deployment dengan CI/CD dan monitoring.",
    cover: "/projects/mlops.jpg",
    tags: ["Python", "Kubeflow", "Grafana"],
  },
  {
    slug: "genai-chat",
    title: "GenAI Chat",
    summary: "Chatbot generatif dengan retrieval & guardrails.",
    cover: "/projects/genai.jpg",
    tags: ["Next.js", "RAG", "Vercel"],
  },
  {
    slug: "vision-inspector",
    title: "Vision Inspector",
    summary: "Deteksi cacat produk real-time di edge device.",
    cover: "/projects/vision.jpg",
    tags: ["PyTorch", "ONNX", "Edge"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/projects">Lihat Semua</Link>
          </Button>
        </div>

        <MotionDiv
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((p) => (
            <MotionDiv
              key={p.slug}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={p.cover}
                  fill
                  alt={p.title}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="font-semibold leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="pt-3">
                  <Button asChild size="sm" className="rounded-full">
                    <Link href={`/projects/${p.slug}`}>Detail</Link>
                  </Button>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
