import { EMAIL, PHONE_DISPLAY } from '../constants/data';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Quran Academy</h3>
            <p>
              Pakistan&apos;s leading online Quran learning platform providing quality education
              with certified teachers.
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#plans">Learning Plans</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>
                <i className="fas fa-phone" aria-hidden="true" />
                {PHONE_DISPLAY}
              </li>
              <li>
                <i className="fas fa-envelope" aria-hidden="true" />{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 Quran Academy Pakistan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
