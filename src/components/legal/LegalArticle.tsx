import React from 'react';
import { Container } from '@/src/components/ui/Container';

/** Contenedor editorial para páginas legales (Aviso Legal, Confidencialidad). */
export const LegalArticle: React.FC<{ lastUpdated: string; children: React.ReactNode }> = ({
  lastUpdated,
  children,
}) => (
  <section
    aria-label="Contenido legal - Lawcrest Legal Group"
    className="relative w-full bg-[#FFFFFF] text-[#062446] py-16 sm:py-20 lg:py-24 overflow-hidden"
  >
    <Container size="narrow">
      <p className="font-sans text-[11px] sm:text-xs text-[#062446]/50 tracking-wide mb-10">
        Última actualización: {lastUpdated}
      </p>
      <div className="space-y-10">{children}</div>
    </Container>
  </section>
);

/** Sección con encabezado serif dentro de un documento legal. */
export const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section>
    <h2 className="font-serif font-normal text-[#062446] text-2xl sm:text-3xl leading-snug tracking-tight mb-4 [text-wrap:balance]">
      {title}
    </h2>
    <div className="space-y-3.5">{children}</div>
  </section>
);

/** Párrafo estándar del cuerpo legal. */
export const LegalParagraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal">
    {children}
  </p>
);

/** Lista con viñeta dorada para documentos legales. */
export const LegalList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2.5">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5">
        <span className="w-1.5 h-1.5 bg-[#C89A32] shrink-0 mt-2" aria-hidden="true" />
        <span className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal">
          {item}
        </span>
      </li>
    ))}
  </ul>
);