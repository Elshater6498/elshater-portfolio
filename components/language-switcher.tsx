"use client";

import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "./language-provider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage}>
      <Languages className="h-5 w-5" />
    </Button>
  );
}
