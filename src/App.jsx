import { useEffect, useState } from 'react';
import GoogleAnalytics from './components/GoogleAnalytics';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Plans from './components/Plans';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { useExchangeRates } from './hooks/useExchangeRates';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const prices = useExchangeRates();

  useEffect(() => {
    document.title =
      'Quran Academy Pakistan | Learn Quran Online with Expert Tutors 2026';
  }, []);

  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      <GoogleAnalytics />
      <Header />

      <main id="main-content">
        <HeroSlider />
        <StatsBar />
        <About />
        <Plans
          currentCurrency={currentCurrency}
          onCurrencyChange={setCurrentCurrency}
          prices={prices}
        />
        <Courses />
        <Contact currentCurrency={currentCurrency} />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
