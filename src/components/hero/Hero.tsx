import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import sldImage from '@/src/assets/images/Sld.png';
import sldImage600 from '@/src/assets/images/Sld-600.png';
import sldImage900 from '@/src/assets/images/Sld-900.png';

export const Hero: React.FC = () => {
  const whatsappHref = WHATSAPP_CONFIG.getUrl();
  const isExternalWhatsapp = whatsappHref.startsWith('http');
  const contactHref = isExternalWhatsapp
    ? whatsappHref
    : whatsappHref.startsWith('#')
      ? '/contacto'
      : whatsappHref;

  return (
    <section
      id="inicio"
      aria-label="Presentación principal de Lawcrest Legal Group"
      className="relative w-full bg-[#F7F7F5] pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 border-b border-[#062446]/8 overflow-visible"
    >
      <Container size="default">
        {/* CARD PRINCIPAL: Fondo blanco con border-radius 0 y líneas sobrias */}
        <div className="relative w-full rounded-none bg-[#FFFFFF] border border-[#062446]/10 shadow-[0_15px_50px_-15px_rgba(6,36,70,0.08)] overflow-visible">
          
          {/* Sutil halo cálido en esquinas */}
          <div
            className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#C89A32]/4 rounded-none blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-[#173C68]/3 rounded-none blur-2xl"
            aria-hidden="true"
          />

          {/* GRID: Columna izquierda (Contenido) y Columna derecha (Hombre que sobresale) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] items-stretch rounded-none">
            
            {/* ================= COLUMNA IZQUIERDA: CONTENIDO EDITORIAL ================= */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-between z-10 rounded-none">
              
              {/* Bloque Superior: H1 y Descripción */}
              <div>
                {/* Gran Titular Serif con estilo del diseño */}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] leading-[1.08] tracking-tight text-[#062446] mb-4 sm:mb-6 [text-wrap:balance]">
                  Soluciones legales,{' '}
                  <span className="font-serif italic font-normal text-[#C89A32] underline-offset-4 decoration-[#C89A32]/30">
                    estratégicas
                  </span>
                </h1>

                {/* Subtítulo / Descripción concisa */}
                <p className="font-sans text-sm sm:text-base lg:text-lg text-[#062446]/80 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal">
                  Asesoría y representación jurídica de alto nivel para personas, empresas e
                  inversionistas en Bávaro–Punta Cana y toda la República Dominicana.
                </p>

                {/* Botones de Acción */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10">
                  {/* Botón Primario: Azul Marino con detalle dorado */}
                  {isExternalWhatsapp ? (
                    <a
                      href={contactHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center font-sans font-medium text-xs sm:text-sm
                        tracking-wider uppercase px-6 sm:px-7 py-3 min-h-[46px] rounded-none
                        text-[#FFFFFF] bg-[#062446] border border-[#C89A32]/70
                        hover:bg-[#031A39] hover:border-[#D8B65A] active:bg-[#031A39]
                        transition-all duration-200 ease-out cursor-pointer
                        shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#C89A32]
                      "
                    >
                      <span>Solicitar consulta</span>
                    </a>
                  ) : (
                    <Link
                      to={contactHref}
                      className="
                        inline-flex items-center justify-center font-sans font-medium text-xs sm:text-sm
                        tracking-wider uppercase px-6 sm:px-7 py-3 min-h-[46px] rounded-none
                        text-[#FFFFFF] bg-[#062446] border border-[#C89A32]/70
                        hover:bg-[#031A39] hover:border-[#D8B65A] active:bg-[#031A39]
                        transition-all duration-200 ease-out cursor-pointer
                        shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#C89A32]
                      "
                    >
                      <span>Solicitar consulta</span>
                    </Link>
                  )}

                  {/* Botón Secundario: Contorno con borde fino */}
                  <Link
                    to="/servicios"
                    className="
                      inline-flex items-center justify-center font-sans font-medium text-xs sm:text-sm
                      tracking-wider uppercase px-6 sm:px-7 py-3 min-h-[46px] rounded-none
                      text-[#062446] bg-transparent border border-[#062446]/20 hover:border-[#C89A32]
                      hover:bg-[#062446] hover:text-[#FFFFFF] active:bg-[#031A39]
                      transition-all duration-200 ease-out cursor-pointer
                      focus-visible:ring-2 focus-visible:ring-[#C89A32]
                    "
                  >
                    <span>Nuestros servicios</span>
                  </Link>
                </div>
              </div>

              {/* Bloque Inferior: 3 Pilares / Métricas con líneas divisorias */}
              <div className="pt-6 border-t border-[#062446]/10">
                <div className="flex items-center gap-6 sm:gap-8 lg:gap-10">
                  <div>
                    <span className="block font-serif text-xl sm:text-2xl font-bold text-[#062446] tracking-tight leading-none mb-1">
                      Bávaro
                    </span>
                    <span className="block font-sans text-[11px] sm:text-xs text-[#062446]/70 font-medium">
                      Punta Cana · RD
                    </span>
                  </div>

                  <div className="w-[1px] h-8 bg-[#062446]/15" aria-hidden="true" />

                  <div>
                    <span className="block font-serif text-xl sm:text-2xl font-bold text-[#062446] tracking-tight leading-none mb-1">
                      Inmobiliario
                    </span>
                    <span className="block font-sans text-[11px] sm:text-xs text-[#062446]/70 font-medium">
                      Práctica Principal
                    </span>
                  </div>

                  <div className="w-[1px] h-8 bg-[#062446]/15" aria-hidden="true" />

                  <div>
                    <span className="block font-serif text-xl sm:text-2xl font-bold text-[#062446] tracking-tight leading-none mb-1">
                      Boutique
                    </span>
                    <span className="block font-sans text-[11px] sm:text-xs text-[#062446]/70 font-medium">
                      Atención Exclusiva
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* ================= COLUMNA DERECHA: IMAGEN QUE SOBRESALE ================= */}
            <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end overflow-visible pt-10 sm:pt-14 lg:pt-0 rounded-none">
              
              {/* Contenedor del hombre: sobresale por arriba de la tarjeta */}
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[114%] lg:-mt-[14%] xl:h-[118%] xl:-mt-[18%] flex items-end justify-center lg:justify-end overflow-visible z-20 pointer-events-none">
                <img
                  src={sldImage}
                  srcSet={`${sldImage600} 600w, ${sldImage900} 900w, ${sldImage} 1024w`}
                  sizes="(max-width: 640px) 380px, (max-width: 1024px) 480px, 640px"
                  alt="Asesoría legal estratégica de Lawcrest Legal Group"
                  className="w-auto h-full max-h-[580px] lg:max-h-[660px] xl:max-h-[720px] object-contain object-bottom select-none drop-shadow-[0_20px_35px_rgba(6,36,70,0.14)] filter"
                  loading="eager"
                  decoding="async"
                />
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
