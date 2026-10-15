import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/src/components/header/Header';
import { Footer } from '@/src/components/footer/Footer';
import { Chatbot } from '@/src/components/chatbot/Chatbot';

/** Restaura el scroll al inicio en cada cambio de ruta. */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Estructura compartida por todas las páginas:
 * encabezado fijo, contenido de la ruta y pie de página.
 */
export const RootLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#F7F7F5] text-[#062446]">
      <ScrollToTop />
      <Header />
      {/* Desplazamiento por el encabezado fijo */}
      <main className="pt-[84px] sm:pt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};
