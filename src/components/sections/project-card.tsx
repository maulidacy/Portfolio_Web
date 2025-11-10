"use client";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/layout/motion";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ slug, title, summary, cover, tags }:{
  slug:string; title:string; summary:string; cover?:string; tags:string[];
}) {
  return (
    <Link href={`/projects/${slug}`} className="block focus:outline-none">
      <MotionDiv whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="group rounded-2xl p-[1px] shadow-sm"
        style={{ background: "linear-gradient(180deg, rgba(150,150,150,.25), rgba(150,150,150,0))" }}>
        <div className="rounded-2xl border bg-card p-4">
          {cover && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <MotionDiv whileHover={{ scale: 1.04 }} className="h-full w-full">
                <Image src={cover} alt="" fill className="object-cover" />
              </MotionDiv>
            </div>
          )}
          <div className="mt-4 flex items-start justify-between gap-4">
            <h3 className="font-medium group-hover:underline">{title}</h3>
            <ArrowRight aria-hidden className="h-4 w-4 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
}
