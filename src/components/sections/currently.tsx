"use client";

import React from 'react';
import { useLanguage } from '@/lib/hooks/use-language';

const Currently = () => {
  const { lang } = useLanguage();

  const content = {
    pt: {
      title: "atualmente:",
      items: [
        "por diversão - admin e redes sociais na card konbini",
        "meio período - appstar e líder de comunidade na wabi",
        "aprendendo rive e framer",
      ],
    },
    en: {
      title: "currently:",
      items: [
        "for funsies - admin and socials at card konbini",
        "part time - appstar and community lead at wabi",
        "learning rive and framer",
      ],
    },
    es: {
      title: "actualmente:",
      items: [
        "por diversión - admin y redes sociales en card konbini",
        "medio tiempo - appstar y líder de comunidad en wabi",
        "aprendiendo rive y framer",
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="space-y-2 pt-2">
      <p className="font-bold text-muted-foreground text-[14px]">{t.title}</p>
      <ul className="text-muted-foreground space-y-1 text-[14px] leading-normal list-none p-0 m-0">
        {t.items.map((item, index) => (
          <li key={index} className="m-0">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Currently;
