/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

interface AboutProps {
  onDiscordClick: () => void;
}

const DiscordIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c1.9-1.4,3.74-2.92,5.5-4.52a75.41,75.41,0,0,0,67,0c1.76,1.6,3.6,3.12,5.5,4.52a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,123.48,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
  </svg>
);

export default function About({ onDiscordClick }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-transparent scroll-mt-20 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <ScrollFadeIn delay={0}>
          <div className="text-center w-full max-w-4xl mx-auto mb-16 relative px-4 flex flex-col items-center justify-center">
            <span className="relative z-10 text-[10.5px] font-mono font-bold text-youtube tracking-widest uppercase mb-3.5 select-none md:scale-105">
              Get to know me
            </span>
            <h2 id="about-title" className="relative z-10 px-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary-dark tracking-tight leading-none cursor-default select-none">
              About Me
            </h2>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Workstation PC Setup Image Column (Left-positioned on desktop) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <ScrollFadeIn delay={150} className="w-full max-w-[440px]">
              <div className="relative group/setup z-10">
                {/* Background decorative solid offset grid border */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-youtube/20 to-secondary-dark/10 rounded-2xl blur-lg opacity-60 group-hover/setup:opacity-90 transition-opacity duration-500 pointer-events-none" />
                
                {/* Image card wrapper */}
                <div className="relative bg-white p-3 rounded-2xl border border-gray-150/80 shadow-md overflow-hidden transform group-hover/setup:scale-[1.015] transition-all duration-300">
                  <div className="rounded-xl overflow-hidden aspect-[4/5] bg-gray-100 relative">
                    <img
                      id="about-setup-image"
                      src="https://i.postimg.cc/fby54jt2/setup1.jpg"
                      alt="Clark's PC Setup Workstation"
                      className="w-full h-full object-cover group-hover/setup:scale-[1.03] transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Live indicator or workspace overlay details */}
                    <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 select-none pointer-events-none">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-mono text-white/95 uppercase font-bold tracking-wider">Editor Desk</span>
                    </div>
                  </div>

                  {/* Tiny metadata rows below image */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-youtube" />
                      <span>Remote Editor Studio</span>
                    </div>
                    <span>4k UHD Rig</span>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Biography Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <ScrollFadeIn delay={300}>
              <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                
                {/* Bold intro paragraph */}
                <p className="text-lg sm:text-xl font-extrabold text-secondary-dark leading-snug tracking-tight">
                  Hey, I’m Clark — a video editor with <span className="text-youtube">4 years of experience</span> working with creators and channels totaling over <span className="border-b-2 border-youtube/30">5 million subscribers</span> and generating more than <span className="border-b-2 border-youtube/30">450 million views</span>.
                </p>

                {/* Additional detailed paragraphs */}
                <p>
                  Originally from Massachusetts, USA, I’m currently living in Brazil and working with clients worldwide. I focus on creating high-retention, unique editing styles tailored specifically to each creator instead of using the same formula on every project.
                </p>

                <p>
                  I’m a strong long-term partner for creators looking for consistency, fast communication, and someone who genuinely cares about improving content performance over time.
                </p>

                {/* Simplified Discord contact indicator */}
                <div className="pt-6 border-t border-gray-150 mt-8">
                  <div className="inline-flex items-center gap-2.5 bg-[#5865F2]/10 text-[#5865F2] px-4 py-2.5 rounded-xl border border-[#5865F2]/10">
                    <DiscordIcon className="w-5 h-5 shrink-0" />
                    <span className="font-mono font-bold tracking-wide text-sm">clark.vfx</span>
                  </div>
                </div>

              </div>
            </ScrollFadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
