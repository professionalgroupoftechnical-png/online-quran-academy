import { WHATSAPP_NUMBER } from '../constants/data';

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="floating-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp" aria-hidden="true" />
      </a>
      <a
        href={`tel:+${WHATSAPP_NUMBER}`}
        className="floating-btn phone-btn"
        aria-label="Call us"
      >
        <i className="fas fa-phone" aria-hidden="true" />
      </a>
    </div>
  );
}
