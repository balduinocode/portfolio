"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/hooks/use-language";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const languages = [
    { value: "pt", label: "PT" },
    { value: "en", label: "EN" },
    { value: "es", label: "ES" },
  ] as const;

  const content = {
    pt: {
      tagline: "eu gosto de ",
      highlight: "criar coisas",
      subline: "direção de arte / programação",
    },
    en: {
      tagline: "i like to ",
      highlight: "create things",
      subline: "art direction / programming",
    },
    es: {
      tagline: "me gusta ",
      highlight: "crear cosas",
      subline: "dirección de arte / programación",
    },
  };

  const currentTheme = mounted ? resolvedTheme : "dark";

  return (
    <header className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="font-black text-[16px] tracking-tight text-foreground leading-tight transition-colors duration-300">
          Alex Martins
        </h1>

        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="relative w-14 h-8 rounded-full transition-all duration-500 ease-in-out focus:outline-none flex items-center px-1 bg-muted hover:bg-muted/90 border border-border/40 shadow-[inset_0_2px_3px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] overflow-visible"
            aria-label="Toggle theme"
          >
            <div
              className={`absolute left-2 transition-all duration-300 ${
                currentTheme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-50"
              } text-amber-500 z-0`}
            >
              <Sun size={14} strokeWidth={2.5} fill="currentColor" />
            </div>
            <div
              className={`absolute right-2 transition-all duration-300 ${
                currentTheme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-50"
              } text-muted-foreground z-0`}
            >
              <Moon size={14} strokeWidth={2.5} fill="currentColor" />
            </div>
            <div
              className={`absolute left-1 w-5 h-5 rounded-full z-10 transition-all duration-300 ease-in-out bg-gradient-to-b from-background to-muted/30 border border-border/40 shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] ${
                currentTheme === "dark" ? "translate-x-0" : "translate-x-7"
              }`}
            />
          </button>

          <div
            className="relative h-8 w-[90px] rounded-full flex items-center px-1 bg-muted border border-border/40 shadow-[inset_0_2px_3px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] select-none overflow-visible"
            data-testid="language-switcher"
          >
            <div className="flex items-center justify-between w-full px-0.5 relative z-20">
              {languages.map((l) => (
                <button
                  key={l.value}
                  onClick={() => setLang(l.value)}
                  className="w-6 h-5 flex items-center justify-center transition-colors duration-300"
                  aria-label={`Switch to ${l.label}`}
                >
                  <span
                    className={`text-[8.5px] font-black transition-colors duration-300 ${
                      lang === l.value ? "text-foreground" : "text-muted-foreground/60"
                    }`}
                  >
                    {l.label}
                  </span>
                </button>
              ))}
            </div>
            <div
              className={`absolute left-1 w-6 h-5 rounded-full z-10 transition-all duration-300 ease-in-out bg-gradient-to-b from-background to-muted/30 border border-border/40 shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] ${
                lang === "pt"
                  ? "translate-x-0"
                  : lang === "en"
                  ? "translate-x-[28px]"
                  : "translate-x-[56px]"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="text-muted-foreground font-bold text-[14px] tracking-wide whitespace-pre-line leading-[1.4] lowercase transition-colors duration-300">
        {content[lang].tagline} <span className="rainbow-text">{content[lang].highlight}</span>
        <br />
        {content[lang].subline}
      </div>
    </header>
  );
}
