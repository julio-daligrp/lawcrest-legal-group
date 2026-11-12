/** Tipos del sistema de internacionalización. */

export type Lang = 'en' | 'es';

export interface Entry {
  /** Texto en inglés (idioma por defecto del sitio). */
  en: string;
  /** Texto en español. */
  es: string;
}

export type Dictionary = Record<string, Entry>;
