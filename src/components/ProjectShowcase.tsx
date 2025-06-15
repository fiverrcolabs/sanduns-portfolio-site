
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";

type Project = {
  name: string;
  date: string;
  stack: string[];
  desc: string;
};

const projects: Project[] = [
  {
    name: "Warranty Wallet",
    date: "Mar 2023",
    stack: ["NodeJs", "ReactJS", "Blockchain", "Solidity", "MongoDB"],
    desc: "Warranty management system leveraging blockchain for secure records, featuring QR scanning and built-in chat.",
  },
  {
    name: "PixelMap",
    date: "May 2022",
    stack: ["NodeJs", "ReactJS", "MongoDB", "SocketIO"],
    desc: "A real-time collaborative 100x100 pixel map. Users color pixels via daily credits; features live previews.",
  },
  {
    name: "CASAMAX",
    date: "Jan 2025",
    stack: [
      "NextJS",
      "Typescript",
      "Tailwind",
      "NextAuth",
      "Keycloak",
      "Zustand",
    ],
    desc: "A dynamic furniture shopping platform with package-based customization; led front-end and project management.",
  },
  {
    name: "PonziShield",
    date: "Aug 2023 – Ongoing",
    stack: ["DeepLearning", "DApps", "Python", "PyTorch", "Blockchain"],
    desc: "Research to detect Ponzi DApps using multimodal analysis of smart contracts, transactions, and sentiment.",
  },
  // Add more projects here as needed!
];

export function ProjectShowcase() {
  // Split into pages of 2 projects each
  const projectsPerPage = 2;
  const pages = [];
  for (let i = 0; i < projects.length; i += projectsPerPage) {
    pages.push(projects.slice(i, i + projectsPerPage));
  }

  return (
    <div className="rounded-xl bg-card border border-border shadow-sm p-8 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Key Projects</h2>
      <Carousel className="relative">
        <CarouselContent>
          {pages.map((page, pageIndex) => (
            <CarouselItem key={pageIndex} className="grid sm:grid-cols-2 gap-6">
              {page.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}

function ProjectCard({
  name,
  date,
  stack,
  desc,
}: {
  name: string;
  date: string;
  stack: string[];
  desc: string;
}) {
  return (
    <div className="bg-muted/60 rounded-lg border border-border p-6 flex flex-col gap-2 shadow-lg hover:scale-[1.03] transition-transform animate-fade-in">
      <div className="flex justify-between items-baseline">
        <span className="text-base font-bold text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
      <div className="flex flex-wrap gap-2 my-1">
        {stack.map((tech) => (
          <span
            key={tech}
            className="bg-accent px-2 py-0.5 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="text-sm text-muted-foreground">{desc}</div>
    </div>
  );
}
