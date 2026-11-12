import React, { useState } from 'react';
import { Container } from '@/src/components/ui/Container';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import { useI18n } from '@/src/i18n';
import clientAvatar1 from '@/src/assets/images/testimonial_client_1_1791472739328.jpg';
import clientAvatar2 from '@/src/assets/images/testimonial_client_2_1791472760247.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  /** Clave del diccionario para la cita del cliente. */
  quoteKey: string;
  /** Nombre del cliente (nombre propio: no se traduce). */
  author: string;
  /** Clave del diccionario para el cargo del cliente. */
  roleKey: string;
  avatar: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'carlos-mendez',
    quoteKey: 'testimonials.items.carlos-mendez.quote',
    author: 'CARLOS MÉNDEZ',
    roleKey: 'testimonials.items.carlos-mendez.role',
    avatar: clientAvatar1,
  },
  {
    id: 'elena-rostova',
    quoteKey: 'testimonials.items.elena-rostova.quote',
    author: 'ELENA ROSTOVA',
    roleKey: 'testimonials.items.elena-rostova.role',
    avatar: clientAvatar2,
  },
  {
    id: 'roberto-salcedo',
    quoteKey: 'testimonials.items.roberto-salcedo.quote',
    author: 'ROBERTO SALCEDO',
    roleKey: 'testimonials.items.roberto-salcedo.role',
    avatar: clientAvatar1,
  },
];

export const Testimonials: React.FC = () => {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const whatsappHref = WHATSAPP_CONFIG.getUrl(t('testimonials.whatsappMessage'));

  const current = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section
      id="testimonios"
      aria-label={t('testimonials.ariaLabel')}
      className="relative w-full bg-[#F7F7F5] py-20 sm:py-24 lg:py-28 border-b border-[#062446]/8 scroll-mt-20 overflow-hidden"
    >
      <Container size="default">
        {/* COMPOSICIÓN EDITORIAL: Columna Izquierda (Texto & CTA) / Columna Derecha (Tarjeta Testimonial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Encabezado y Acción */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Línea dorada de acento */}
            <div className="w-12 h-[2px] bg-[#C89A32] mb-4" aria-hidden="true" />

            {/* Eyebrow */}
            <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#062446]/80 uppercase mb-3 block">
              {t('testimonials.eyebrow')}
            </span>

            {/* Título Principal */}
            <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[46px] leading-[1.14] tracking-tight mb-5 [text-wrap:balance]">
              {t('testimonials.title')}
            </h2>

            {/* Párrafo explicativo */}
            <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed mb-8 max-w-md font-normal">
              {t('testimonials.description')}
            </p>

            {/* Botón de Contacto Dorado */}
            <div>
              <a
                href={whatsappHref}
                target={whatsappHref.startsWith('http') ? '_blank' : '_self'}
                rel={whatsappHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="
                  inline-flex items-center justify-center font-sans font-semibold
                  text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap
                  px-8 py-4 min-h-[48px] rounded-none
                  text-[#FFFFFF] bg-[#C89A32]
                  hover:bg-[#D8B65A] active:bg-[#C89A32]
                  transition-all duration-200 ease-out cursor-pointer
                  shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#062446]
                "
              >
                <span>{t('testimonials.cta')}</span>
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA: Tarjeta de Testimonio (Estilo exacto de la referencia) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative bg-[#FFFFFF] p-8 sm:p-12 lg:p-14 border border-[#062446]/10 shadow-[0_15px_45px_-15px_rgba(6,36,70,0.06)] rounded-none">
              
              {/* Cita con línea vertical dorada */}
              <div className="border-l-2 border-l-[#C89A32] pl-6 sm:pl-8 mb-8 sm:mb-10">
                <p className="font-sans text-sm sm:text-base lg:text-[17px] text-[#062446]/85 leading-relaxed font-normal">
                  “{t(current.quoteKey)}”
                </p>
              </div>

              {/* Fila del autor: Avatar, Nombre, Cargo y Controles de navegación */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-[#062446]/8">
                
                {/* Perfil del cliente */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-[#C89A32]/40 shrink-0 shadow-2xs bg-[#F7F7F5]">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <span className="block font-sans font-semibold text-sm sm:text-base text-[#062446] tracking-wider uppercase leading-snug">
                      {current.author}
                    </span>
                    <span className="block font-sans text-xs tracking-wider text-[#C89A32] font-medium uppercase mt-0.5">
                      {t(current.roleKey)}
                    </span>
                  </div>
                </div>

                {/* Controles de cambio de testimonio discretos */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={handlePrev}
                    aria-label={t('testimonials.prev')}
                    className="w-9 h-9 border border-[#062446]/15 hover:border-[#C89A32] text-[#062446] hover:text-[#C89A32] flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label={t('testimonials.next')}
                    className="w-9 h-9 border border-[#062446]/15 hover:border-[#C89A32] text-[#062446] hover:text-[#C89A32] flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
