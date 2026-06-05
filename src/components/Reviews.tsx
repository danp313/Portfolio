/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { clientReviews } from '../data';
import { Image as ImageIcon } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

export default function Reviews() {
  // Segment the reviews into two columns dynamically:
  const col1 = clientReviews.filter((_, idx) => idx % 2 === 0);
  const col2 = clientReviews.filter((_, idx) => idx % 2 === 1);

  return (
    <section id="reviews" className="py-24 px-4 md:px-8 bg-transparent scroll-mt-10 relative">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollFadeIn delay={0}>
          <div className="text-center w-full max-w-4xl mx-auto mb-16 relative px-4 flex flex-col items-center justify-center">
            <span className="relative z-10 text-[10.5px] font-mono font-bold text-youtube tracking-widest uppercase mb-3.5 select-none md:scale-105">
              What they say
            </span>
            <h2 id="reviews-title" className="relative z-10 px-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary-dark tracking-tight leading-none cursor-default select-none">
              Client Reviews
            </h2>
          </div>
        </ScrollFadeIn>

        {/* Centered reviews layout organized in 2 vertical columns */}
        <div id="reviews-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start justify-center">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-8 md:gap-12 w-full max-w-[460px] mx-auto">
            {col1.map((review, index) => {
              const hasScreenshot = !!review.screenshotUrl;

              return (
                <ScrollFadeIn
                  key={review.id}
                  delay={index * 120}
                  className="w-full flex flex-col group"
                >
                  <div className="bg-white rounded-2xl border border-gray-150/80 shadow-xs hover:shadow-lg hover:border-youtube/10 transition-all duration-300 w-full overflow-hidden flex flex-col">
                    {/* Review Screenshot Container */}
                    <div className="w-full relative">
                      {hasScreenshot ? (
                        <div 
                          className="w-full relative overflow-hidden bg-gray-50 flex items-center justify-center border-b border-gray-100 select-none"
                        >
                          <img
                            id={`review-screenshot-img-${review.id}`}
                            src={review.screenshotUrl}
                            alt={`${review.clientName} Review Screenshot`}
                            className="w-full h-auto block"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        /* Fallback design */
                        <div
                          id={`review-placeholder-${review.id}`}
                          className="w-full border-b border-gray-100 bg-gray-50/50 p-8 flex flex-col items-center justify-center text-center h-48"
                        >
                          <ImageIcon className="w-6 h-6 text-gray-400 mb-2.5" />
                          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider font-mono">
                            [ Add review screenshot here ]
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Left-aligned Client channel row connected as a single card */}
                    <div className="p-4 sm:p-5 flex items-center gap-3.5 bg-white text-left">
                      {review.avatarUrl ? (
                        <img
                          src={review.avatarUrl}
                          alt={`${review.clientName} avatar`}
                          className="w-11 h-11 object-cover rounded-full border border-gray-150 shadow-xs shrink-0"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-11 h-11 bg-secondary-dark text-white font-extrabold rounded-full flex items-center justify-center text-xs tracking-wider border border-white uppercase select-none shrink-0 border-gray-150 shadow-xs">
                          {review.clientName.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div>
                        {/* Channel name, role and subscriber count info */}
                        <h4 id={`review-client-name-${review.id}`} className="font-extrabold text-gray-950 text-base sm:text-lg tracking-tight leading-tight">
                          {review.clientName}
                        </h4>
                        <p id={`review-client-role-${review.id}`} className="text-xs text-youtube font-bold font-mono uppercase tracking-wider mt-1">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8 md:gap-12 w-full max-w-[460px] mx-auto">
            {col2.map((review, index) => {
              const hasScreenshot = !!review.screenshotUrl;

              return (
                <ScrollFadeIn
                  key={review.id}
                  delay={(index + 1) * 120}
                  className="w-full flex flex-col group"
                >
                  <div className="bg-white rounded-2xl border border-gray-150/80 shadow-xs hover:shadow-lg hover:border-youtube/10 transition-all duration-300 w-full overflow-hidden flex flex-col">
                    {/* Review Screenshot Container */}
                    <div className="w-full relative">
                      {hasScreenshot ? (
                        <div 
                          className="w-full relative overflow-hidden bg-gray-50 flex items-center justify-center border-b border-gray-100 select-none"
                        >
                          <img
                            id={`review-screenshot-img-${review.id}`}
                            src={review.screenshotUrl}
                            alt={`${review.clientName} Review Screenshot`}
                            className="w-full h-auto block"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        /* Fallback design */
                        <div
                          id={`review-placeholder-${review.id}`}
                          className="w-full border-b border-gray-100 bg-gray-50/50 p-8 flex flex-col items-center justify-center text-center h-48"
                        >
                          <ImageIcon className="w-6 h-6 text-gray-400 mb-2.5" />
                          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider font-mono">
                            [ Add review screenshot here ]
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Left-aligned Client channel row connected as a single card */}
                    <div className="p-4 sm:p-5 flex items-center gap-3.5 bg-white text-left">
                      {review.avatarUrl ? (
                        <img
                          src={review.avatarUrl}
                          alt={`${review.clientName} avatar`}
                          className="w-11 h-11 object-cover rounded-full border border-gray-150 shadow-xs shrink-0"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-11 h-11 bg-secondary-dark text-white font-extrabold rounded-full flex items-center justify-center text-xs tracking-wider border border-white uppercase select-none shrink-0 border-gray-150 shadow-xs">
                          {review.clientName.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div>
                        {/* Channel name, role and subscriber count info */}
                        <h4 id={`review-client-name-${review.id}`} className="font-extrabold text-gray-950 text-base sm:text-lg tracking-tight leading-tight">
                          {review.clientName}
                        </h4>
                        <p id={`review-client-role-${review.id}`} className="text-xs text-youtube font-bold font-mono uppercase tracking-wider mt-1">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
