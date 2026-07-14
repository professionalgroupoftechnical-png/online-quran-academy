import { useState } from 'react';

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="accordion-item">
      <button
        type="button"
        className="accordion-header"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <i
          className={`fas ${open ? 'fa-chevron-up' : 'fa-chevron-down'}`}
          aria-hidden="true"
        />
      </button>
      <div className={`accordion-content${open ? ' open' : ''}`}>{children}</div>
    </div>
  );
}
