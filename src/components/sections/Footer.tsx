import React from 'react';

const PixelMailIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    className="w-4 h-4 text-[#fbbf24]"
  >
    <rect x="0" y="2" width="16" height="12" />
    <rect x="1" y="3" width="14" height="10" fill="currentColor" opacity="0.1" />
    <rect x="2" y="4" width="2" height="2" fill="#09090b" />
    <rect x="4" y="6" width="2" height="2" fill="#09090b" />
    <rect x="7" y="8" width="2" height="2" fill="#09090b" />
    <rect x="10" y="6" width="2" height="2" fill="#09090b" />
    <rect x="12" y="4" width="2" height="2" fill="#09090b" />
  </svg>
);

const PixelXIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="2" y="2" width="2" height="2" />
    <rect x="4" y="4" width="2" height="2" />
    <rect x="7" y="7" width="2" height="2" />
    <rect x="10" y="10" width="2" height="2" />
    <rect x="12" y="12" width="2" height="2" />
    <rect x="12" y="2" width="2" height="2" />
    <rect x="10" y="4" width="2" height="2" />
    <rect x="4" y="10" width="2" height="2" />
    <rect x="2" y="12" width="2" height="2" />
  </svg>
);

const PixelInstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="2" y="2" width="12" height="2" />
    <rect x="2" y="4" width="2" height="8" />
    <rect x="12" y="4" width="2" height="8" />
    <rect x="2" y="12" width="12" height="2" />
    <rect x="11" y="3" width="2" height="2" />
    <rect x="5" y="7" width="6" height="2" />
    <rect x="7" y="5" width="2" height="6" />
  </svg>
);

const PixelKofiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <rect x="2" y="2" width="8" height="2" />
    <rect x="2" y="4" width="2" height="8" />
    <rect x="10" y="4" width="2" height="6" />
    <rect x="4" y="12" width="6" height="2" />
    <rect x="12" y="4" width="2" height="4" />
    <rect x="11" y="4" width="1" height="1" />
    <rect x="11" y="7" width="1" height="1" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="space-y-3 pt-2">
      {/* Availability Status */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-[#22c55e] animate-pulse font-medium text-[16px]">
          disponível para novos projetos
        </span>
      </div>

      {/* Email Link */}
      <div className="block">
        <a 
          href="mailto:contato@alexmartins.work" 
          className="inline-flex items-center gap-2 text-white hover:opacity-70 transition-opacity no-underline"
        >
          <PixelMailIcon />
          <span className="text-[16px] text-[#fbbf24] underline underline-offset-2">get in touch</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-3 pt-1">
        <a 
          href="https://x.com/janinaparker_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#a1a1aa] hover:text-white transition-colors" 
          aria-label="X (Twitter)"
        >
          <div className="w-4 h-4">
            <PixelXIcon />
          </div>
        </a>
        <a 
          href="https://www.instagram.com/1martinsalex/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#a1a1aa] hover:text-white transition-colors" 
          aria-label="Instagram"
        >
          <div className="w-4 h-4">
            <PixelInstagramIcon />
          </div>
        </a>
        <a 
          href="https://ko-fi.com/janinaparker" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#a1a1aa] hover:text-white transition-colors" 
          aria-label="Ko-fi"
        >
          <div className="w-4 h-4">
            <PixelKofiIcon />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;