import React from 'react';

const AboutMe = () => {
  return (
    <div className="space-y-2 pt-2">
      <p className="font-bold text-[#a1a1aa] leading-normal text-[14px]">
       um pouco sobre mim:
      </p>
      <ul className="text-[#a1a1aa] space-y-1 text-[14px] leading-relaxed">
        <li className="flex items-start">
          <span className="mr-2">-</span>
          <span>nasci e cresci no Ceará</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">-</span>
          <span>graduando em filosofia</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">-</span>
          <span>escritor no <a href="https://www.alexmartins.work" target=blank>argoblog</a></span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">-</span>
          <span>
            dropped out of college (studied information systems) to pursue graphic design
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">-</span>
          <span>
            i love trying out new things (currently:{" "}
            <span className="relative inline-block">
              <a
                href="https://sunflower.me/"
                className="underline underline-offset-2 decoration-1 hover:opacity-70 transition-opacity"
              >
                sunflower
              </a>
            </span>
            ,{" "}
            <span className="relative inline-block">
              <a
                href="https://poke.com/"
                className="underline underline-offset-2 decoration-1 hover:opacity-70 transition-opacity"
              >
                poke
              </a>
            </span>
            ,{" "}
            <span className="relative inline-block">
              <a
                href="https://wabi.ai/"
                className="underline underline-offset-2 decoration-1 hover:opacity-70 transition-opacity"
              >
                wabi
              </a>
            </span>
            ,{" "}
            <span className="relative inline-block">
              <a
                href="https://geniegetsme.com/"
                className="underline underline-offset-2 decoration-1 hover:opacity-70 transition-opacity"
              >
                genie
              </a>
            </span>
            , and{" "}
            <span className="relative inline-block">
              <a
                href="https://pickle.com/"
                className="underline underline-offset-2 decoration-1 hover:opacity-70 transition-opacity"
              >
                pickle
              </a>
            </span>
            )
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;