import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { ChevronRight } from 'lucide-react';
import { useDocumentTitle } from '@/src/hooks/useDocumentTitle';

export interface PageHeaderProps {
  /** Título principal de la página (h1). */
  title: string;
  /** Descripción opcional de apoyo. */
  description?: string;
  /** Etiqueta de la página actual en la ruta de navegación. */
  breadcrumb: string;
}

/**
 * Encabezado estándar para las páginas secundarias.
 * Mantiene la identidad editorial del sitio (azul marino + acento dorado).
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  breadcrumb,
}) => {
  useDocumentTitle(`${breadcrumb} | Lawcrest Legal Group`);

  return (
    <section
      aria-label={`${breadcrumb} - Lawcrest Legal Group`}
      className="relative w-full bg-[#031A39] text-[#FFFFFF] pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 border-b border-[#173C68] overflow-hidden"
    >
      {/* Halo cálido de fondo */}
      <div
        className="pointer-events-none absolute -top-32 right-0 w-[560px] h-[560px] rounded-full bg-[#C89A32]/6 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-[#173C68]/25 blur-3xl"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10">
        {/* Ruta de navegación (breadcrumb) */}
        <nav
          aria-label="Ruta de navegación"
          className="flex items-center flex-wrap gap-2 text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-white/50 mb-6"
        >
          <Link to="/" className="hover:text-[#D8B65A] transition-colors duration-200">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C89A32] shrink-0" aria-hidden="true" />
          <span className="text-[#D8B65A]">{breadcrumb}</span>
        </nav>

        <h1 className="font-serif font-normal text-white text-3xl sm:text-4xl lg:text-[52px] leading-[1.12] tracking-tight mb-4 max-w-4xl [text-wrap:balance]">
          {title}
        </h1>

        {description && (
          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
};
