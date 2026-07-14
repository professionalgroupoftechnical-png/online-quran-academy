import { useState } from 'react';
import { NAV_LINKS } from '../constants/data';
import { useHeaderScroll } from '../hooks/useHeaderScroll';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const scrolled = useHeaderScroll();

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <a href="#home" className="logo" onClick={() => handleNavClick('#home')}>
          <div className="logo-icon">
            <i className="fas fa-quran" aria-hidden="true" />
          </div>
          <div className="logo-text">
            <h1>Quran Academy</h1>
            <span>Learn Quran Online</span>
          </div>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
        </button>

        <nav className={`nav-menu${menuOpen ? ' active' : ''}`} id="navMenu">
          <ul className="nav-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeLink === href ? 'active' : ''}
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="cta-btn" onClick={() => handleNavClick('#contact')}>
            <i className="fas fa-gift" aria-hidden="true" /> Free Trial
          </a>
        </nav>
      </div>
    </header>
  );
}
