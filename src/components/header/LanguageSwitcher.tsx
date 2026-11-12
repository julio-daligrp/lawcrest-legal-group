import React from 'react';
import { Link } from 'react-router-dom';
import { LANGUAGES, useI18n } from '@/src/i18n';
import type { Lang } from '@/src/i18n';

/** Etiquetas visibles del selector de idioma. */
const SHORT_LABELS: Record<Lang, string> = { en: 'EN', es: 'ES' };

interface LanguageSwitcherProps {
  className?: string;
  /** Variante clara para fondos oscuros. */
  variant?: 'dark' | 'light';
}

/**
 * Selector de idioma del encabezado: mantiene la página actual y cambia
 * entre la versión en inglés (por defecto) y la versión en español (/es).
 */
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'dark',
}) => {
  const { lang, switchTo, t } = useI18n();

  const activeClass =
    variant === 'light' ? 'text-[#062446]' : 'text-[#D8B65A]';
  const idleClass =
    variant === 'light'
      ? 'text-[#062446]/55 hover:text-[#C89A32]'
      : 'text-white/65 hover:text-[#D8B65A]';
  const separatorClass = variant === 'light' ? 'text-[#062446]/25' : 'text-white/25';

  return (
    <div
      className={`flex items-center gap-1.5 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase select-none ${className}`}
      role="group"
      aria-label={t('nav.language')}
    >
      {LANGUAGES.map((code, index) => (
        <React.Fragment key={code}>
          {index > 0 && (
            <span className={`${separatorClass} select-none`} aria-hidden="true">
              |
            </span>
          )}
          <Link
            to={switchTo(code)}
            className={`transition-colors duration-200 ${
              code === lang ? activeClass : idleClass
            }`}
            aria-current={code === lang ? 'true' : undefined}
            aria-label={code === 'en' ? t('nav.switchToEn') : t('nav.switchToEs')}
          >
            {SHORT_LABELS[code]}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};
