import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useI18n } from '@/src/i18n';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import { Menu, X } from 'lucide-react';

interface NavItem {
  labelKey: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'nav.services', path: '/servicios' },
  { labelKey: 'nav.about', path: '/empresas-inversionistas' },
  { labelKey: 'nav.blog', path: '/blog' },
  { labelKey: 'nav.contact', path: '/contacto' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { t, link } = useI18n();

  // Detect scroll state with hysteresis
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const whatsappHref = WHATSAPP_CONFIG.getUrl(t('nav.whatsappMessage'));
  const isExternalWhatsapp = whatsappHref.startsWith('http');
  const ctaHref = isExternalWhatsapp
    ? whatsappHref
    : whatsappHref.startsWith('#')
      ? '/contacto'
      : whatsappHref;

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? 'h-[78px] bg-[#031A39]/95 backdrop-blur-md shadow-[0_2px_18px_-4px_rgba(0,0,0,0.45)] border-b border-[#C89A32]/25'
            : 'h-[92px] sm:h-[96px] bg-[#062446] border-b border-[#C89A32]/15'
        }
      `}
    >
      <Container size="default" padding="header" className="h-full flex items-center justify-between">
        {/* ÁREA IZQUIERDA: Logo Lawcrest Legal Group */}
        <div className="flex items-center shrink-0 pr-4">
          <Logo
            variant="dark"
            size={isScrolled ? 'compact' : 'default'}
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>

        {/* ÁREA CENTRO: Menú Principal Desktop / Laptop */}
        <nav
          className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 2xl:gap-8 h-full"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={link(item.path)}
                className={`
                  group relative py-2 font-sans font-medium text-xs lg:text-[13px] xl:text-[14px]
                  tracking-normal whitespace-nowrap transition-colors duration-200 select-none
                  ${active ? 'text-[#D8B65A]' : 'text-white/85 hover:text-[#D8B65A]'}
                `}
              >
                <span>{t(item.labelKey)}</span>

                {/* Indicador de página activa o hover sutil con dorado #C89A32 */}
                <span
                  className={`
                    absolute bottom-0 left-0 w-full h-[2px] bg-[#C89A32] transition-transform duration-200 ease-out origin-left
                    ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 opacity-80'}
                  `}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* ÁREA DERECHA: Selector de idioma y Botón CTA Desktop / Laptop */}
        <div className="hidden lg:flex items-center gap-6 pl-4 shrink-0">
          <LanguageSwitcher />
          {isExternalWhatsapp ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative inline-flex items-center justify-center font-sans font-medium
                text-xs xl:text-[13px] tracking-wider uppercase whitespace-nowrap
                px-5 xl:px-6 py-2.5 min-h-[42px] xl:min-h-[44px]
                rounded-[2px] text-[#062446] bg-[#C89A32]
                border border-[#C89A32] hover:border-[#D8B65A]
                hover:bg-[#D8B65A] active:bg-[#C89A32]
                transition-all duration-200 ease-out cursor-pointer
                shadow-xs hover:shadow-sm focus-visible:ring-2 focus-visible:ring-[#C89A32]
              `}
            >
              <span>{t('nav.cta')}</span>
            </a>
          ) : (
            <Link
              to={ctaHref}
              className={`
                relative inline-flex items-center justify-center font-sans font-medium
                text-xs xl:text-[13px] tracking-wider uppercase whitespace-nowrap
                px-5 xl:px-6 py-2.5 min-h-[42px] xl:min-h-[44px]
                rounded-[2px] text-[#062446] bg-[#C89A32]
                border border-[#C89A32] hover:border-[#D8B65A]
                hover:bg-[#D8B65A] active:bg-[#C89A32]
                transition-all duration-200 ease-out cursor-pointer
                shadow-xs hover:shadow-sm focus-visible:ring-2 focus-visible:ring-[#C89A32]
              `}
            >
              <span>{t('nav.cta')}</span>
            </Link>
          )}
        </div>

        {/* BOTÓN HAMBURGUESA: Mobile / Tablet (< lg) */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 -mr-2 text-white/90 hover:text-[#D8B65A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A32] rounded-[2px] transition-colors duration-200 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.75]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.75]" />
            )}
          </button>
        </div>
      </Container>

      {/* PANEL DESPLEGABLE MOBILE / TABLET */}
      <div
        className={`
          lg:hidden fixed inset-x-0 top-[78px] sm:top-[96px] bottom-0 z-40
          bg-[#062446] text-[#FFFFFF] overflow-y-auto transition-all duration-300 ease-in-out
          ${
            mobileMenuOpen
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-2'
          }
        `}
        style={{
          height: isScrolled ? 'calc(100vh - 78px)' : 'calc(100vh - 96px)',
        }}
      >
        <div className="flex flex-col min-h-full justify-between p-6 sm:p-8 max-w-lg mx-auto">
          {/* Enlaces de Navegación Mobile */}
          <nav className="flex flex-col space-y-1 pt-2">
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#D8B65A] mb-4">
              {t('nav.navigation')}
            </span>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={link(item.path)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center justify-between py-3.5 px-3 rounded-[2px]
                    font-sans text-base transition-colors duration-150 border-b border-[#173C68]/40
                    ${
                      active
                        ? 'text-[#FFFFFF] bg-[#031A39] border-l-2 border-l-[#C89A32]'
                        : 'text-[#FFFFFF]/90 hover:text-[#FFFFFF] hover:bg-[#173C68]/30'
                    }
                  `}
                >
                  <span className={active ? 'font-medium text-[#D8B65A]' : 'font-normal'}>
                    {t(item.labelKey)}
                  </span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C89A32]" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Sección Inferior Mobile: Botón CTA y Metadatos de la Firma */}
          <div className="pt-8 pb-4 space-y-6">
            <div className="w-full">
              {isExternalWhatsapp ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    w-full flex items-center justify-center font-sans font-medium text-sm
                    tracking-wider uppercase px-6 py-3.5 min-h-[48px] rounded-[2px]
                    text-[#FFFFFF] bg-[#031A39] border border-[#C89A32]
                    hover:bg-[#173C68] active:bg-[#031A39]
                    transition-colors duration-200 cursor-pointer text-center shadow-xs
                  `}
                >
                  <span>{t('nav.cta')}</span>
                </a>
              ) : (
                <Link
                  to={ctaHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    w-full flex items-center justify-center font-sans font-medium text-sm
                    tracking-wider uppercase px-6 py-3.5 min-h-[48px] rounded-[2px]
                    text-[#FFFFFF] bg-[#031A39] border border-[#C89A32]
                    hover:bg-[#173C68] active:bg-[#031A39]
                    transition-colors duration-200 cursor-pointer text-center shadow-xs
                  `}
                >
                  <span>{t('nav.cta')}</span>
                </Link>
              )}
            </div>

            <div className="text-center pt-3 border-t border-[#173C68]/50 flex flex-col items-center gap-4">
              <LanguageSwitcher />
              <Logo
                variant="light"
                className="mb-2"
                onClick={() => setMobileMenuOpen(false)}
              />
              <p className="text-[11px] font-sans text-white/50 tracking-widest uppercase mt-0.5">
                {t('nav.location')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
