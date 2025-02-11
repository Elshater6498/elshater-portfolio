"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { Home, User, Briefcase, BookOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const links = [
  { href: "/", label: "nav.home", icon: Home },
  { href: "/about", label: "nav.about", icon: User },
  { href: "/projects", label: "nav.projects", icon: Briefcase },
  { href: "/blog", label: "nav.blog", icon: BookOpen },
  { href: "/contact", label: "nav.contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 z-50 w-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto max-w-2xl m-5 rounded-xl">
      <div className="flex h-14 items-center px-4">
        <div className="flex flex-1 items-center justify-between">
          <nav className="flex items-center gap-5 text-sm font-medium">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative flex items-center gap-2 transition-colors hover:text-foreground/80",
                    isActive ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  <Icon className="h-6 w-6" />
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute -bottom-[1.5rem] left-0 right-0 h-0.5 bg-foreground"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
