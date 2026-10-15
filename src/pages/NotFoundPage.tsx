import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { ArrowLeft } from 'lucide-react';
import { useDocumentTitle } from '@/src/hooks/useDocumentTitle';

/** Página 404 para rutas no encontradas. */
export const NotFoundPage: React.FC = () => {
  useDocumentTitle('Página no encontrada | Lawcrest Legal Group');

  return (
    <section
      aria-label="Página no encontrada"
      className="relative w-full bg-[#F7F7F5] text-[#062446] min-h-[60vh] flex items-center py-24 sm:py-32"
    >
      <Container size="narrow" className="text-center">
        <span className="font-serif text-[#C89A32] text-6xl sm:text-7xl leading-none block mb-6 select-none">
          404
        </span>
        <h1 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-tight mb-4 [text-wrap:balance]">
          La página que busca no existe
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#062446]/70 leading-relaxed max-w-lg mx-auto mb-10">
          Es posible que el enlace haya cambiado o ya no esté disponible. Puede volver al inicio o
          ponerse en contacto con nosotros.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 font-sans font-medium text-xs sm:text-sm tracking-widest uppercase px-7 py-3.5 min-h-[46px] rounded-[2px] text-[#FFFFFF] bg-[#062446] border border-[#C89A32]/60 hover:border-[#D8B65A] hover:bg-[#031A39] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center font-sans font-medium text-xs sm:text-sm tracking-widest uppercase px-7 py-3.5 min-h-[46px] rounded-[2px] text-[#062446] bg-transparent border border-[#062446]/20 hover:border-[#C89A32] hover:bg-[#062446] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            Contacto
          </Link>
        </div>
      </Container>
    </section>
  );
};
