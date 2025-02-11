"use client";

import { createContext, useContext, useEffect, useState } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

// Initialize i18next
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("@/locales/en.json"),
    },
    ar: {
      translation: require("@/locales/ar.json"),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
    i18next.changeLanguage(savedLang);
    document.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
