"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="w-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl">
      <div className="flex flex-col items-center gap-4 py-10 px-4 md:h-16 md:flex-row md:py-0">
        <div className="flex flex-1 items-center justify-center md:justify-start">
          <p className="text-sm text-muted-foreground">
            © 2024 Mohamed Elshater – All rights reserved
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link href="https://github.com/Elshater6498" target="_blank">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/mohamed-mostafa-elshater-4727111a9"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://x.com/elshater1998" target="_blank">
            <Button variant="ghost" size="icon">
              <BsTwitterX className="h-4 w-4" />
              <span className="sr-only">X</span>
            </Button>
          </Link>
          <Link href="mailto:elshaterm247@gmail.com">
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
