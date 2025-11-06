import React, { useEffect } from 'react';
import RedirectPage from '../components/RedirectPage';

const LoavblePage = () => {
  useEffect(() => {
    // Inicializar Google Analytics quando o componente montar
    if (window.gtag) {
      window.gtag('config', 'G-M1G5V47P1L', {
        'cookie_flags': 'SameSite=None;Secure',
        'linker': {
          'domains': [
            'lovabel.com',
            'loavble.com',
            'lovabol.com',
            'llovable.com'
          ]
        }
      });
    }
  }, []);

  return (
    <RedirectPage
      targetUrl="https://lovable.dev?via=loavble"
      viaParam="loavble"
      title="Redirecionando para Lovable"
    />
  );
};

export default LoavblePage;
