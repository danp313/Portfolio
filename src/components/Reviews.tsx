/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { clientReviews } from '../data';
import { Image as ImageIcon, X } from 'lucide-react';
import ScrollFadeIn from './ScrollFadeIn';

export default function Reviews() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Segment the reviews into two columns as requested by the user:
  // 1st column: Conflext and Ben Lionel
  // 2nd column: Phoenix, Robbers, Gainz
  const col1 = [
    clientReviews.find((r) => r.clientName === 'Conflext'),
    clientReviews.find((r) => r.clientName === 'Ben Lionel Scott'),
  ].filter(Boolean) as typeof clientReviews;

  const col2 = [
    clientReviews.find((r) => r.clientName === 'Stream Phoenix'),
    clientReviews.find((r) => r.clientName === 'Robbers IQ'),
    clientReviews.find((r) => r.clientName === 'Gainz'),
  ].filter(Boolean) as typeof clientReviews;

  return (
    <section id="reviews" className="py-24 px-4 md:px-8 bg-transparent scroll-mt-10 relative">
      
      {/* Visual background wrapper */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-youtube/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto">
        
        {/* Section Header */}
        <ScrollFadeIn delay={0}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="reviews-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary-dark tracking-tight leading-none cursor-default select-none">
              Client Reviews
            </h2>
          </div>
        </ScrollFadeIn>

        {/* Centered reviews layout organized in 2 vertical columns */}
        <div id="reviews-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start justify-center">
          
          {/* Column 1: Conflext & Ben Lionel */}
          <div className="flex flex-col gap-8 md:gap-12 w-full max-w-[460px] mx-auto">
            {col1.map((review, index) => {
              const hasScreenshot = !!review.screenshotUrl;

              return (
                <ScrollFadeIn
                  key={review.id}
                  delay={index * 120}
                  className="w-full flex flex-col group"
                >
                  <div className="bg-white rounded-2xl border border-gray-150/80 shadow-xs hover:shadow-lg hover:border-youtube/30 transition-all duration-300 w-full overflow-hidden flex flex-col">
                    {/* Zoomable Image of the Review */}
                    <div className="w-full relative">
                      {hasScreenshot ? (
                        <div 
                          className="w-full relative overflow-hidden cursor-zoom-in bg-gray-50 flex items-center justify-center border-b border-gray-100"
                          onClick={() => setSelectedImage(review.screenshotUrl || null)}
                        >
                          <img
                            id={`review-screenshot-img-${review.id}`}
                            src={review.screenshotUrl}
                            alt={`${review.clientName} Review Screenshot`}
                            className="w-full h-auto block hover:scale-[1.015] transition-transform duration-500 ease-out"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        /* Fallback design */
                        <div
                          id={`review-placeholder-${review.id}`}
                          className="w-full border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50 p-8 flex flex-col items-center justify-center text-center transition-colors group/p cursor-pointer h-48"
                        >
                          <ImageIcon className="w-6 h-6 text-gray-400 group-hover/p:text-youtube transition-colors mb-2.5" />
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

          {/* Column 2: Stream Phoenix, Robbers IQ, Gainz */}
          <div className="flex flex-col gap-8 md:gap-12 w-full max-w-[460px] mx-auto">
            {col2.map((review, index) => {
              const hasScreenshot = !!review.screenshotUrl;

              return (
                <ScrollFadeIn
                  key={review.id}
                  delay={(index + 2) * 120}
                  className="w-full flex flex-col group"
                >
                  <div className="bg-white rounded-2xl border border-gray-150/80 shadow-xs hover:shadow-lg hover:border-youtube/30 transition-all duration-300 w-full overflow-hidden flex flex-col">
                    {/* Zoomable Image of the Review */}
                    <div className="w-full relative">
                      {hasScreenshot ? (
                        <div 
                          className="w-full relative overflow-hidden cursor-zoom-in bg-gray-50 flex items-center justify-center border-b border-gray-100"
                          onClick={() => setSelectedImage(review.screenshotUrl || null)}
                        >
                          <img
                            id={`review-screenshot-img-${review.id}`}
                            src={review.screenshotUrl}
                            alt={`${review.clientName} Review Screenshot`}
                            className="w-full h-auto block hover:scale-[1.015] transition-transform duration-500 ease-out"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ) : (
                        /* Fallback design */
                        <div
                          id={`review-placeholder-${review.id}`}
                          className="w-full border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50 p-8 flex flex-col items-center justify-center text-center transition-colors group/p cursor-pointer h-48"
                        >
                          <ImageIcon className="w-6 h-6 text-gray-400 group-hover/p:text-youtube transition-colors mb-2.5" />
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

      {/* Smooth Zoom Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-zoom-out select-none"
            onClick={() => setSelectedImage(null)}
          >
            {/* Ambient subtle glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08)_0%,transparent_70%)] pointer-events-none" />

            {/* Absolute close button */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-youtube p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-50 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scale-up light-boxed image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              src={selectedImage}
              alt="Review Full Screen"
              className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
