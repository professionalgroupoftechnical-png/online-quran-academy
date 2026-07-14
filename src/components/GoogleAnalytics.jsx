import { useEffect } from 'react';
import { GOOGLE_ADS_ID, GOOGLE_CONVERSION_LABEL } from '../constants/data';

export default function GoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GOOGLE_ADS_ID);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    document.head.appendChild(script);

    gtag('event', 'conversion', { send_to: GOOGLE_CONVERSION_LABEL });

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
