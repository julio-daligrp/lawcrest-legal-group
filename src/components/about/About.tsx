import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { useI18n } from '@/src/i18n';
import { ArrowRight, Users, Scale, Compass, Lock } from 'lucide-react';

interface Principle {
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  descriptionKey: string;
}

const PRINCIPLES: Principle[] = [
  {
    icon: Users,
    titleKey: 'about.principle1.title',
    descriptionKey: 'about.principle1.description',
  },
  {
    icon: Scale,
    titleKey: 'about.principle2.title',
    descriptionKey: 'about.principle2.description',
  },
  {
    icon: Compass,
    titleKey: 'about.principle3.title',
    descriptionKey: 'about.principle3.description',
  },
  {
    icon: Lock,
    titleKey: 'about.principle4.title',
    descriptionKey: 'about.principle4.description',
  },
];

/** Sección "Quiénes somos": presentación de la firma y sus principios. */
export const About: React.FC = () => {
  const { t, link } = useI18n();

  return (
    <section
      id="quienes-somos"
      aria-label={t('about.ariaLabel')}
      className="relative w-full bg-[#FFFFFF] text-[#062446] py-20 sm:py-24 lg:py-28 border-b border-[#062446]/8 scroll-mt-20 overflow-hidden"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* COLUMNA IZQUIERDA: Imagen de la firma */}
          <div className="lg:col-span-6 order-1">
            <div className="relative">
              <div className="relative overflow-hidden aspect-[2/3] w-full bg-[#031A39] border border-[#062446]/10">
                <img
                  src={`${import.meta.env.BASE_URL}images/OFC.webp`}
                  alt={t('about.imageAlt')}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Detalle decorativo en ángulo (acento dorado) */}
              <div
                className="pointer-events-none absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-[#C89A32]/50 hidden sm:block"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: Narrativa de la firma */}
          <div className="lg:col-span-6 order-2">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
              <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
                {t('about.eyebrow')}
              </span>
            </div>

            <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[44px] leading-[1.16] tracking-tight mb-5 [text-wrap:balance]">
              {t('about.title')}
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal mb-4">
              {t('about.body1')}
            </p>

            <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal">
              {t('about.body2')}
            </p>

            {/* Principios de la firma */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-10">
              {PRINCIPLES.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.titleKey} className="flex items-start gap-3.5">
                    <span className="shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#C89A32]" />
                    </span>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-medium text-[#062446] tracking-tight mb-0.5">
                        {t(principle.titleKey)}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#062446]/70 leading-relaxed">
                        {t(principle.descriptionKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enlace a la página de la firma */}
            <div className="mt-10">
              <Link
                to={link('/empresas-inversionistas')}
                className="
                  inline-flex items-center gap-2 font-sans font-medium
                  text-xs sm:text-sm tracking-widest uppercase
                  px-7 py-3.5 min-h-[46px] rounded-[2px]
                  text-[#062446] bg-transparent border border-[#062446]/20
                  hover:border-[#C89A32] hover:bg-[#062446] hover:text-[#FFFFFF]
                  transition-all duration-200 ease-out cursor-pointer group
                "
              >
                <span>{t('about.cta')}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
