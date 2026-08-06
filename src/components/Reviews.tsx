/**
 * ==============================================================================
 * REVIEWS COMPONENT
 * Displays Client Testimonials and Screenshots
 * ==============================================================================
 */

import { useState } from 'react';
import { clientReviews } from '../data';
import { ReviewItem } from '../types';
import ScrollFadeIn from './ScrollFadeIn';
import { Quote, X } from 'lucide-react';

export default function Reviews() {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  // Segment the reviews into two columns dynamically:
  const col1 = clientReviews.filter((_, idx) => idx % 2 === 0);
  const col2 = clientReviews.filter((_, idx) => idx % 2 === 1);

  const renderReviewCard = (review: ReviewItem, idx: number) => (
    <ScrollFadeIn
      key={review.id}
      delay={idx * 100}
      className="bg-gray-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3.5">
            {review.avatarUrl ? (
              <img
                src={review.avatarUrl}
                alt={review.clientName}
                className="w-12 h-12 rounded-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-youtube/20 text-youtube flex items-center justify-center font-bold text-lg">
                {review.clientName.charAt(0)}
              </div>
            )}
            <div>
              <h3 className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                {review.clientName}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-gray-400">
                {review.role}
              </p>
            </div>
          </div>
          <Quote className="w-6 h-6 text-youtube/40 shrink-0" />
        </div>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
          "{review.comment}"
        </p>
      </div>

      {/* Review Screenshot Container */}
      {review.screenshotUrl && (
        <div
          onClick={() => setSelectedScreenshot(review.screenshotUrl || null)}
          className="mt-2 rounded-2xl overflow-hidden border border-white/10 bg-black/40 cursor-pointer group-hover:border-white/20 transition-colors"
        >
          <img
            src={review.screenshotUrl}
            alt={`${review.clientName} Review Screenshot`}
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </ScrollFadeIn>
  );

  return (
    <section id="reviews" className="py-24 px-4 md:px-8 bg-transparent scroll-mt-10 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2
              id="reviews-title"
              className="relative z-10 px-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary-dark tracking-tight leading-none cursor-default select-none mb-4"
            >
              Client Reviews
            </h2>
            <p className="text-gray-400 font-mono text-sm sm:text-base max-w-xl mx-auto">
              What creators and brands say about working with Atlantic Media
            </p>
          </div>
        </ScrollFadeIn>

        {/* Centered reviews layout organized in 2 vertical columns */}
        <div
          id="reviews-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start justify-center"
        >
          <div className="flex flex-col gap-8 md:gap-12">
            {col1.map((review, idx) => renderReviewCard(review, idx))}
          </div>
          {col2.length > 0 && (
            <div className="flex flex-col gap-8 md:gap-12">
              {col2.map((review, idx) => renderReviewCard(review, idx))}
            </div>
          )}
        </div>
      </div>

      {/* Screenshot Lightbox Modal */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-secondary-dark p-2 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedScreenshot(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/60 text-white hover:bg-youtube rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedScreenshot}
              alt="Review Screenshot Preview"
              className="w-full h-auto rounded-xl max-h-[85vh] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
}
