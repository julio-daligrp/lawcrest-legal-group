import { useEffect } from 'react';
import { dictionary } from '@/src/i18n/parts';
import { useI18n } from '@/src/i18n';

/**
 * Establece el título del documento para la página actual.
 * Acepta una clave del diccionario (p. ej. 'pages.home.title') o un título literal.
 */
export const useDocumentTitle = (titleKey: string): void => {
  const { lang } = useI18n();

  useEffect(() => {
    const entry = dictionary[titleKey];
    document.title = entry ? entry[lang] ?? entry.en : titleKey;
  }, [lang, titleKey]);
};
