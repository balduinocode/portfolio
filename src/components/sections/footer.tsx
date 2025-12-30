"use client";

import React from 'react';
import { useLanguage } from '@/lib/hooks/use-language';

const Footer = () => {
  const { lang } = useLanguage();

  const content = {
    pt: {
      status: "disponível para novos projetos",
      contact: "entre em contato",
    },
    en: {
      status: "available for new projects",
      contact: "get in touch",
    },
    es: {
      status: "disponible para nuevos proyectos",
      contact: "contáctame",
    },
  };

  const t = content[lang];

  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-status-green animate-pulse font-medium text-[14px] !whitespace-pre-line">{t.status}
        </span>
      </div>

      <a
        href="mailto:contato@alexmartins.work"
        className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity text-[14px] text-foreground">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="currentColor"
          className="text-yellow-400">
          <rect width="16" height="2" y="0" />
          <rect width="16" height="2" y="10" />
          <rect width="2" height="10" x="0" y="2" />
          <rect width="2" height="10" x="14" y="2" />
          <rect width="2" height="2" x="2" y="2" />
          <rect width="2" height="2" x="12" y="2" />
          <rect width="2" height="2" x="4" y="4" />
          <rect width="2" height="2" x="10" y="4" />
          <rect width="4" height="2" x="6" y="6" />
        </svg>
        <span className="!whitespace-pre-line">{t.contact}</span>
      </a>

      <div className="flex gap-3 pt-1">
        <a
          href="https://x.com/janinaparker_"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="X (Twitter)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="0" y="0" width="2" height="2" />
            <rect x="14" y="0" width="2" height="2" />
            <rect x="2" y="2" width="2" height="2" />
            <rect x="12" y="2" width="2" height="2" />
            <rect x="4" y="4" width="2" height="2" />
            <rect x="10" y="4" width="2" height="2" />
            <rect x="6" y="6" width="4" height="4" />
            <rect x="4" y="10" width="2" height="2" />
            <rect x="10" y="10" width="2" height="2" />
            <rect x="2" y="12" width="2" height="2" />
            <rect x="12" y="12" width="2" height="2" />
            <rect x="0" y="14" width="2" height="2" />
            <rect x="14" y="14" width="2" height="2" />
          </svg>
        </a>
        
        <a
          href="https://www.instagram.com/janinaparker_/"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="2" y="0" width="12" height="2" />
            <rect x="0" y="2" width="2" height="12" />
            <rect x="14" y="2" width="2" height="12" />
            <rect x="2" y="14" width="12" height="2" />
            <rect x="11" y="3" width="2" height="2" />
            <rect x="5" y="5" width="6" height="2" />
            <rect x="5" y="7" width="2" height="4" />
            <rect x="9" y="7" width="2" height="4" />
            <rect x="7" y="9" width="2" height="2" />
          </svg>
        </a>

        <a
          href="https://ko-fi.com/janinaparker"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Ko-fi">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="0" y="2" width="12" height="2" />
            <rect x="0" y="4" width="2" height="8" />
            <rect x="10" y="4" width="2" height="8" />
            <rect x="2" y="12" width="8" height="2" />
            <rect x="12" y="4" width="4" height="2" />
            <rect x="14" y="6" width="2" height="4" />
            <rect x="12" y="10" width="2" height="2" />
            <rect x="4" y="6" width="2" height="2" />
            <rect x="6" y="8" width="2" height="2" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
