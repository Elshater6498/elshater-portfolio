"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "Business Intelligence Platforms",
    description: "Developed responsive web components using Bootstrap and SCSS, managed tasks with Jira, and utilized Git for version control.",
    tech: ["Bootstrap", "SCSS", "Jira", "Git"],
    company: "Nsaq - Layout Company",
  },
  {
    title: "SAAS Projects",
    description: "Built MVPs using React.js, implemented state management with Context API and Redux, and created server-side rendered pages with Next.js.",
    tech: ["React.js", "Next.js", "Redux", "Context API"],
    company: "Alef team",
  },
];

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="container py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-4xl font-bold"
        >
          My Projects
        </motion.h1>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}