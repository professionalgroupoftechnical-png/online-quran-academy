import SectionTitle from './SectionTitle';

const COURSES = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida',
    desc: 'Learn Arabic letters, sounds, and foundation with tajweed.',
    icon: 'fa-quran',
  },
  {
    id: 'tajweed-course',
    title: 'Tajweed Course',
    desc: 'Proper pronunciation rules to recite Quran beautifully.',
    icon: 'fa-microphone',
  },
  {
    id: 'hifz-program',
    title: 'Hifz Program',
    desc: 'Memorize the Quran with structured plan and supervision.',
    icon: 'fa-book-open',
  },
  {
    id: 'quran-kids',
    title: 'Quran for Kids',
    desc: 'Fun and engaging lessons for children ages 4+.',
    icon: 'fa-child',
  },
];

export default function Courses() {
  return (
    <section className="section courses-section pattern-bg" id="courses">
      <div className="container">
        <SectionTitle
          label="Courses"
          title="Popular Courses"
          subtitle="From basics to advanced Quran learning"
        />

        <div className="courses-grid">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-icon-wrap">
        <i className={`fas ${course.icon}`} aria-hidden="true" />
      </div>
      <h3 className="course-title">{course.title}</h3>
      <p className="course-desc">{course.desc}</p>
      <button
        type="button"
        className="btn course-btn"
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            
            // Set plan dropdown to a relevant option if needed
            const planSelect = document.getElementById('plan');
            if (planSelect) {
              planSelect.value = 'basic';
              const event = new Event('change', { bubbles: true });
              planSelect.dispatchEvent(event);
            }
          }
        }}
      >
        Learn More
      </button>
    </div>
  );
}
