/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { workedWithChannels, portfolioStats } from '../data';
import { Play, TrendingUp, Users, Calendar, Heart, ArrowDown } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

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

interface HeroProps {
  onDiscordClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Hero({ onDiscordClick }: HeroProps) {
  const tickerRef = React.useRef<HTMLDivElement>(null);

  // Smooth deceleration/acceleration of WAAPI playbackRate for realistic braking physics
  React.useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;

    let activeInterval: any = null;

    const fadePlaybackRate = (target: number, duration: number) => {
      if (activeInterval) clearInterval(activeInterval);

      const animations = el.getAnimations();
      if (animations.length === 0) return;

      const animation = animations[0];
      const startRate = animation.playbackRate ?? 1;
      const startTime = performance.now();

      activeInterval = setInterval(() => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Braking physics: ease-out cubic curve (slowing down smoothly immediately starts)
        const ease = target === 0 
          ? 1 - Math.pow(1 - progress, 3) // easeOutCubic deceleration
          : progress; // linear acceleration back to speed

        const currentRate = startRate + (target - startRate) * ease;
        animation.playbackRate = currentRate;

        if (progress >= 1) {
          clearInterval(activeInterval);
        }
      }, 16); // Smooth 60 FPS transitions
    };

    const handleMouseEnter = () => {
      fadePlaybackRate(0, 450); // 450ms deceleration brake
    };

    const handleMouseLeave = () => {
      fadePlaybackRate(1, 650); // 650ms recovery to full speed
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (activeInterval) clearInterval(activeInterval);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Mapping icons for stats list for extra visual polish
  const getIconForStat = (index: number) => {
    switch (index) {
      case 0: return <TrendingUp className="w-5 h-5 text-youtube/80" />;
      case 1: return <Users className="w-5 h-5 text-youtube/80" />;
      case 2: return <Calendar className="w-5 h-5 text-youtube/80" />;
      case 3: return <Heart className="w-5 h-5 text-youtube/80" />;
      default: return <Play className="w-5 h-5 text-youtube/80" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 md:px-8 py-20 overflow-hidden cursor-default select-none">
      
      <div className="container max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Subtle Category Badge Tag */}
        <ScrollFadeIn delay={0}>
          <div id="hero-badge" className="inline-flex items-center gap-2 bg-secondary-dark/5 border border-secondary-dark/10 px-4 py-1.5 rounded-full mb-6 cursor-default select-none">
            <span className="w-2 h-2 bg-youtube rounded-full animate-ping" />
            <span className="text-xs font-mono tracking-wider text-secondary-dark uppercase font-semibold">Available for Freelance & Contract</span>
          </div>
        </ScrollFadeIn>

        {/* Display Heading */}
        <ScrollFadeIn delay={150}>
          <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-secondary-dark leading-tight cursor-default select-none">
            <span className="text-[#FE0500] relative hover:scale-[1.03] transition-transform duration-500 ease-out inline-block cursor-default select-none">
              Video Editing
            </span>{' '}
            <span className="font-light text-gray-400">&amp;</span>
            <br />
            <span className="text-youtube relative hover:scale-[1.03] transition-transform duration-500 ease-out inline-block cursor-default select-none">
              Thumbnail Design
            </span>
          </h1>
        </ScrollFadeIn>

        {/* Subheading Tagline */}
        <ScrollFadeIn delay={300}>
          <p id="hero-subtitle" className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl font-light leading-relaxed cursor-default select-none">
            Helping creators and brands scale their reach with high-retention video content and high-CTR custom thumbnail design.
          </p>
        </ScrollFadeIn>

        {/* Call to Actions */}
        <ScrollFadeIn delay={450}>
          <div id="hero-cta" className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              id="cta-work"
              href="#portfolio"
              className="px-8 py-4 bg-secondary-dark hover:bg-youtube text-white font-medium rounded-lg shadow-lg hover:shadow-youtube/20 transition-all duration-300 flex items-center gap-2.5 group cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform duration-300" />
              View My Work
            </a>
            <button
              id="cta-contact"
              onClick={(e) => {
                e.preventDefault();
                onDiscordClick(e);
              }}
              className="px-8 py-4 bg-white/85 hover:bg-white text-secondary-dark border border-gray-200 hover:border-gray-300 font-medium rounded-lg shadow-sm transition-all duration-300 flex items-center gap-2.5 group cursor-pointer"
            >
              <DiscordIcon className="w-5 h-5 text-[#5865F2] group-hover:scale-110 transition-transform duration-300" />
              Connect on Discord
            </button>
          </div>
        </ScrollFadeIn>

        {/* Stats Strip Component */}
        <ScrollFadeIn delay={600} className="w-full mt-20">
          <div id="hero-stats" className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-sm border border-white">
            {portfolioStats.map((stat, idx) => (
              <div
                id={`stat-card-${idx}`}
                key={stat.label}
                className="flex flex-col items-center text-center p-3 sm:p-4 hover:scale-[1.04] transition-transform duration-500 ease-out cursor-default select-none"
              >
                <div className="p-2.5 bg-youtube/5 rounded-xl mb-3">
                  {getIconForStat(idx)}
                </div>
                <span id={`stat-val-${idx}`} className="text-3xl sm:text-4xl font-extrabold text-youtube tracking-tight cursor-default select-none">
                  {stat.value}
                </span>
                <span id={`stat-label-${idx}`} className="mt-1.5 text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider cursor-default select-none">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Logo Ticker / Channels Carousel segment */}
        <ScrollFadeIn delay={750} className="w-full mt-24">
          <div className="w-full flex flex-col items-center">
            <span id="ticker-label" className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest mb-6">
              Channels I've Worked With
            </span>
            
            {/* Ticker Outer Container with absolute masks for smooth fading edges */}
            <div className="relative w-full overflow-hidden py-4 bg-white/40 backdrop-blur-sm rounded-xl border border-gray-100/50">
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
              
              {/* Ticker Flex container */}
              <div 
                id="logo-ticker-flow" 
                ref={tickerRef} 
                className="flex w-max items-center animate-ticker"
              >
                {/* Render two identical blocks for seamless infinite loop width calculation */}
                <div className="flex gap-8 md:gap-14 items-center pr-8 md:pr-14 flex-shrink-0">
                  {workedWithChannels.map((channel, index) => (
                    <a
                      key={`${channel.id}-block1-${index}`}
                      href={channel.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-28 md:w-36 flex flex-col items-center justify-center p-2 rounded-xl hover:bg-white/50 transition-all duration-300 pointer-events-auto group cursor-pointer"
                    >
                      <div className="relative p-[2px] rounded-full border-2 border-youtube/20 group-hover:border-youtube transition-colors duration-500 shadow-sm bg-white">
                        <img 
                          src={channel.avatarUrl} 
                          alt={channel.name} 
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-50"
                        /> 
                      </div>
                      <span className="font-sans font-bold text-xs sm:text-xs md:text-sm text-secondary-dark group-hover:text-youtube transition-colors mt-2 text-center truncate w-full">
                        {channel.name}
                      </span>
                      {channel.subscriberCount && (
                        <span className="text-[10px] font-mono text-gray-400 mt-0.5 text-center">
                          {channel.subscriberCount}
                        </span>
                      )}
                    </a>
                  ))}
                </div>

                <div className="flex gap-8 md:gap-14 items-center pr-8 md:pr-14 flex-shrink-0 pointer-events-auto">
                  {workedWithChannels.map((channel, index) => (
                    <a
                      key={`${channel.id}-block2-${index}`}
                      href={channel.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-28 md:w-36 flex flex-col items-center justify-center p-2 rounded-xl hover:bg-white/50 transition-all duration-300 pointer-events-auto group cursor-pointer"
                    >
                      <div className="relative p-[2px] rounded-full border-2 border-youtube/20 group-hover:border-youtube transition-colors duration-500 shadow-sm bg-white">
                        <img 
                          src={channel.avatarUrl} 
                          alt={channel.name} 
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-50"
                        /> 
                      </div>
                      <span className="font-sans font-bold text-xs sm:text-xs md:text-sm text-secondary-dark group-hover:text-youtube transition-colors mt-2 text-center truncate w-full">
                        {channel.name}
                      </span>
                      {channel.subscriberCount && (
                        <span className="text-[10px] font-mono text-gray-400 mt-0.5 text-center">
                          {channel.subscriberCount}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
