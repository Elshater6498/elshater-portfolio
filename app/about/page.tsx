"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Languages } from "lucide-react";
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

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-4xl font-bold"
        >
          About Me
        </motion.h1>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Front End Developer</h3>
                  <p className="text-sm text-muted-foreground">Nsaq - Layout Company</p>
                  <p className="text-sm text-muted-foreground">03/2024 - 08/2024</p>
                </div>
                <div>
                  <h3 className="font-semibold">Front End Developer</h3>
                  <p className="text-sm text-muted-foreground">Alef team</p>
                  <p className="text-sm text-muted-foreground">12/2022 - Present</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold">Faculty Of Science</h3>
                <p className="text-sm text-muted-foreground">Geology Department</p>
                <p className="text-sm text-muted-foreground">Aswan University</p>
                <p className="text-sm text-muted-foreground">03/2016 - 08/2020</p>
                <p className="text-sm">Very good with honors</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="font-semibold">Arabic</p>
                  <p className="text-sm text-muted-foreground">Native or Bilingual Proficiency</p>
                </div>
                <div>
                  <p className="font-semibold">English</p>
                  <p className="text-sm text-muted-foreground">Semi-Professional Working Proficiency</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
}