"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from '@/lib/hooks/use-language';

const PixelFolderIcon = () => (
  <svg 
    width="64" 
    height="56" 
    viewBox="0 0 64 56" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-14"
  >
    <rect x="0" y="8" width="64" height="48" className="fill-muted-foreground/10" fill="currentColor" />
    <rect x="0" y="0" width="24" height="8" className="fill-muted-foreground/10" fill="currentColor" />
    <rect x="4" y="12" width="56" height="40" className="fill-muted" fill="currentColor" />
    <rect x="0" y="52" width="64" height="4" className="fill-border" fill="currentColor" />
  </svg>
);

const WorkSection = () => {
  const [activeFolder, setActiveFolder] = React.useState<string | null>(null);
  const { lang } = useLanguage();

  const content = {
    pt: {
      title: "trabalhos:",
      sortLabel: "Nome (A-Z)",
      emptyFolder: "pasta vazia",
      folders: [
        { id: 'logotipos', label: 'logotipos', title: 'LOGOTIPOS' },
        { id: 'key-visuals', label: 'key visuals', title: 'KEY VISUALS' },
        { id: 'landing-pages', label: 'landing pages', title: 'LANDING PAGES' },
      ],
    },
    en: {
      title: "work:",
      sortLabel: "Name (A-Z)",
      emptyFolder: "empty folder",
      folders: [
        { id: 'logotipos', label: 'logos', title: 'LOGOS' },
        { id: 'key-visuals', label: 'key visuals', title: 'KEY VISUALS' },
        { id: 'landing-pages', label: 'landing pages', title: 'LANDING PAGES' },
      ],
    },
    es: {
      title: "trabajos:",
      sortLabel: "Nombre (A-Z)",
      emptyFolder: "carpeta vacía",
      folders: [
        { id: 'logotipos', label: 'logotipos', title: 'LOGOTIPOS' },
        { id: 'key-visuals', label: 'key visuals', title: 'KEY VISUALS' },
        { id: 'landing-pages', label: 'landing pages', title: 'LANDING PAGES' },
      ],
    },
  };

  const t = content[lang];

  const folderItems: Record<string, { id: number; name: string; url: string }[]> = {
    logotipos: [
      { id: 1, name: 'logo-01.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-01_1x-1767026080758.webp?width=8000&height=8000&resize=contain' },
      { id: 2, name: 'logo-02.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-02_1x-1767026080706.webp?width=8000&height=8000&resize=contain' },
      { id: 3, name: 'logo-03.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-03_1x-1767026080822.webp?width=8000&height=8000&resize=contain' },
      { id: 4, name: 'logo-04.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-04_1x-1767026080797.webp?width=8000&height=8000&resize=contain' },
      { id: 5, name: 'logo-05.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-05_1x-1767026080803.webp?width=8000&height=8000&resize=contain' },
      { id: 6, name: 'logo-06.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-06_1x-1767026080760.webp?width=8000&height=8000&resize=contain' },
      { id: 7, name: 'logo-07.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-07_1x-1767026080760.webp?width=8000&height=8000&resize=contain' },
      { id: 8, name: 'logo-08.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-08_1x-1767026080756.webp?width=8000&height=8000&resize=contain' },
      { id: 9, name: 'logo-09.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-09_1x-1767026080772.webp?width=8000&height=8000&resize=contain' },
      { id: 10, name: 'logo-10.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-10_1x-1767026080756.webp?width=8000&height=8000&resize=contain' },
    ],
      'key-visuals': [
        { id: 1, name: 'kv-01.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-01_1x-1767056710656.webp?width=8000&height=8000&resize=contain' },
        { id: 2, name: 'kv-02.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-02_1x-1767056710663.webp?width=8000&height=8000&resize=contain' },
        { id: 3, name: 'kv-03.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-03_1x-1767056710555.webp?width=8000&height=8000&resize=contain' },
        { id: 4, name: 'kv-04.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-04_1x-1767056710453.webp?width=8000&height=8000&resize=contain' },
        { id: 5, name: 'kv-05.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-05_1x-1767056710466.webp?width=8000&height=8000&resize=contain' },
        { id: 6, name: 'kv-06.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-06_1x-1767056710488.webp?width=8000&height=8000&resize=contain' },
        { id: 7, name: 'kv-07.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-07_1x-1767056710553.webp?width=8000&height=8000&resize=contain' },
        { id: 8, name: 'kv-08.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-08_1x-1767056710453.webp?width=8000&height=8000&resize=contain' },
        { id: 9, name: 'kv-09.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-09_1x-1767056710455.webp?width=8000&height=8000&resize=contain' },
        { id: 10, name: 'kv-10.webp', url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/kv-10_1x-1767056710454.webp?width=8000&height=8000&resize=contain' },
      ],
    'landing-pages': [],
  };

  const handleFolderClick = (id: string) => {
    setActiveFolder(id);
  };

  const currentFolder = t.folders.find(f => f.id === activeFolder);
  const currentItems = activeFolder ? folderItems[activeFolder] || [] : [];

  return (
    <section className="space-y-3 pt-2 w-full">
      <h2 className="font-bold text-muted-foreground text-[14px] leading-[1.25rem] lowercase">
        {t.title}
      </h2>
      <div className="flex justify-between w-full sm:w-[268px]">
        {t.folders.map((folder) => (
          <div 
            key={folder.id} 
            onClick={() => handleFolderClick(folder.id)}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
          >
            <div className={`transition-transform duration-200 ${activeFolder === folder.id ? '-translate-y-1' : 'group-hover:-translate-y-0.5'} transform-gpu`}>
              <PixelFolderIcon />
            </div>
            <span className={`text-[9px] font-medium tracking-tight transition-colors duration-200 ${activeFolder === folder.id ? 'text-foreground font-bold' : 'text-muted-foreground group-hover:text-foreground'}`}>
              {folder.label}
            </span>
          </div>
        ))}
      </div>

      <Dialog open={!!activeFolder} onOpenChange={(open) => !open && setActiveFolder(null)}>
        <DialogContent 
          showCloseButton={false}
          className="max-w-2xl p-0 overflow-hidden border border-border bg-background shadow-2xl gap-0 rounded-none"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <DialogTitle className="text-[14px] font-bold text-foreground tracking-wider uppercase">
                {currentFolder?.title || currentFolder?.label}
              </DialogTitle>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-none bg-muted border border-border text-[11px] text-muted-foreground font-medium cursor-pointer hover:bg-muted/80 transition-colors">
                  {t.sortLabel}
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <button 
                  onClick={() => setActiveFolder(null)}
                  className="p-1.5 rounded-none bg-muted border border-border text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-8 overflow-y-auto max-h-[70vh]">
              {currentItems.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {currentItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-2 group"
                    >
                        <div className={`relative ${activeFolder === 'key-visuals' ? 'aspect-video' : 'aspect-square'} w-full rounded-none overflow-hidden bg-muted border border-border transition-transform duration-300 group-hover:scale-[1.02] shadow-lg`}>
                        <Image
                          src={item.url}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground font-medium tracking-tight truncate group-hover:text-foreground transition-colors">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="text-[11px] text-muted-foreground italic uppercase tracking-widest opacity-50">
                    {t.emptyFolder}
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkSection;
