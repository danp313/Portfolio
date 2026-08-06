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

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Copy, Check, X, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
// import Reviews from './components/Reviews'; // Hidden temporarily
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
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode as requested
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const [popupState, setPopupState] = useState<{
    x: number;
    y: number;
    align: 'top' | 'bottom';
    copied: boolean;
  } | null>(null);

  // Automatically dismiss popup on scroll
  useEffect(() => {
    if (!popupState) return;

    const handleScroll = () => {
      setPopupState(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [popupState]);

  const openDiscordModal = (e?: React.MouseEvent) => {
    if (e && e.currentTarget) {
      const targetEl = e.currentTarget as HTMLElement;
      const rect = targetEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      
      // Rule: Popup appears above the button clicked, ONLY exception is navbar button (inside header)
      const isNavbar = !!targetEl.closest('header');
      const align: 'top' | 'bottom' = isNavbar ? 'bottom' : 'top';

      // 12px clean gap between popup and button
      const y = align === 'top' ? rect.top - 12 : rect.bottom + 12;

      setPopupState({ x: centerX, y, align, copied: false });
    } else {
      setPopupState({ 
        x: window.innerWidth / 2, 
        y: 100, 
        align: 'bottom',
        copied: false
      });
    }
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('@atlanticmedia');
    if (popupState) {
      setPopupState({ ...popupState, copied: true });
      setTimeout(() => {
        setPopupState((prev) => prev ? { ...prev, copied: false } : null);
      }, 2000);
    }
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col justify-between selection:bg-youtube selection:text-white relative bg-transparent">
      {/* Background Grid Pattern Overlay */}
      <div className="grid-bg-overlay" aria-hidden="true" />

      {/* Dynamic Navigation Bar Header with Contact Action */}
      <Header 
        onDiscordClick={openDiscordModal} 
        darkMode={darkMode} 
        onToggleDarkMode={toggleDarkMode} 
      />

      {/* Primary Landing Main Content */}
      <main id="main-content" className="flex-grow pt-10">
        {/* Section 1 — Hero & Stats Page with Contact Action */}
        <Hero onDiscordClick={openDiscordModal} />

        {/* Section 2 — Portfolio Work Gallery Filtering */}
        <Portfolio />

        {/* Section 3 — Reviews Showcase (commented out for future use) */}
        {/* <Reviews /> */}

        {/* Section 3.5 — About Me with workstation PC setup */}
        <About onDiscordClick={openDiscordModal} />
      </main>

      {/* Section 4 — Footer & Quick Hire Banner Links with Contact Action */}
      <Footer onDiscordClick={openDiscordModal} />

      {/* Popover centered above or below button with directional arrow indicator */}
      <AnimatePresence>
        {popupState && (
          <>
            {/* Global transparent click-out backdrop */}
            <div 
              id="popover-click-backdrop"
              className="fixed inset-0 z-40 cursor-default bg-transparent"
              onClick={() => setPopupState(null)}
            />
            
            {/* Positioning Wrapper Anchor */}
            <div
              style={{ 
                position: 'fixed',
                left: `${popupState.x}px`, 
                top: `${popupState.y}px`,
                transform: popupState.align === 'top' ? 'translate(-50%, -100%)' : 'translate(-50%, 0%)',
              }}
              className="z-50 pointer-events-none"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: popupState.align === 'top' ? 6 : -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: popupState.align === 'top' ? 6 : -6 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                onClick={handleCopyDiscord}
                className="pointer-events-auto bg-secondary-dark text-white rounded-xl py-2.5 px-4 shadow-2xl border border-white/10 flex items-center justify-between gap-3 select-none cursor-pointer hover:border-white/20 transition-colors shadow-youtube/10 group min-w-[230px] relative"
              >
                {/* Chat-Bubble Triangular Arrow pointing at button */}
                {popupState.align === 'top' ? (
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-secondary-dark border-r border-b border-white/10 rotate-45" />
                ) : (
                  <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-secondary-dark border-l border-t border-white/10 rotate-45" />
                )}
                
                <div className="flex items-center gap-2.5">
                  <DiscordIcon className="w-4.5 h-4.5 text-[#5865F2] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono font-bold tracking-wide text-xs sm:text-sm text-white">@atlanticmedia</span>
                </div>

                <span className="w-[72px] justify-center text-[10px] font-mono text-gray-300 bg-white/10 py-1 rounded flex items-center gap-1 group-hover:bg-white/20 transition-colors shrink-0">
                  {popupState.copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-gray-300" />
                      <span>Copy</span>
                    </>
                  )}
                </span>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
