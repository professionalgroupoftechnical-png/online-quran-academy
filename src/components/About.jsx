import SectionTitle from './SectionTitle';
import { ABOUT_FEATURES } from '../constants/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const textRef = useScrollReveal();
  const visualRef = useScrollReveal();

  return (
    <section className="section pattern-bg" id="about">
      <div className="container">
        <SectionTitle
          label="Who We Are"
          title="About Quran Academy Pakistan"
          subtitle="Trusted Online Quran Learning Platform for Kids & Families Worldwide"
        />

        <div className="about-content">
          <div ref={textRef} className="about-text reveal">
            <h3>Professional Quran Education Online</h3>
            <p>
              Quran Academy is Pakistan&apos;s leading online Quran learning platform, dedicated to
              teaching the Holy Quran with proper Tajweed rules and Islamic education to students
              worldwide.
            </p>

            <div className="features-grid">
              {ABOUT_FEATURES.map(({ icon, text }) => (
                <div key={text} className="feature-card">
                  <div className="feature-card-icon">
                    <i className={`fas ${icon}`} aria-hidden="true" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn">
              Start Free Trial
            </a>
          </div>

          <div ref={visualRef} className="about-visual reveal reveal-delay-2">
            <div className="about-visual-icon">
              <i className="fas fa-graduation-cap" aria-hidden="true" />
            </div>
            <h3>Online Quran Classes</h3>
            <p>Learn from Certified Teachers at your own pace</p>
            <div className="about-visual-badge">
              <i className="fas fa-award" aria-hidden="true" />
              <div>
                <strong>2-Day Free Trial</strong>
                <span>No commitment — experience our teaching first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
