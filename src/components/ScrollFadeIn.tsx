/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number; // millisecond delay
  duration?: number; // transition duration in milliseconds
  className?: string;
  threshold?: number; // intersection ratio threshold
  key?: string | number;
}

export default function ScrollFadeIn({
  children,
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.1,
}: ScrollFadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can unobserve
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before screen bottom
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      id={`fade-in-container-${Math.random().toString(36).substr(2, 9)}`}
      ref={elementRef}
      style={style}
      className={`transition-all ease-out duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}
