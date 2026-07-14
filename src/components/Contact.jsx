import { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { CURRENCIES, EMAIL, FORM_SCRIPT_URL, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../constants/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const INITIAL_FORM = {
  parent_name: '',
  whatsapp: '',
  email: '',
  plan: '',
  currency: 'PKR',
  message: '',
};

export default function Contact({ currentCurrency }) {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ ...INITIAL_FORM, currency: currentCurrency });
  const [submitting, setSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState({ text: '', color: '' });

  useEffect(() => {
    setForm((prev) => ({ ...prev, currency: currentCurrency }));
  }, [currentCurrency]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setResponseMsg({ text: '', color: '' });

    try {
      const response = await fetch(FORM_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.result === 'success') {
        setResponseMsg({
          text: 'Your request has been received. We will contact you shortly.',
          color: 'green',
        });
        setForm({ ...INITIAL_FORM, currency: currentCurrency });
      } else {
        throw new Error(data.error || 'Server error');
      }
    } catch (err) {
      setResponseMsg({
        text: 'Error! Please try again.',
        color: 'red',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle
          label="Get Started"
          title="Start Your Free Trial Today"
          subtitle="Book your 2-day free trial class with our expert Quran teachers"
        />

        <div ref={ref} className="contact-container reveal">
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="parent_name">
                  Parent Name
                </label>
                <input
                  type="text"
                  id="parent_name"
                  name="parent_name"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={form.parent_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="whatsapp">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  className="form-control"
                  placeholder="+92 300 1234567"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="plan">
                  Learning Plan
                </label>
                <select
                  id="plan"
                  name="plan"
                  className="form-control"
                  value={form.plan}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Learning Plan</option>
                  <option value="basic">Basic Plan</option>
                  <option value="standard">Standard Plan</option>
                  <option value="premium">Premium Plan</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="preferredCurrency">
                  Preferred Currency
                </label>
                <select
                  name="currency"
                  className="form-control"
                  id="preferredCurrency"
                  value={form.currency}
                  onChange={handleChange}
                >
                  {CURRENCIES.map(({ code }) => (
                    <option key={code} value={code}>
                      {code === 'PKR' && 'Pakistani Rupee (PKR)'}
                      {code === 'USD' && 'US Dollar (USD)'}
                      {code === 'GBP' && 'British Pound (GBP)'}
                      {code === 'EUR' && 'Euro (EUR)'}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Student Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={4}
                  placeholder="Student's age, current level & learning goals"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn submit-btn" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Free Trial Request'}
              </button>
            </form>
            {responseMsg.text && (
              <div
                className="form-response"
                style={{ color: responseMsg.color }}
              >
                <i
                  className={`fas ${responseMsg.color === 'green' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}
                  aria-hidden="true"
                />{' '}
                {responseMsg.text}
              </div>
            )}
          </div>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fab fa-whatsapp" aria-hidden="true" />
              </div>
              <div className="info-content">
                <h4>WhatsApp</h4>
                <p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope" aria-hidden="true" />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock" aria-hidden="true" />
              </div>
              <div className="info-content">
                <h4>Response Time</h4>
                <p>We reply within 2 hours on WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
