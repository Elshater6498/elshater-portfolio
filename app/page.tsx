"use client";

import { ArrowRight, FileText, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/components/language-provider";
import { ArrowLeft } from "lucide-react";

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

export default function Home() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center space-y-16">
        {/* Hero Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center space-y-4"
        >
          <motion.div
            variants={item}
            className="flex justify-center items-center gap-5 w-full"
          >
            <motion.h3
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.4 },
              }}
              className="text-neutral-700 dark:text-[#C0C0C0] max-md:text-xl font-InterMe"
            >
              {t("home.title")}
            </motion.h3>

            <div className="bg-[#F6F8FA] dark:bg-[#115e3b] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
              <div className="w-2 h-2 rounded-full animate-ping bg-[#28C780]" />
              <p className="text-[#2b9364] hidden lg:flex text-xs font-semibold uppercase">
                {t("home.available")}
              </p>
            </div>
          </motion.div>
          <motion.div variants={item} className="space-y-2 flex flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {t("home.name")}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t("home.description")}
            </p>
          </motion.div>
          <motion.div variants={item} className="flex justify-center gap-5">
            <Link
              href="https://drive.google.com/file/d/1jhOegROi2oh9WLuGEi4BIvA_0AiDrdxX/view?usp=sharing"
              target="_blank"
            >
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                {t("home.preview")}
              </Button>
            </Link>
            <Link href="mailto:elshaterm247@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">{t("home.email")}</span>
              </Button>
            </Link>
            <Link href="https://wa.me/201151220529" target="_blank">
              <Button variant="ghost" size="icon">
                <BsWhatsapp className="h-5 w-5" />
                <span className="sr-only">{t("home.whatsapp")}</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Preview Sections */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full space-y-16"
        >
          {/* About Preview */}
          <motion.section variants={item} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{t("home.about-me")}</h2>
              <Link href="/about">
                <Button variant="ghost" className="gap-2">
                  {t("home.view-more")}
                  {language === "en" ? (
                    <ArrowRight className="h-4 w-4" />
                  ) : (
                    <ArrowLeft className="h-4 w-4" />
                  )}
                </Button>
              </Link>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  {t("home.about-description")}
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Projects Preview */}
          <motion.section variants={item} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {t("home.latest-projects")}
              </h2>
              <Link href="/projects">
                <Button variant="ghost" className="gap-2">
                  {t("home.view-all")}
                  {language === "en" ? (
                    <ArrowRight className="h-4 w-4" />
                  ) : (
                    <ArrowLeft className="h-4 w-4" />
                  )}
                </Button>
              </Link>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Business Intelligence Platforms</CardTitle>
                <CardDescription>Nsaq - Layout Company</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Bootstrap", "SCSS", "Jira", "Git"].map((tech) => (
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
          </motion.section>

          {/* Blog Preview */}
          <motion.section variants={item} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{t("home.latest-posts")}</h2>
              <Link href="/blog">
                <Button variant="ghost" className="gap-2">
                  {t("home.view-all")}
                  {language === "en" ? (
                    <ArrowRight className="h-4 w-4" />
                  ) : (
                    <ArrowLeft className="h-4 w-4" />
                  )}
                </Button>
              </Link>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Blog posts will be available soon. Stay tuned for updates
                  about web development, technology, and more.
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </PageTransition>
  );
}
