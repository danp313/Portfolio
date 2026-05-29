/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { portfolioVideos } from '../data';
import { VideoItem } from '../types';
import { Play, Film, Smartphone, Gamepad, Compass, Trash2, Check, RefreshCw, ChevronDown } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

export default function Portfolio() {
  // State for concurrent AND filters - format is strictly 'short' or 'long'
  const [typeFilter, setTypeFilter] = useState<'long' | 'short'>('short');
  const [nicheFilter, setNicheFilter] = useState<'all' | 'commentary' | 'motivational' | 'fitness' | 'streamers' | 'documentary'>('all');

  // Filter video list based on AND logical grouping
  const filteredVideos = portfolioVideos.filter((video) => {
    const matchesType = video.type === typeFilter;
    const matchesNiche = nicheFilter === 'all' || video.niche === nicheFilter;
    return matchesType && matchesNiche;
  });

  // Helper to reset all filters
  const resetFilters = () => {
    setTypeFilter('short');
    setNicheFilter('all');
  };

  /**
   * Generates a beautiful video timeline editor placeholder thumbnail
   * representing track lines, sound waves, and rendering masks
   * in strict compliance with aspect ratios.
   */
  const renderPlaceholderThumbnail = (video: VideoItem) => {
    const isLongForm = video.type === 'long';
    const isGaming = video.niche === 'gaming';

    return (
      <div
        id={`thumb-wrapper-${video.id}`}
        className="w-full h-full relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex flex-col justify-between p-4 font-mono group-hover:scale-105 transition-transform duration-500"
      >
        {/* Editing Grid overlay */}
        <div className="absolute inset-0 border-[0.5px] border-white/5 pointer-events-none" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[0.5px] bg-white/5 pointer-events-none" />
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[0.5px] bg-white/5 pointer-events-none" />

        {/* Video Editor UI top header */}
        <div className="flex justify-between items-center z-5">
          <div className="flex gap-1 items-center">
            <span className="w-1.5 h-1.5 bg-youtube rounded-full animate-pulse" />
            <span className="text-[9px] text-gray-400 select-none">EDT_REC</span>
          </div>
        </div>

        {/* Waveforms & editing timeline footer element */}
        <div className="w-full flex flex-col gap-1.5 mt-auto z-5 mb-16 sm:mb-20">
          {/* Mock Sound Waveform lines */}
          <div className="flex items-end gap-[2px] h-5 w-full overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
            {Array.from({ length: isLongForm ? 36 : 18 }).map((_, i) => {
              const h = Math.sin(i * 0.4) * 8 + 12 + (Math.random() * 4 - 2);
              return (
                <div
                  key={i}
                  className="flex-1 bg-youtube"
                  style={{ height: `${Math.max(2, h)}px` }}
                />
              );
            })}
          </div>

          <div className="flex justify-between items-center text-[8px] text-gray-500 uppercase">
            <span>LUT: F-LOG</span>
            <span>{isGaming ? '60 FPS' : '24 FPS'}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 bg-transparent scroll-mt-10">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Heading Card - Center Alignment */}
        <ScrollFadeIn delay={0}>
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 id="portfolio-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary-dark tracking-tight leading-none cursor-default select-none">
              My Work
            </h2>
          </div>
        </ScrollFadeIn>

        {/* Clean, Unified and Spaced Filter Panel with Adjacent Reset Button */}
        <ScrollFadeIn delay={100} className="mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 sm:p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200/40 shadow-xs">
            
            <div id="filter-bar" className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full md:w-auto">
              
              {/* Filter Group 1: Format Type */}
              <div id="fgroup-type" className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap">
                  <Film className="w-3.5 h-3.5 text-gray-400" />
                  Format
                </span>
                <div className="flex bg-gray-100/80 p-0.5 rounded-lg border border-gray-200/40 w-full sm:w-auto">
                  {(['long', 'short'] as const).map((type) => {
                    const isActive = typeFilter === type;
                    return (
                      <button
                        id={`type-btn-${type}`}
                        key={type}
                        onClick={() => setTypeFilter(type)}
                        className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'bg-white text-youtube shadow-xs border border-gray-200/30 font-bold'
                            : 'text-gray-500 hover:text-gray-800 border border-transparent hover:bg-gray-200/30'
                        }`}
                      >
                        {type === 'long' ? 'Long' : 'Short'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Vertical divider on screens wider than mobile but mobile view collapses */}
              <div className="hidden sm:block w-[1px] h-6 bg-gray-200" />

              {/* Filter Group 2: Niche */}
              <div id="fgroup-niche" className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap">
                  <Gamepad className="w-3.5 h-3.5 text-gray-400" />
                  Niche
                </span>
                <div className="relative w-full sm:w-auto select-none">
                  <select
                    id="niche-select"
                    value={nicheFilter}
                    onChange={(e) => setNicheFilter(e.target.value as any)}
                    className="w-full sm:w-48 bg-white hover:bg-gray-50 border border-gray-250/30 text-secondary-dark text-xs font-bold px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer outline-none focus:border-youtube/40 focus:ring-2 focus:ring-youtube/15 appearance-none pr-10 font-sans shadow-xs"
                  >
                    <option value="all">⚡ All Niches</option>
                    <option value="commentary">🎬 Commentary</option>
                    <option value="motivational">🔥 Motivational</option>
                    <option value="fitness">💪 Fitness</option>
                    <option value="streamers">🎮 Streamers</option>
                    <option value="documentary">📖 Documentary</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-youtube">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Reset Active Filters Adjacent to Controls */}
            <div className="w-full md:w-auto flex justify-center md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-gray-150">
              <button
                id="filter-reset-btn"
                onClick={resetFilters}
                disabled={typeFilter === 'short' && nicheFilter === 'all'}
                className={`w-full md:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-300 cursor-pointer border ${
                  (typeFilter !== 'short' || nicheFilter !== 'all')
                    ? 'bg-secondary-dark hover:bg-youtube text-white border-secondary-dark hover:border-youtube shadow-xs'
                    : 'bg-gray-100 border-gray-250/20 text-gray-400 cursor-not-allowed opacity-50'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Filters
              </button>
            </div>

          </div>
        </ScrollFadeIn>

        {/* Video Grid responsive layout */}
        {filteredVideos.length > 0 ? (
          <div 
            id="portfolio-grid" 
            className={`grid gap-4 sm:gap-6 items-start ${
              typeFilter === 'long'
                ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {filteredVideos.map((video, index) => {
              const isLongForm = video.type === 'long';
              return (
                <ScrollFadeIn
                  key={video.id}
                  delay={index * 80}
                  className="bg-gray-900 rounded-2xl border border-gray-200/5 shadow-xs hover:shadow-xl transition-all overflow-hidden group relative"
                >
                  {/* Link wrapper around entire aspect card */}
                  <a
                    id={`video-link-${video.id}`}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden block w-full h-full outline-none"
                    style={{ aspectRatio: isLongForm ? '16/9' : '9/16' }}
                  >
                    
                    {/* Render Image or Fallback */}
                    {video.thumb ? (
                      <div className="w-full h-full bg-gray-900 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src={video.thumb} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      renderPlaceholderThumbnail(video)
                    )}

                    {/* Gradient overlay for text contrast and depth */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

                    {/* Integrated Details inside aspect container */}
                    <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 z-15 flex flex-col items-start text-left pointer-events-none">
                      
                      {/* Video Title */}
                      <h3 
                        id={`video-title-${video.id}`} 
                        className="font-sans font-bold text-white text-xs sm:text-xs md:text-sm leading-snug drop-shadow-[0_1.5px_2.5px_rgba(0,0,0,0.9)] line-clamp-2 sm:line-clamp-3 select-none"
                      >
                        {video.title}
                      </h3>

                      {/* Views Count */}
                      {video.views && (
                        <span 
                          id={`video-stat-views-${video.id}`} 
                          className="text-[10px] font-mono font-medium text-gray-200 mt-1 sm:mt-1.5 drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.85)] select-none"
                        >
                          {video.views}
                        </span>
                      )}
                    </div>

                    {/* Hover state Play Button overlay */}
                    <div id={`hover-overlay-${video.id}`} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white/95 hover:bg-youtube text-secondary-dark hover:text-white rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-[2px]" />
                      </div>
                    </div>

                  </a>
                </ScrollFadeIn>
              );
            })}
          </div>
        ) : (
          /* Empty Search filter states */
          <ScrollFadeIn delay={0}>
            <div id="no-results-panel" className="w-full py-16 flex flex-col items-center justify-center text-center bg-white/50 backdrop-blur-md rounded-2xl border border-gray-200/60 max-w-lg mx-auto">
              <Trash2 className="w-12 h-12 text-gray-300 mb-4" />
              <h3 id="no-results-title" className="text-lg font-bold text-gray-800">No projects match filters</h3>
              <p className="text-sm text-gray-500 mt-1.5 px-6">
                Try loosening your category rules to view the other uploaded cinematic sequences.
              </p>
              <button
                id="no-results-reset-btn"
                onClick={resetFilters}
                className="mt-5 text-xs font-semibold bg-secondary-dark hover:bg-youtube text-white py-2 px-4 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </ScrollFadeIn>
        )}

      </div>
    </section>
  );
}
