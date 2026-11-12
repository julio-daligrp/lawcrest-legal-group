import React, { useCallback, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { dictionary } from './parts';
import { I18nContext } from './context';
import type { I18nValue } from './context';
import type { Lang } from './types';

export const LANGUAGES: Lang[] = ['en', 'es'];

/** Idioma por defecto del sitio: inglés. */
export const DEFAULT_LANG: Lang = 'en';

/** Prefijo de URL de la versión en español. */
export const ES_PREFIX = '/es';

/** Elimina el prefijo /es de una ruta interna. */
export const stripLang = (pathname: string): string => {
  if (pathname === ES_PREFIX) return '/';
  if (pathname.startsWith(`${ES_PREFIX}/`)) return pathname.slice(ES_PREFIX.length);
  return pathname;
};

/** Determina el idioma a partir de la ruta actual. */
export const detectLang = (pathname: string): Lang =>
  pathname === ES_PREFIX || pathname.startsWith(`${ES_PREFIX}/`) ? 'es' : DEFAULT_LANG;

/**
 * Proveedor de idioma. El idioma se deduce de la URL:
 * las rutas sin prefijo están en inglés y las que empiezan por /es en español.
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const lang = detectLang(pathname);

  // Mantiene el atributo lang del documento sincronizado con el idioma activo.
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string): string => {
      const entry = dictionary[key];
      if (!entry) {
        console.warn(`[i18n] Clave ausente en el diccionario: ${key}`);
        return key;
      }
      return entry[lang] ?? entry.en ?? key;
    },
    [lang]
  );

  const link = useCallback(
    (path: string): string => {
      if (!path.startsWith('/')) return path;
      if (lang !== 'es') return path;
      if (path === '/') return ES_PREFIX;
      return `${ES_PREFIX}${path}`;
    },
    [lang]
  );

  const switchTo = useCallback(
    (target: Lang): string => {
      const base = stripLang(pathname);
      if (target === 'es') return base === '/' ? ES_PREFIX : `${ES_PREFIX}${base}`;
      return base;
    },
    [pathname]
  );

  const value = useMemo(
    () => ({ lang, t, link, switchTo }),
    [lang, t, link, switchTo]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

/** Acceso al contexto de idioma. */
export const useI18n = (): I18nValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n debe usarse dentro de LanguageProvider');
  return ctx;
};
