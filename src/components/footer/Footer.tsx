import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { useI18n } from '@/src/i18n';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import logoImage from '@/src/assets/images/LC-logo-gold-crown.png';

interface FooterLink {
  labelKey: string;
  path: string;
}

/** Enlaces del menú principal del pie de página. */
const MENU_LINKS: FooterLink[] = [
  { labelKey: 'footer.menu.home', path: '/' },
  { labelKey: 'footer.menu.services', path: '/servicios' },
  { labelKey: 'footer.menu.about', path: '/empresas-inversionistas' },
  { labelKey: 'footer.menu.blog', path: '/blog' },
];

/** Áreas de práctica destacadas en el pie de página. */
const PRACTICE_LINKS: FooterLink[] = [
  { labelKey: 'footer.practice.realEstate', path: '/servicios' },
  { labelKey: 'footer.practice.litigation', path: '/servicios' },
  { labelKey: 'footer.practice.corporate', path: '/servicios' },
  { labelKey: 'footer.practice.contracts', path: '/servicios' },
  { labelKey: 'footer.practice.debtCollection', path: '/servicios' },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { t, link } = useI18n();

  const whatsappHref = WHATSAPP_CONFIG.getUrl(t('footer.whatsappMessage'));
  const isExternalWhatsapp = whatsappHref.startsWith('http');
  const contactHref = isExternalWhatsapp
    ? whatsappHref
    : whatsappHref.startsWith('#')
      ? link('/contacto')
      : link(whatsappHref);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      id="pie-de-pagina"
      aria-label={t('footer.ariaLabel')}
      className="relative w-full bg-[#031A39] text-[#FFFFFF] pt-16 sm:pt-20 lg:pt-24 pb-12 border-t border-[#173C68]"
    >
      <Container size="default">
        {/* FILA SUPERIOR: Logo / Descripción a la izquierda y Suscripción al Boletín a la derecha */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16 pb-12 sm:pb-16">

          {/* Lado Izquierdo: Identidad y Síntesis */}
          <div className="max-w-md">
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src={logoImage}
                alt="Lawcrest Legal Group"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_1px_3px_rgba(200,154,50,0.3)]"
                loading="lazy"
              />
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-normal max-w-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Lado Derecho: Suscripción a Boletín Informativo (Estilo exacto de la referencia) */}
          <div className="w-full lg:max-w-md xl:max-w-lg">
            <span className="block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-white mb-4">
              {t('footer.newsletter.title')}
            </span>

            {subscribed ? (
              <div className="p-4 bg-[#062446] border border-[#C89A32]/60 text-xs font-sans text-[#D8B65A] tracking-wide">
                {t('footer.newsletter.success')}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch border border-[#173C68] bg-[#062446]/60">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  required
                  className="
                    flex-1 px-4 sm:px-5 py-3.5 bg-transparent text-white placeholder-white/40
                    font-sans text-xs sm:text-[13px] tracking-wider uppercase focus:outline-none
                    min-h-[48px]
                  "
                />
                <button
                  type="submit"
                  className="
                    px-7 py-3.5 bg-[#C89A32] hover:bg-[#D8B65A] active:bg-[#C89A32]
                    text-[#031A39] font-sans font-semibold text-xs tracking-[0.18em] uppercase
                    transition-colors duration-200 cursor-pointer min-h-[48px] shrink-0
                  "
                >
                  {t('footer.newsletter.submit')}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* LÍNEA DIVISORIA HORIZONTAL FINA */}
        <div className="w-full h-[1px] bg-[#173C68] mb-12 sm:mb-16" aria-hidden="true" />

        {/* FILA INFERIOR: Columnas de Enlaces y Contacto (Estilo exacto de la referencia) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 mb-16">

          {/* Columna Menú Principal */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-white mb-5 select-none">
              {t('footer.menu.title')}
            </span>
            <ul className="space-y-3 font-sans text-xs tracking-wider uppercase text-white/70">
              {MENU_LINKS.map((item) => (
                <li key={item.labelKey}>
                  <Link to={link(item.path)} className="hover:text-[#D8B65A] transition-colors duration-200">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Áreas de Práctica */}
          <div className="lg:col-span-5 space-y-4">
            <span className="block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-white mb-5 select-none">
              {t('footer.practice.title')}
            </span>
            <ul className="space-y-3 font-sans text-xs tracking-wider uppercase text-white/70">
              {PRACTICE_LINKS.map((item) => (
                <li key={item.labelKey}>
                  <Link to={link(item.path)} className="hover:text-[#D8B65A] transition-colors duration-200">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Contacto & Ubicación */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 space-y-4">
            <span className="block font-sans font-semibold text-xs tracking-[0.2em] uppercase text-white mb-5 select-none">
              {t('footer.contact.title')}
            </span>
            <div className="space-y-3 font-sans text-xs tracking-wider uppercase text-white/70">
              <div>
                {isExternalWhatsapp ? (
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D8B65A] transition-colors duration-200 block text-white/90 font-medium"
                  >
                    {t('footer.contact.directConsultation')}
                  </a>
                ) : (
                  <Link
                    to={contactHref}
                    className="hover:text-[#D8B65A] transition-colors duration-200 block text-white/90 font-medium"
                  >
                    {t('footer.contact.directConsultation')}
                  </Link>
                )}
              </div>
              <div>
                <span className="text-white/50 block text-[11px] mb-0.5">{t('footer.contact.primaryLocation')}</span>
                <span className="block text-white/80 normal-case tracking-normal leading-relaxed">
                  {t('footer.contact.address')}
                </span>
              </div>
              <div className="pt-1">
                <span className="text-white/50 block text-[11px] mb-0.5">{t('footer.contact.clientService')}</span>
                <span className="text-white/80">{t('footer.contact.hours')}</span>
              </div>
              <div>
                <span className="text-white/50 block text-[11px] mb-0.5">{t('footer.contact.emailLabel')}</span>
                <a
                  href="mailto:contacto@lawcrestlegalgroup.com"
                  className="text-white/80 hover:text-[#D8B65A] transition-colors duration-200 normal-case tracking-normal break-all"
                >
                  contacto@lawcrestlegalgroup.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BARRA INFERIOR: Derechos y Avisos Legales */}
        <div className="pt-8 border-t border-[#173C68] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <p>{t('footer.copyright')}</p>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase">
            <Link to={link('/aviso-legal')} className="hover:text-[#D8B65A] transition-colors duration-200">
              {t('footer.legal.notice')}
            </Link>
            <span>·</span>
            <Link to={link('/confidencialidad')} className="hover:text-[#D8B65A] transition-colors duration-200">
              {t('footer.legal.privacy')}
            </Link>
          </div>
        </div>

      </Container>
    </footer>
  );
};
