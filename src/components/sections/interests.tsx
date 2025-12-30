"use client";

import React from 'react';
import { useLanguage } from '@/lib/hooks/use-language';

const InterestsSection = () => {
  const { lang } = useLanguage();

  const content = {
    pt: {
      title: "interesses e obsessões atuais:",
      items: [
        { text: "- música" },
        { text: "- carry (mochilas, pouches, edc, etc)" },
        { text: "- bom uso de inteligência artificial" },
        { text: "- tecnologia criativa" },
        { text: "- ricoh griii street edition" },
        { text: "- pluribus" },
        { text: "- olivia dean" },
        { text: "- danger testing", url: "https://www.dangertesting.com/" },
        { text: "- kiroku mail", url: "https://kirokustudio.co.uk/kiroku-mail/" },
        { text: "- cool supply", url: "https://www.cool-supply.com/" },
      ],
    },
    en: {
      title: "interests and current obsessions:",
      items: [
        { text: "- music" },
        { text: "- carry (backpacks, pouches, edc, etc)" },
        { text: "- good use of artificial intelligence" },
        { text: "- creative technology" },
        { text: "- ricoh griii street edition" },
        { text: "- pluribus" },
        { text: "- olivia dean" },
        { text: "- danger testing", url: "https://www.dangertesting.com/" },
        { text: "- kiroku mail", url: "https://kirokustudio.co.uk/kiroku-mail/" },
        { text: "- cool supply", url: "https://www.cool-supply.com/" },
      ],
    },
    es: {
      title: "intereses y obsesiones actuales:",
      items: [
        { text: "- música" },
        { text: "- carry (mochilas, estuches, edc, etc)" },
        { text: "- buen uso de la inteligencia artificial" },
        { text: "- tecnología creativa" },
        { text: "- ricoh griii street edition" },
        { text: "- pluribus" },
        { text: "- olivia dean" },
        { text: "- danger testing", url: "https://www.dangertesting.com/" },
        { text: "- kiroku mail", url: "https://kirokustudio.co.uk/kiroku-mail/" },
        { text: "- cool supply", url: "https://www.cool-supply.com/" },
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="space-y-2 pt-2">
      <p className="font-bold text-muted-foreground text-[14px]">{t.title}</p>
      <ul className="text-muted-foreground space-y-1 text-[14px] leading-normal list-none p-0 m-0">
        {t.items.map((item, index) => (
          <li key={index} className="m-0">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-1 decoration-muted-foreground hover:text-foreground transition-colors"
              >
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterestsSection;
