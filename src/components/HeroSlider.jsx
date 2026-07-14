import { useEffect, useState, useCallback } from 'react';
import { SLIDES } from '../constants/data';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const show = useCallback((index) => {
    const total = SLIDES.length;
    setCurrent(((index % total) + total) % total);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => show(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, show]);

  const slide = SLIDES[current];

  return (
    <section className="slider-section" id="home">
      <div className="slider-container">
        {SLIDES.map((s, index) => (
          <div
            key={s.image + index}
            className={`slide${index === current ? ' active' : ''}`}
            aria-hidden={index !== current}
          >
            <img
              src={s.image}
              alt={s.alt}
              className="slide-image"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
            <div className="slide-overlay" />
          </div>
        ))}

        <div className="hero-content">
          <div className="hero-inner" key={current}>
            <div className="hero-badge">
              <i className="fas fa-circle" aria-hidden="true" />
              {slide.badge}
            </div>
            <h2 className="hero-title">
              {slide.title} <span>{slide.highlight}</span>
            </h2>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn">
                <i className="fas fa-play-circle" aria-hidden="true" /> Start Free Trial
              </a>
              <a href="#plans" className="btn btn-outline-light">
                View Plans
              </a>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item">
                <i className="fas fa-check-circle" aria-hidden="true" />
                No credit card required
              </div>
              <div className="hero-trust-item">
                <i className="fas fa-check-circle" aria-hidden="true" />
                Certified teachers
              </div>
              <div className="hero-trust-item">
                <i className="fas fa-check-circle" aria-hidden="true" />
                Flexible timings
              </div>
            </div>
          </div>
        </div>

        <div className="quran-icon">
          <i className={`fas ${slide.icon}`} aria-hidden="true" />
        </div>

        <div className="slider-nav">
          <button
            type="button"
            className="slider-btn prev-btn"
            aria-label="Previous slide"
            onClick={() => show(current - 1)}
          >
            <i className="fas fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="slider-btn next-btn"
            aria-label="Next slide"
            onClick={() => show(current + 1)}
          >
            <i className="fas fa-chevron-right" aria-hidden="true" />
          </button>
        </div>

        <div className="slider-controls">
          {SLIDES.map((s, index) => (
            <button
              key={s.image + index}
              type="button"
              className={`slider-dot${index === current ? ' active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => show(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
