/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { portfolioVideos } from '../data';
import { VideoItem } from '../types';
import { Play } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

export default function Portfolio() {
  // State to track the currently playing video id (inline player)
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);

  // Dynamic streamable thumbnails
  const [streamableThumbs, setStreamableThumbs] = useState<Record<string, string>>({});

  // Dynamic oembed hydration for CORS-safe thumbnail retrieval
  useEffect(() => {
    portfolioVideos.forEach((video) => {
      if (video.url.includes('streamable.com') && !streamableThumbs[video.id]) {
        const match = video.url.match(/streamable\.com\/(?:e\/)?([a-zA-Z0-9]+)/);
        if (match) {
          const streamableId = match[1];
          fetch(`https://api.streamable.com/oembed.json?url=https://streamable.com/${streamableId}`)
            .then((res) => res.json())
            .then((data) => {
              if (data && data.thumbnail_url) {
                const thumbUrl = data.thumbnail_url.startsWith('//')
                  ? 'https:' + data.thumbnail_url
                  : data.thumbnail_url;
                setStreamableThumbs((prev) => ({ ...prev, [video.id]: thumbUrl }));
              }
            })
            .catch((err) => {
              console.warn('Silent fallback: dynamic streamable thumbnail error:', err);
            });
        }
      }
    });
  }, []);

  /**
   * Generates a beautiful video timeline editor placeholder thumbnail
   * representing track lines, sound waves, and rendering masks
   * in strict compliance with aspect ratios.
   */
  const renderPlaceholderThumbnail = (video: VideoItem) => {
    const isLongForm = video.type === 'long';
    const isGaming = video.niche === 'streamers';

    return (
      <div
         id={`thumb-wrapper-${video.id}`}
         className="w-full h-full relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex flex-col justify-between p-4 font-mono"
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

  const [activeFormat, setActiveFormat] = useState<'long' | 'short'>('long');

  const currentVideos = portfolioVideos.filter((v) => v.type === activeFormat);
  const businessVideos = currentVideos.filter((v) => v.niche === 'business');
  const streamersVideos = currentVideos.filter((v) => v.niche === 'streamers');
  const commentaryVideos = currentVideos.filter((v) => v.niche === 'commentary');
  const podcastVideos = currentVideos.filter((v) => v.niche === 'podcast');
  const camsVideos = currentVideos.filter((v) => v.niche === 'cams');

  const renderVideoCard = (video: VideoItem, index: number) => {
    const isLongForm = video.type === 'long';
    const selectedThumb = streamableThumbs[video.id] || video.thumb;
    return (
      <ScrollFadeIn
        key={video.id}
        delay={index * 80}
        className="bg-transparent overflow-hidden group relative flex flex-col"
      >
        {/* The video aspect ratios wrapper / click handler */}
        <div
          onClick={() => {
            setActivePlayingId(video.id);
          }}
          className="relative overflow-hidden w-full rounded-2xl bg-gray-900 border border-gray-200/5 shadow-xs cursor-pointer"
          style={{ aspectRatio: isLongForm ? '16/9' : '9/16' }}
        >
          {activePlayingId === video.id ? (
            video.url.includes('streamable.com') ? (
              (() => {
                const streamableMatch = video.url.match(/streamable\.com\/(?:e\/)?([a-zA-Z0-9]+)/);
                const streamableId = streamableMatch ? streamableMatch[1] : '';
                return (
                  <iframe
                    src={`https://streamable.com/e/${streamableId}?loop=0&autoplay=1`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-full h-full border-none rounded-2xl absolute inset-0 bg-black/50"
                    style={{ width: '100%', height: '100%' }}
                  />
                );
              })()
            ) : (
              (() => {
                // Handle other urls (like youtube) inline
                let embedUrl = video.url;
                if (video.url.includes('youtube.com/shorts/')) {
                  const ytMatch = video.url.match(/shorts\/([a-zA-Z0-9_-]+)/);
                  const ytId = ytMatch ? ytMatch[1] : '';
                  embedUrl = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
                } else if (video.url.includes('youtube.com') || video.url.includes('youtu.be')) {
                  const ytMatch = video.url.match(/(?:v=|embed\/|watch\?v=)([a-zA-Z0-9_-]+)/);
                  const ytId = ytMatch ? ytMatch[1] : '';
                  embedUrl = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
                }
                return (
                  <iframe
                    src={embedUrl}
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="w-full h-full border-none rounded-2xl absolute inset-0 bg-black"
                    style={{ width: '100%', height: '100%' }}
                  />
                );
              })()
            )
          ) : (
            <>
              {/* Render Image or Fallback */}
              {selectedThumb ? (
                <div className="w-full h-full bg-gray-900 overflow-hidden relative">
                  <img
                    src={selectedThumb}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                renderPlaceholderThumbnail(video)
              )}

              {/* Hover state Play Button overlay */}
              <div id={`hover-overlay-${video.id}`} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/95 hover:bg-youtube text-secondary-dark hover:text-white rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <Play className="w-6 h-6 fill-current translate-x-[2px]" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Info BELOW the video card with larger title */}
        <div className="mt-3.5 flex flex-col items-start text-left">
          <h3
            id={`video-title-${video.id}`}
            className="font-sans font-extrabold text-secondary-dark text-base sm:text-lg md:text-xl leading-snug tracking-tight group-hover:text-youtube transition-colors duration-300"
          >
            {video.title}
          </h3>
        </div>
      </ScrollFadeIn>
    );
  };

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 bg-transparent scroll-mt-10">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Heading Card - Center Alignment */}
        <ScrollFadeIn delay={0}>
          <div className="flex flex-col items-center justify-center text-center mb-8 relative w-full max-w-4xl mx-auto px-4">
            <span className="relative z-10 text-[10.5px] font-mono font-bold text-youtube tracking-widest uppercase mb-3.5 select-none md:scale-105">
              Explore Portfolio
            </span>
            <h2 id="portfolio-title" className="relative z-10 px-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary-dark tracking-tight leading-none cursor-default select-none">
              My Work
            </h2>
          </div>
        </ScrollFadeIn>

        {/* Format Selector Pill Buttons */}
        <ScrollFadeIn delay={80}>
          <div className="flex justify-center items-center gap-3 mb-16 select-none">
            <button
              onClick={() => {
                setActiveFormat('long');
                setActivePlayingId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFormat === 'long'
                  ? 'bg-secondary-dark text-white shadow-md shadow-secondary-dark/10'
                  : 'bg-white hover:bg-gray-100 text-gray-500 border border-gray-150 shadow-xs'
              }`}
            >
              Long Form
            </button>
            <button
              onClick={() => {
                setActiveFormat('short');
                setActivePlayingId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFormat === 'short'
                  ? 'bg-secondary-dark text-white shadow-md shadow-secondary-dark/10'
                  : 'bg-white hover:bg-gray-100 text-gray-500 border border-gray-150 shadow-xs'
              }`}
            >
              Short Form
            </button>
          </div>
        </ScrollFadeIn>

        {activeFormat === 'long' ? (
          <>
            {/* Business Niche Section */}
            <div className="mb-14">
              <ScrollFadeIn delay={100}>
                <div className="text-left w-full mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-youtube rounded-full" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-youtube tracking-widest uppercase">
                    Business
                  </span>
                </div>
              </ScrollFadeIn>
              
              <div 
                id="portfolio-grid-business" 
                className="grid gap-6 items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              >
                {businessVideos.map((video, index) => renderVideoCard(video, index))}
              </div>
            </div>

            {/* Streamers Niche Section */}
            <div className="mb-6">
              <ScrollFadeIn delay={150}>
                <div className="text-left w-full mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-youtube rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-youtube tracking-widest uppercase">
                    Streamers
                  </span>
                </div>
              </ScrollFadeIn>
              
              <div 
                id="portfolio-grid-streamer" 
                className="grid gap-6 items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              >
                {streamersVideos.map((video, index) => renderVideoCard(video, index))}
              </div>
            </div>
          </>
        ) : (
          /* Short Form Sections Container - shrunk to ~80% width to make physical video sizes smaller */
          <div className="max-w-[920px] mx-auto">
            {/* Podcast Niche Section */}
            <div className="mb-14">
              <ScrollFadeIn delay={100}>
                <div className="text-left w-full mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-youtube rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-youtube tracking-widest uppercase">
                    Podcast
                  </span>
                </div>
              </ScrollFadeIn>
              
              <div 
                id="portfolio-grid-podcast" 
                className="grid gap-5 items-start grid-cols-2 md:grid-cols-4"
              >
                {podcastVideos.map((video, index) => renderVideoCard(video, index))}
              </div>
            </div>

            {/* Cams Niche Section */}
            <div className="mb-14">
              <ScrollFadeIn delay={150}>
                <div className="text-left w-full mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-youtube rounded-full" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-youtube tracking-widest uppercase">
                    Cams
                  </span>
                </div>
              </ScrollFadeIn>
              
              <div 
                id="portfolio-grid-cams" 
                className="grid gap-5 items-start grid-cols-2 md:grid-cols-4"
              >
                {camsVideos.map((video, index) => renderVideoCard(video, index))}
              </div>
            </div>

            {/* Commentary Niche Section */}
            <div className="mb-6">
              <ScrollFadeIn delay={200}>
                <div className="text-left w-full mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-youtube rounded-full" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-youtube tracking-widest uppercase">
                    Commentary
                  </span>
                </div>
              </ScrollFadeIn>
              
              <div 
                id="portfolio-grid-commentary" 
                className="grid gap-5 items-start grid-cols-2 md:grid-cols-4"
              >
                {commentaryVideos.map((video, index) => renderVideoCard(video, index))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
