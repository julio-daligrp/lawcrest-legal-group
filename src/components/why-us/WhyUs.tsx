import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import { useI18n } from '@/src/i18n';
import { ArrowRight } from 'lucide-react';
import logoImage from '@/src/assets/images/LC-logo-gold-crown.png';

interface Differentiator {
  number: string;
  titleKey: string;
  descriptionKey: string;
  highlightKey: string;
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    number: '01',
    titleKey: 'whyus.item1.title',
    highlightKey: 'whyus.item1.highlight',
    descriptionKey: 'whyus.item1.description',
  },
  {
    number: '02',
    titleKey: 'whyus.item2.title',
    highlightKey: 'whyus.item2.highlight',
    descriptionKey: 'whyus.item2.description',
  },
  {
    number: '03',
    titleKey: 'whyus.item3.title',
    highlightKey: 'whyus.item3.highlight',
    descriptionKey: 'whyus.item3.description',
  },
  {
    number: '04',
    titleKey: 'whyus.item4.title',
    highlightKey: 'whyus.item4.highlight',
    descriptionKey: 'whyus.item4.description',
  },
];

export const WhyUs: React.FC = () => {
  const { t, link } = useI18n();
  const whatsappHref = WHATSAPP_CONFIG.getUrl(t('whyus.whatsappMessage'));
  const isExternalWhatsapp = whatsappHref.startsWith('http');
  const contactHref = isExternalWhatsapp
    ? whatsappHref
    : whatsappHref.startsWith('#')
      ? link('/contacto')
      : whatsappHref;

  return (
    <section
      id="la-firma"
      aria-label={t('whyus.ariaLabel')}
      className="relative w-full bg-[#FFFFFF] text-[#062446] py-20 sm:py-24 lg:py-32 overflow-hidden scroll-mt-20 border-b border-[#062446]/8"
    >
      {/* Halo de luz cálida de fondo para atmósfera premium */}
      <div
        className="pointer-events-none absolute -top-40 right-10 w-[600px] h-[600px] rounded-full bg-[#C89A32]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 w-[500px] h-[500px] rounded-full bg-[#173C68]/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Sutil silueta geométrica abstracta de fondo inspirada en el escudo de Lawcrest */}
      <div
        className="pointer-events-none absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] opacity-[0.05] overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M200 20L360 80V200C360 290 290 365 200 390C110 365 40 290 40 200V80L200 20Z"
            stroke="#C89A32"
            strokeWidth="2"
          />
          <path
            d="M200 60L320 110V200C320 265 270 325 200 345C130 325 80 265 80 200V110L200 60Z"
            stroke="#D8B65A"
            strokeWidth="1.2"
          />
          <line x1="200" y1="60" x2="200" y2="345" stroke="#C89A32" strokeWidth="1" />
          <line x1="120" y1="180" x2="280" y2="180" stroke="#C89A32" strokeWidth="1" />
        </svg>
      </div>

      <Container size="default" className="relative z-10">
        {/* COMPOSICIÓN EDITORIAL EN DOS PARTES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          
          {/* LADO IZQUIERDO: Encabezado, narrativa profunda y frase central */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 lg:sticky lg:top-28">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <span className="w-6 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
                <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
                  {t('whyus.eyebrow')}
                </span>
              </div>

              {/* Título Principal */}
              <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[46px] leading-[1.14] tracking-tight mb-5 [text-wrap:balance]">
                {t('whyus.title')}{' '}
                <span className="font-serif italic text-[#C89A32] font-normal underline-offset-4 decoration-[#C89A32]/40">
                  {t('whyus.titleAccent')}
                </span>
              </h2>

              {/* Texto explicativo */}
              <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed max-w-xl mb-4 font-normal">
                {t('whyus.body')}
              </p>

              {/* Línea de ubicación y alcance */}
              <div className="flex items-center gap-2 text-xs font-sans text-[#062446]/60 select-none">
                <span className="font-medium tracking-wide">{t('whyus.locationBavaro')}</span>
                <span className="text-[#C89A32]" aria-hidden="true">·</span>
                <span className="font-medium tracking-wide">{t('whyus.locationPuntaCana')}</span>
                <span className="text-[#C89A32]" aria-hidden="true">·</span>
                <span className="font-medium tracking-wide">{t('whyus.locationCountry')}</span>
              </div>
            </div>

            {/* Logotipo institucional de la firma */}
            <div className="relative p-8 sm:p-10 bg-[#062446] rounded-none border border-[#C89A32]/25 border-l-2 border-l-[#C89A32] shadow-sm flex items-center justify-center overflow-hidden">
              <img
                src={logoImage}
                alt="Lawcrest Legal Group"
                className="w-auto h-auto max-h-[210px] sm:max-h-[240px] max-w-[190px] sm:max-w-[220px] object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* LADO DERECHO: Los cuatro diferenciadores organizados verticalmente con acabado arquitectónico */}
          <div className="lg:col-span-6 space-y-4">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.number}
                className="
                  p-6 sm:p-7 rounded-none bg-[#F7F7F5] hover:bg-[#FFFFFF]
                  border border-[#062446]/10 hover:border-[#C89A32]/60
                  transition-all duration-200 ease-out group
                "
              >
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-baseline gap-3.5">
                    {/* Número editorial en dorado */}
                    <span className="font-serif text-2xl sm:text-3xl text-[#C89A32] font-normal leading-none shrink-0 select-none">
                      {item.number}
                    </span>
                    
                    {/* Título del pilar */}
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#062446] tracking-wide group-hover:text-[#C89A32] transition-colors duration-200">
                      {t(item.titleKey)}
                    </h3>
                  </div>

                  {/* Subetiqueta descriptiva del pilar */}
                  <span className="hidden sm:inline-block text-[10px] font-sans uppercase tracking-widest text-[#062446]/40 group-hover:text-[#C89A32] transition-colors duration-200">
                    {t(item.highlightKey)}
                  </span>
                </div>

                {/* Descripción alineada con espacio holgado */}
                <p className="font-sans text-xs sm:text-sm text-[#062446]/75 leading-relaxed pl-9 sm:pl-11 font-normal">
                  {t(item.descriptionKey)}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* CTA FINAL DE LA SECCIÓN */}
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-[#062446]/10">
          <div className="bg-[#062446] p-8 sm:p-10 lg:p-12 rounded-none border border-[#C89A32]/40 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest uppercase text-[#D8B65A] block mb-2 select-none">
                {t('whyus.ctaEyebrow')}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-tight mb-2 [text-wrap:balance]">
                {t('whyus.ctaTitle')}
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed mb-1">
                {t('whyus.ctaBody')}
              </p>
              <span className="text-xs font-sans text-white/50 tracking-wide">
                {t('whyus.ctaNote')}
              </span>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              {isExternalWhatsapp ? (
                <a
                  href={contactHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2 font-sans font-medium
                    text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap
                    px-8 py-3.5 min-h-[48px] rounded-none
                    text-[#FFFFFF] bg-[#031A39]
                    border border-[#C89A32] hover:bg-[#173C68] hover:border-[#D8B65A]
                    active:bg-[#031A39]
                    transition-all duration-200 ease-out cursor-pointer
                    shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#C89A32]
                    text-center w-full sm:w-auto group
                  "
                >
                  <span>{t('whyus.ctaButton')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#D8B65A]" />
                </a>
              ) : (
                <Link
                  to={contactHref}
                  className="
                    inline-flex items-center justify-center gap-2 font-sans font-medium
                    text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap
                    px-8 py-3.5 min-h-[48px] rounded-none
                    text-[#FFFFFF] bg-[#031A39]
                    border border-[#C89A32] hover:bg-[#173C68] hover:border-[#D8B65A]
                    active:bg-[#031A39]
                    transition-all duration-200 ease-out cursor-pointer
                    shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#C89A32]
                    text-center w-full sm:w-auto group
                  "
                >
                  <span>{t('whyus.ctaButton')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#D8B65A]" />
                </Link>
              )}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
