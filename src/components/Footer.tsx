/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, Youtube, Play, ArrowUpRight } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

const DiscordIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c1.9-1.4,3.74-2.92,5.5-4.52a75.41,75.41,0,0,0,67,0c1.76,1.6,3.6,3.12,5.5,4.52a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,123.48,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
  </svg>
);

interface FooterProps {
  onDiscordClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Footer({ onDiscordClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative mt-20 bg-transparent pt-16 pb-8 px-4 md:px-8">
      <div className="container max-w-6xl mx-auto">
        
        {/* Call to action contact prompt */}
        <ScrollFadeIn delay={0}>
          <div className="bg-secondary-dark p-8 sm:p-12 rounded-3xl text-white relative overflow-hidden mb-16 shadow-xl flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark via-secondary-dark to-red-950/20 pointer-events-none" />
            <div className="absolute -right-16 -bottom-16 w-64 h-64 border-8 border-youtube/10 rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-lg text-center md:text-left">
              <span className="text-[10px] font-mono font-bold text-youtube tracking-widest uppercase bg-youtube/15 p-1 px-3.5 rounded-full inline-block mb-3 border border-youtube/10">
                Let's collaborate
              </span>
              <h3 id="footer-cta-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Ready to take your content to the next level?
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Get high retention rates, clean sound design, and custom animations optimized for YouTube and TikTok.
              </p>
            </div>

            <div className="relative z-10 w-full sm:w-auto">
              <button
                id="footer-contact-button"
                onClick={(e) => {
                  e.preventDefault();
                  onDiscordClick(e);
                }}
                className="w-full sm:w-auto py-4 px-8 bg-youtube hover:bg-white text-white hover:text-secondary-dark font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg group cursor-pointer border border-transparent"
              >
                <DiscordIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Connect on Discord
                <ArrowUpRight className="w-4 h-4 text-white/75 group-hover:text-secondary-dark" />
              </button>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Minimal Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-8 mt-4 text-sm text-gray-500">
          
          {/* Brand Logo / Left side */}
          <div className="flex items-center gap-2" id="footer-brand">
            <div className="w-8 h-8 bg-youtube rounded-lg flex items-center justify-center text-white shadow-sm hover:rotate-12 transition-transform">
              <Play className="w-4.5 h-4.5 fill-current translate-x-[1px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-secondary-dark tracking-tight">Clark</span>
              <span className="text-[10px] font-mono text-gray-400">Professional Video Editor</span>
            </div>
          </div>

          {/* Social connections (Only Discord, YouTube, Instagram) */}
          <div className="flex gap-4 items-center" id="footer-socials">
            <button
              onClick={(e) => {
                e.preventDefault();
                onDiscordClick(e);
              }}
              className="p-2 text-gray-400 hover:text-indigo-500 transition-colors rounded-full hover:bg-gray-50 cursor-pointer border-none bg-transparent"
              aria-label="Discord Username"
            >
              <DiscordIcon className="w-4 h-4" />
            </button>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-youtube transition-colors rounded-full hover:bg-gray-55" aria-label="YouTube Channel">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-pink-500 transition-colors rounded-full hover:bg-gray-55" aria-label="Instagram Profile">
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Minimal handles & copyright */}
          <div className="flex flex-col items-center sm:items-end gap-1" id="footer-copyright">
            <span className="font-semibold text-secondary-dark font-mono">
              @clark.vfx
            </span>
            <span className="text-[11px] font-mono text-gray-400">
              © {currentYear} Clark. All rights reserved.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
