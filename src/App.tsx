/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * ============================================================================
 *                    PORTFOLIO CUSTOMIZATION INSTRUCTIONS
 * ============================================================================
 * Welcome to your Premium Video Editing Portfolio Website!
 * 
 * To update what is displayed on your portfolio, check out the options below:
 * 
 * 1. EDIT VIDEOS & FILTERS:
 *    Go to `/src/data.ts` to edit the `portfolioVideos` array of projects.
 *    Each video defines a Title, Type (long/short), Platform (youtube/tiktok),
 *    Niche (documentary/gaming), URL and custom Thumbnail image.
 * 
 * 2. EDIT GLOBAL CAREER METRICS:
 *    Modify the stats strip inside `/src/data.ts` (`portfolioStats`) to update your metrics.
 * 
 * 3. UPDATE PREVIOUS CLIENT SYMBOLS / LOGOS:
 *    Find `workedWithChannels` in `/src/data.ts` to substitute creator names.
 * 
 * 4. ATTACH REVIEW SCREENSHOTS:
 *    Place your review screenshots inside your assets directory (e.g., `/public/reviews/`)
 *    and specify the file path in `clientReviews` -> `screenshotUrl` in `/src/data.ts`.
 * ============================================================================
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Copy, Check, X, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const DiscordIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c1.9-1.4,3.74-2.92,5.5-4.52a75.41,75.41,0,0,0,67,0c1.76,1.6,3.6,3.12,5.5,4.52a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,123.48,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
  </svg>
);

export default function App() {
  const [popupAnchor, setPopupAnchor] = useState<{ x: number; y: number; align: 'top' | 'bottom' } | null>(null);

  const openDiscordModal = (e?: React.MouseEvent) => {
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      const isTop = rect.top > window.innerHeight / 2;
      const x = rect.left + rect.width / 2 + window.scrollX;
      
      // Calculate absolute document vertical coords to follow scroll
      const y = isTop 
        ? rect.top + window.scrollY - 10 
        : rect.bottom + window.scrollY + 10;
        
      setPopupAnchor({ x, y, align: isTop ? 'top' : 'bottom' });
    } else {
      setPopupAnchor({ 
        x: window.innerWidth / 2 + window.scrollX, 
        y: window.innerHeight / 2 + window.scrollY, 
        align: 'bottom' 
      });
    }
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col justify-between selection:bg-youtube selection:text-white relative bg-transparent">
      {/* Dynamic Navigation Bar Header with Contact Action */}
      <Header onDiscordClick={openDiscordModal} />

      {/* Primary Landing Main Content */}
      <main id="main-content" className="flex-grow pt-10">
        {/* Section 1 — Hero & Stats Page with Contact Action */}
        <Hero onDiscordClick={openDiscordModal} />

        {/* Section 2 — Portfolio Work Gallery Filtering */}
        <Portfolio />

        {/* Section 3 — Reviews Showcase and Screen Capture fallbacks */}
        <Reviews />

        {/* Section 3.5 — About Me with workstation PC setup */}
        <About onDiscordClick={openDiscordModal} />
      </main>

      {/* Section 4 — Footer & Quick Hire Banner Links with Contact Action */}
      <Footer onDiscordClick={openDiscordModal} />

      {/* Subtle floating chatbox-shaped popover pointing at the trigger */}
      <AnimatePresence>
        {popupAnchor && (
          <>
            {/* Global transparent click-out backdrop */}
            <div 
              id="popover-click-backdrop"
              className="fixed inset-0 z-40 cursor-default bg-transparent"
              onClick={() => setPopupAnchor(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: popupAnchor.align === 'top' ? 8 : -8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: popupAnchor.align === 'top' ? 8 : -8 }}
              transition={{ type: "spring", damping: 18, stiffness: 350 }}
              style={{ 
                left: `${popupAnchor.x}px`, 
                top: `${popupAnchor.y}px`,
                transform: popupAnchor.align === 'top' ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
              }}
              className="absolute z-50 bg-secondary-dark text-white rounded-xl py-2 px-3.5 shadow-xl border border-white/10 flex items-center gap-2 select-text pointer-events-auto cursor-default shadow-youtube/10"
            >
              {/* Chat-Bubble Triangular Arrow */}
              {popupAnchor.align === 'top' ? (
                <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-secondary-dark border-r border-b border-white/10 rotate-45" />
              ) : (
                <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-secondary-dark border-l border-t border-white/10 rotate-45" />
              )}
              
              <DiscordIcon className="w-4 h-4 text-[#5865F2] shrink-0" />
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-mono font-bold tracking-wide text-xs">clark.vfx</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
