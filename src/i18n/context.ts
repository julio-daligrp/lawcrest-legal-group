import { createContext } from 'react';
import type { Lang } from './types';

export interface I18nValue {
  /** Idioma activo. */
  lang: Lang;
  /** Traduce una clave del diccionario. */
  t: (key: string) => string;
  /** Prepara una ruta interna para el idioma activo. */
  link: (path: string) => string;
  /** Ruta equivalente de la página actual en otro idioma. */
  switchTo: (target: Lang) => string;
}

/**
 * El contexto vive en su propio módulo para que las recargas en caliente de
 * Vite no dupliquen el objeto (y el Provider y los consumidores compartan
 * siempre la misma instancia).
 */
export const I18nContext = createContext<I18nValue | null>(null);
