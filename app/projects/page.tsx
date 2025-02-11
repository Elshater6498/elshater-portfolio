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
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/components/language-provider";

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
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <PageTransition>
      <div className="container py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-4xl font-bold"
        >
          {t("projects.title")}
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
                    src={project.img}
                    alt={
                      language === "en" ? project.title.en : project.title.ar
                    }
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">
                    {language === "en" ? project.title.en : project.title.ar}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 line-clamp-3">
                    {language === "en"
                      ? project.description.en
                      : project.description.ar}
                  </p>
                  <Link href={project.link} target="_blank">
                    <Button className="">
                      {t("projects.visitProject")}
                      <ExternalLink className="m-2 h-4 w-4" />
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
