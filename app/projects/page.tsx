"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import Image from "next/image";
import { projects } from "@/data/projects";

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

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="container py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-4xl font-bold"
        >
          Projects
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 line-clamp-3">{project.description}</p>
                  <Link href={project.link} target="_blank">
                    <Button className="w-full">
                      Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
