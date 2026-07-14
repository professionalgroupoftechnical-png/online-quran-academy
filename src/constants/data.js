export const GOOGLE_ADS_ID = 'AW-17678330224';
export const GOOGLE_CONVERSION_LABEL = 'AW-17678330224/7w7tCPa477MbEPDS1-1B';
export const FORM_SCRIPT_URL = 'http://localhost:5001/api/contact';

export const WHATSAPP_NUMBER = '923334895899';
export const PHONE_DISPLAY = '+92 333 4895899';
export const EMAIL = 'm.alibabar2004@gmail.com';

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#plans', label: 'Plans' },
  { href: '#contact', label: 'Contact' },
];

export const CURRENCIES = [
  { code: 'USD', flag: '🇺🇸', label: 'USD' },
  { code: 'PKR', flag: '🇵🇰', label: 'PKR' },
  { code: 'GBP', flag: '🇬🇧', label: 'GBP' },
  { code: 'EUR', flag: '🇪🇺', label: 'EUR' },
];

export const CURRENCY_SYMBOLS = {
  PKR: '₨',
  USD: '$',
  GBP: '£',
  EUR: '€',
};

export const SLIDES = [
  {
    image: '/slider-quran.jpeg',
    alt: 'Student learning Quran online with Tajweed',
    icon: 'fa-quran',
    badge: 'Trusted Since 2015',
    title: 'Learn the Holy Quran',
    highlight: 'With Expert Tutors',
    subtitle:
      'One-on-one online classes with certified teachers. Tajweed, Hifz & Islamic studies for kids and adults worldwide.',
  },
  {
    image: '/quran-academy.jpeg',
    alt: 'Quran Academy online classes for kids and adults',
    icon: 'fa-star-and-crescent',
    badge: 'Free 2-Day Trial',
    title: 'Start Your Journey',
    highlight: 'From Anywhere',
    subtitle:
      'Flexible timings that fit your schedule. Interactive lessons, progress tracking, and personalized learning plans.',
  },
  {
    image: '/slider-quran.jpeg',
    alt: 'Holy Quran learning with certified teachers',
    icon: 'fa-book-open',
    badge: 'Ramadan Special Offer',
    title: 'Get 15% Discount',
    highlight: 'On All Plans',
    subtitle:
      'Limited time offer for the first 50 students. Book your 2-day free trial class today with our expert certified teachers.',
  },
];

export const STATS = [
  { icon: 'fa-users', value: '5,000+', label: 'Happy Students' },
  { icon: 'fa-chalkboard-teacher', value: '50+', label: 'Expert Teachers' },
  { icon: 'fa-globe-americas', value: '25+', label: 'Countries' },
  { icon: 'fa-star', value: '4.9/5', label: 'Parent Rating' },
];

export const ABOUT_FEATURES = [
  { icon: 'fa-certificate', text: 'Certified Quran Teachers' },
  { icon: 'fa-user-graduate', text: 'One-on-One Online Classes' },
  { icon: 'fa-clock', text: 'Flexible Class Timings' },
  { icon: 'fa-laptop', text: 'Interactive Learning Platform' },
  { icon: 'fa-chart-line', text: 'Progress Reports & Assessments' },
  { icon: 'fa-child', text: 'Kids & Adults Programs' },
];

export const PLANS = [
  {
    id: 'basic',
    name: 'Basic Plan',
    usd: 39,
    defaultPkr: '10,884',
    defaultGbp: '26',
    defaultEur: '30',
    schedule: '3 Days per Week • 25-minute sessions',
    features: [
      'Nazra Quran',
      'Basic Tajweed Rules',
      'Daily Islamic Duas',
      'Salah Method',
      'Progress Tracking',
    ],
    featured: false,
    btnClass: 'btn',
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    usd: 49,
    defaultPkr: '13,675',
    defaultGbp: '31',
    defaultEur: '36',
    schedule: '4 Days per Week • 25-minute sessions',
    features: [
      'Complete Tajweed',
      'Quran Recitation',
      'Islamic Studies',
      'Islamic Duas & Azkar',
      'Certificate',
    ],
    featured: false,
    btnClass: 'btn',
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    usd: 59,
    defaultPkr: '16,465',
    defaultGbp: '39',
    defaultEur: '45',
    schedule: '5 Days per Week • 30-minute sessions',
    features: [
      'Complete Quran with Tajweed',
      'Islamic Duas & Azkar',
      'Advanced Islamic Studies',
      'Personal Mentor',
      'Completion Certificate',
    ],
    featured: true,
    btnClass: 'btn btn-secondary',
  },
];

export const DUA_LINKS = [
  { id: 'morning-duas', label: 'Morning Duas' },
  { id: 'evening-duas', label: 'Evening Duas' },
  { id: 'sleeping-duas', label: 'Sleeping Duas' },
  { id: 'eating-duas', label: 'Eating Duas' },
];

export const QURAN_PARAS = Array.from({ length: 30 }, (_, i) => i + 1);
