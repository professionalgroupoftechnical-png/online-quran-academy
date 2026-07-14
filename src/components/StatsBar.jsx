import { STATS } from '../constants/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function StatsBar() {
  const ref = useScrollReveal();

  return (
    <div className="stats-bar">
      <div ref={ref} className="stats-inner reveal">
        {STATS.map(({ icon, value, label }) => (
          <div key={label} className="stat-item">
            <div className="stat-icon">
              <i className={`fas ${icon}`} aria-hidden="true" />
            </div>
            <div className="stat-value">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
