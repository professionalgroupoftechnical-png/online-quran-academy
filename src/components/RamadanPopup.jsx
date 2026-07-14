import { useEffect, useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants/data';

const POPUP_STORAGE_KEY = 'popupLastShown';
const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;

export default function RamadanPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(POPUP_STORAGE_KEY);
    const now = Date.now();

    if (!lastShown || now - parseInt(lastShown, 10) > FIFTEEN_DAYS_MS) {
      const timer = setTimeout(() => {
        setVisible(true);
        localStorage.setItem(POPUP_STORAGE_KEY, now.toString());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => setVisible(false);

  if (!visible) return null;

  return (
    <div className="popup-overlay visible" id="ramadanPopup" role="dialog" aria-modal="true">
      <div className="popup-content">
        <button type="button" className="popup-close" aria-label="Close popup" onClick={close}>
          <i className="fas fa-times" aria-hidden="true" />
        </button>
        <div className="popup-badge">Ramadan Special Offer</div>
        <h3>Get 15% Discount on All Plans</h3>
        <p>Limited time offer for first 50 students. Book your free trial now.</p>
        <div className="popup-features">
          <div className="feature-box">
            <i className="fas fa-clock" aria-hidden="true" />
            <span>24 Hours</span>
          </div>
          <div className="feature-box">
            <i className="fas fa-graduation-cap" aria-hidden="true" />
            <span>Expert Teachers</span>
          </div>
        </div>
        <div className="popup-actions">
          <a href="#contact" className="btn" onClick={close}>
            Enroll Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
