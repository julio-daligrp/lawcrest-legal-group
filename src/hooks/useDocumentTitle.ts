import { useEffect } from 'react';

/** Establece el título del documento para la página actual. */
export const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
