export default function SectionTitle({ label, title, subtitle, className = '' }) {
  return (
    <div className={`section-title ${className}`.trim()}>
      {label && <span className="section-label">{label}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
