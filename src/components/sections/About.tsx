import React from 'react';

const About = () => {
  return (
    <div className="space-y-8 w-full max-w-xl">
      {/* About Me Section */}
      <div className="space-y-2 pt-2">
        <p className="font-bold text-[#a1a1aa]">sobre mim:</p>
        <ul className="text-[#a1a1aa] space-y-1">
          <li>- nasci e cresci no Ceará</li>
          <li>- moved to sydney because of love</li>
          <li>- teste with my daughter</li>
          <li>- dropped out of college (studied information systems) to pursue graphic design</li>
          <li>
            - i love trying out new things (currently:{' '}
            <span className="relative inline-block">
              <a 
                href="https://sunflower.me/" 
                className="underline underline-offset-2 decoration-1 decoration-[#a1a1aa] hover:opacity-80 transition-opacity"
              >
                sunflower
              </a>
            </span>,{' '}
            <span className="relative inline-block">
              <a 
                href="https://poke.com/" 
                className="underline underline-offset-2 decoration-1 decoration-[#a1a1aa] hover:opacity-80 transition-opacity"
              >
                poke
              </a>
            </span>,{' '}
            <span className="relative inline-block">
              <a 
                href="https://wabi.ai/" 
                className="underline underline-offset-2 decoration-1 decoration-[#a1a1aa] hover:opacity-80 transition-opacity"
              >
                wabi
              </a>
            </span>,{' '}
            <span className="relative inline-block">
              <a 
                href="https://geniegetsme.com/" 
                className="underline underline-offset-2 decoration-1 decoration-[#a1a1aa] hover:opacity-80 transition-opacity"
              >
                genie
              </a>
            </span>, and{' '}
            <span className="relative inline-block">
              <a 
                href="https://pickle.com/" 
                className="underline underline-offset-2 decoration-1 decoration-[#a1a1aa] hover:opacity-80 transition-opacity"
              >
                pickle
              </a>
            </span>)
          </li>
        </ul>
      </div>

      {/* Currently Section */}
      <div className="space-y-2 pt-2">
        <p className="font-bold text-[#a1a1aa]">currently:</p>
        <ul className="text-[#a1a1aa] space-y-1">
          <li>for funsies - admin and socials at card konbini</li>
          <li>part time - appstar and community lead at wabi</li>
        </ul>
      </div>

      {/* Work Section (Folders) */}
      <div className="space-y-3 pt-2 w-full">
        <p className="font-bold text-[#a1a1aa]">work:</p>
        <div className="flex justify-between w-full sm:w-[268px]">
          <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
            <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-14">
              <rect x="6" y="16" width="52" height="34" rx="2" fill="#27272a" />
              <rect x="6" y="12" width="20" height="8" rx="2" fill="#27272a" />
              <rect x="8" y="18" width="48" height="30" rx="1" fill="#ffffff" />
              <rect x="60" y="24" width="2" height="6" fill="#71717a" />
            </svg>
            <span className="text-[9px] font-medium text-zinc-600">wabi mini-apps</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
            <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-14">
              <rect x="6" y="16" width="52" height="34" rx="2" fill="#27272a" />
              <rect x="6" y="12" width="20" height="8" rx="2" fill="#27272a" />
              <rect x="8" y="18" width="48" height="30" rx="1" fill="#ffffff" />
              <rect x="60" y="24" width="2" height="6" fill="#71717a" />
            </svg>
            <span className="text-[9px] font-medium text-zinc-600">photos &amp; graphics</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
            <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-14">
              <rect x="6" y="16" width="52" height="34" rx="2" fill="#27272a" />
              <rect x="6" y="12" width="20" height="8" rx="2" fill="#27272a" />
              <rect x="8" y="18" width="48" height="30" rx="1" fill="#ffffff" />
              <rect x="60" y="24" width="2" height="6" fill="#71717a" />
            </svg>
            <span className="text-[9px] font-medium text-zinc-600">videos</span>
          </div>
        </div>
      </div>

      {/* Interests Section */}
      <div className="space-y-2 pt-2">
        <p className="font-bold text-[#a1a1aa]">interests and current obsessions:</p>
        <ul className="text-[#a1a1aa] space-y-1">
          <li>- music</li>
          <li>- carry (backpacks, pouches, edc, etc)</li>
          <li>- good use of artificial intelligence</li>
          <li>- creative technology</li>
          <li>- ricoh griii street edition</li>
          <li>- pluribus</li>
          <li>- olivia dean</li>
          <li>
            - <span className="inline-flex items-center gap-1">
              <a href="https://www.dangertesting.com/" className="underline underline-offset-2 decoration-1 decoration-[#a1a1aa] hover:opacity-80 transition-opacity">
                danger testing
              </a>
            </span>
          </li>
          <li>
            - <span className="inline-flex items-center gap-1">
              <a href="https://kirokustudio.co.uk/kiroku-mail/" className="underline underline-offset-2 decoration-1 decoration-[#a1a1aa] hover:opacity-80 transition-opacity">
                kiroku mail
              </a>
            </span>
          </li>
          <li>
            - <span className="inline-flex items-center gap-1">
              <a href="https://www.cool-supply.com/" className="underline underline-offset-2 decoration-1 decoration-[#a1a1aa] hover:opacity-80 transition-opacity">
                cool supply
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;