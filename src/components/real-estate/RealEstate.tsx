import React from 'react';
import { Container } from '@/src/components/ui/Container';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import realEstateShowcaseImg from '@/src/assets/images/lawcrest_real_estate_showcase_1791404070597.jpg';
import realEstateShowcaseImg500 from '@/src/assets/images/lawcrest_real_estate_showcase-500.jpg';
import realEstateShowcaseImg800 from '@/src/assets/images/lawcrest_real_estate_showcase-800.jpg';

const PRACTICE_AREAS = [
  'Operaciones de compraventa inmobiliaria',
  'Revisión y análisis de documentación',
  'Due diligence legal',
  'Gestiones registrales',
  'Transferencia de propiedades',
  'Asesoría a compradores e inversionistas',
  'Asesoría a desarrolladores inmobiliarios',
];

export const RealEstate: React.FC = () => {
  const whatsappHref = WHATSAPP_CONFIG.getUrl();

  return (
    <section
      id="inmobiliario"
      aria-label="Derecho Inmobiliario y Registral - Lawcrest Legal Group"
      className="relative w-full bg-[#062446] text-[#FFFFFF] py-16 sm:py-20 lg:py-28 overflow-hidden scroll-mt-20 border-b border-[#173C68]"
    >
      {/* Sutil textura arquitectónica de fondo (líneas geométricas tenues) */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 w-96 h-96 opacity-[0.04] overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect x="20" y="20" width="260" height="260" stroke="#C89A32" strokeWidth="1" />
          <line x1="20" y1="20" x2="280" y2="280" stroke="#C89A32" strokeWidth="0.8" />
          <line x1="150" y1="20" x2="150" y2="280" stroke="#C89A32" strokeWidth="0.8" />
        </svg>
      </div>

      <Container size="default">
        {/* COMPOSICIÓN DIVIDIDA: Imagen a la izquierda (desktop), Contenido a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* COLUMNA DE IMAGEN: Desktop izquierda / Mobile al final */}
          <div className="order-last lg:order-first lg:col-span-5 xl:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Elemento editorial discreto: "SEGURIDAD JURÍDICA" */}
              <div className="flex items-center gap-2.5 mb-3.5 text-xs font-sans tracking-widest uppercase text-[#D8B65A] select-none">
                <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
                <span className="tracking-[0.2em] font-medium text-[11px]">SEGURIDAD JURÍDICA</span>
              </div>

              {/* Fotografía limpia sin marcos */}
              <div className="relative overflow-hidden aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] w-full shadow-lg">
                <img
                  src={realEstateShowcaseImg}
                  srcSet={`${realEstateShowcaseImg500} 500w, ${realEstateShowcaseImg800} 800w, ${realEstateShowcaseImg} 896w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  alt="Propiedad residencial exclusiva y desarrollo inmobiliario en Punta Cana, República Dominicana"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

            </div>
          </div>

          {/* LÍNEA SEPARADORA VERTICAL EDITORIAL (Solo visible en Desktop amplio) */}
          {/* COLUMNA DE CONTENIDO TEXTUAL: Desktop derecha / Mobile primero */}
          <div className="order-first lg:order-last lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left">
            
            {/* 1. EYEBROW */}
            <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
              <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
              <span className="font-sans font-semibold text-xs sm:text-[13px] tracking-[0.22em] text-[#D8B65A] uppercase">
                DERECHO INMOBILIARIO Y REGISTRAL
              </span>
            </div>

            {/* 2. TÍTULO */}
            <h2 className="font-serif font-normal text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.16] tracking-tight mb-5 sm:mb-6 [text-wrap:balance]">
              Protegemos sus decisiones inmobiliarias desde el primer paso.
            </h2>

            {/* 3. TEXTOS EXPLICATIVOS */}
            <div className="space-y-4 mb-8 sm:mb-9 text-white/80 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Una inversión inmobiliaria representa una decisión importante. En Lawcrest Legal Group acompañamos a nuestros clientes en el análisis y gestión legal de sus operaciones, procurando que cada decisión esté respaldada por la debida seguridad jurídica.
              </p>
              <p className="text-white/70">
                Brindamos asesoría a propietarios, compradores, inversionistas y desarrolladores que necesitan orientación legal para realizar operaciones inmobiliarias en República Dominicana.
              </p>
            </div>

            {/* 4. ÁREAS DE ACOMPAÑAMIENTO */}
            <div className="mb-8 sm:mb-10 pt-6 border-t border-[#173C68]">
              <span className="text-xs font-sans font-semibold tracking-widest uppercase text-[#D8B65A] block mb-4 select-none">
                Áreas de acompañamiento legal
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/85 font-sans">
                {PRACTICE_AREAS.map((area, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span
                      className="text-[#C89A32] text-sm leading-none shrink-0 mt-1 select-none"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span className="leading-snug">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. CTA & MENSAJE PARA CLIENTES INTERNACIONALES */}
            <div className="pt-6 border-t border-[#173C68] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <span className="font-serif text-lg sm:text-xl text-white font-normal">
                  Conversemos sobre su inversión
                </span>

                <a
                  href={whatsappHref}
                  target={whatsappHref.startsWith('http') ? '_blank' : '_self'}
                  rel={whatsappHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="
                    inline-flex items-center justify-center font-sans font-semibold
                    text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap
                    px-7 py-3.5 min-h-[46px] rounded-[2px]
                    text-[#031A39] bg-[#C89A32]
                    hover:bg-[#D8B65A] active:bg-[#C89A32]
                    border border-[#D8B65A]
                    transition-all duration-200 ease-out cursor-pointer
                    shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-white
                    text-center w-full sm:w-auto shrink-0
                  "
                >
                  <span>Solicitar consulta</span>
                </a>
              </div>

              {/* Mensaje complementario para clientes internacionales */}
              <p className="text-white/60 text-xs sm:text-[13px] font-sans leading-relaxed pt-1">
                Atendemos clientes nacionales e internacionales interesados en invertir, adquirir propiedades o realizar negocios en República Dominicana.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
