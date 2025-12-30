"use client";

import React from 'react';
import { useLanguage } from '@/lib/hooks/use-language';

const AboutSection = () => {
  const { lang } = useLanguage();

  const content = {
      pt: {
        title: "um pouco sobre mim:",
        items: [
          "- nasci e cresci no Ceará",
          "- graduando em filosofia",
          "- escritor no ",
          "- fascinado por cinema",
          "- futuro autor de um livro de poesia",
        ],
      },
      en: {
        title: "a bit about me:",
        items: [
          "- born and raised in Ceará",
          "- philosophy undergraduate",
          "- writer at ",
          "- fascinated by cinema",
          "- future author of a poetry book",
        ],
      },
      es: {
        title: "un poco sobre mí:",
        items: [
          "- nací y crecí en Ceará",
          "- estudiante de filosofía",
          "- escritor en ",
          "- fascinado por el cine",
          "- futuro autor de un libro de poesía",
        ],
      },
  };

  const t = content[lang];

  return (
    <div className="space-y-2 pt-2">
      <p className="font-bold text-muted-foreground text-[14px] !whitespace-pre-line">{t.title}

      </p>

      <ul className="text-muted-foreground text-[14px] space-y-1 font-normal">
        <li className="!whitespace-pre-line">{t.items[0]}</li>
        <li className="!whitespace-pre-line">{t.items[1]}</li>
        <li>
          {t.items[2]}
          <a
            href="https://alexmartins.work"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            argoblog
          </a>
        </li>
        <li>{t.items[3]}</li>
        <li>{t.items[4]}</li>
      </ul>
    </div>
  );
};

export default AboutSection;
