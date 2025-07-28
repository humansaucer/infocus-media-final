"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TabletSection() {

  const textRef = useRef(null);
  const iframeRef = useRef(null);
  const mobileTextRef = useRef(null);
  

  

 

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setTimeout(() => {
      setIsHeroLoaded(true);
    }, 1500);
  }

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('loadeddata', handleVideoLoad);
      return () => {
        video.removeEventListener('loadeddata', handleVideoLoad);
      };
    }
  }, []);

  return (
    <div
      
      className="relative w-screen overflow-hidden"
    >
      
      <div 
        className="hidden md:flex lg:hidden min-h-[170vh] h-screen bg-white flex-col justify-center items-center"
      >
        <div className="mt-[-8vh] flex justify-center tablet-text">
          <h1 className="text-[55vw] font-bold text-black rotate-90 leading-none">
            Infocus Media <span className="text-[12vw] align-super">®</span>
          </h1>
        </div>
      </div>

      {/* Mobile Screens */}
      <div 
        className="md:hidden min-h-[357vh] h-screen bg-white flex flex-col justify-center items-center"
      >
        <div className="flex mt-[-6vh] justify-center mobile-text">
          <div className="transform rotate-90 origin-center">
            <h1 className="text-[100vw] font-bold text-black whitespace-nowrap">
              Infocus Media <span className="text-[50vw] align-super">®</span>
            </h1>
          </div>
        </div>
      </div>

      
    </div>
  );
}