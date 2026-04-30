/**
 * Presentation — Main container with slide navigation, transitions,
 * progress bar, background motifs, and keyboard controls.
 */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import SlideRenderer from './SlideRenderer';

export default function Presentation({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideVisible, setSlideVisible] = useState(true);
  const slideRef = useRef(null);
  const total = slides.length;

  const goTo = useCallback((index) => {
    if (index < 0 || index >= total || isTransitioning) return;
    setIsTransitioning(true);
    setSlideVisible(false);

    setTimeout(() => {
      setCurrent(index);
      setSlideVisible(true);
      setTimeout(() => setIsTransitioning(false), 600);
    }, 300);
  }, [total, isTransitioning]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        goTo(0);
      } else if (e.key === 'End') {
        goTo(total - 1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, goTo, total]);

  /* Click navigation — left third goes back, rest goes forward */
  const handleClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 3) {
      prev();
    } else {
      next();
    }
  }, [next, prev]);

  const progress = ((current + 1) / total) * 100;

  return (
    <div className="presentation" onClick={handleClick}>
      {/* Background decorative layer */}
      <div className="presentation__bg">
        <div className="bg-motif bg-motif--tl" />
        <div className="bg-motif bg-motif--br" />
        <div className="bg-motif bg-motif--helix" />
      </div>

      {/* Slide frame with transition */}
      <div
        className="slide-frame"
        ref={slideRef}
        style={{
          opacity: slideVisible ? 1 : 0,
          transform: slideVisible ? 'scale(1)' : 'scale(0.96)',
          transition: slideVisible
            ? 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)'
            : 'opacity 0.3s ease-in, transform 0.3s ease-in',
        }}
      >
        <SlideRenderer key={slides[current].id} slide={slides[current]} />
      </div>

      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Slide counter */}
      <div className="slide-counter">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Navigation hint */}
      <div className="nav-hint">← → / click to navigate</div>

      {/* Hidden Print View */}
      <div className="print-view">
        {slides.map(s => (
          <div key={s.id} className="print-slide">
            <SlideRenderer slide={s} />
          </div>
        ))}
      </div>
    </div>
  );
}
