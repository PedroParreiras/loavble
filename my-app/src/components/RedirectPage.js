import React, { useEffect } from 'react';
import './RedirectPage.css';

const RedirectPage = ({ targetUrl, viaParam, title }) => {
  useEffect(() => {
    // Redirecionamento automático após 3 segundos
    const timer = setTimeout(() => {
      window.location.href = targetUrl;
    }, 3000);

    return () => clearTimeout(timer);
  }, [targetUrl]);

  const handleManualRedirect = () => {
    window.location.href = targetUrl;
  };

  return (
    <div className="redirect-container">
      <div className="redirect-content">
        <h1>{title}</h1>
        <p>Você será redirecionado em alguns segundos.</p>
        <p>
          Caso não seja redirecionado automaticamente,{' '}
          <button onClick={handleManualRedirect} className="redirect-link">
            clique aqui
          </button>
          .
        </p>
      </div>
    </div>
  );
};

export default RedirectPage;
