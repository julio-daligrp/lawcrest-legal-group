import React from 'react';
import { Container } from '@/src/components/ui/Container';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'inmobiliario',
    title: 'DERECHO INMOBILIARIO Y REGISTRAL',
    description:
      'Asesoría legal para operaciones inmobiliarias, adquisición y transferencia de propiedades, revisión documental y gestiones registrales.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Edificación moderna con líneas de precisión en blanco y acento dorado */}
        <rect x="8" y="14" width="14" height="26" stroke="#FFFFFF" strokeWidth="1.5" />
        <rect x="26" y="8" width="14" height="32" stroke="#FFFFFF" strokeWidth="1.5" />
        {/* Ventanales arquitectónicos dorados */}
        <line x1="13" y1="20" x2="17" y2="20" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="26" x2="17" y2="26" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="32" x2="17" y2="32" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="31" y1="14" x2="35" y2="14" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="31" y1="20" x2="35" y2="20" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="31" y1="26" x2="35" y2="26" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="31" y1="32" x2="35" y2="32" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'litigios',
    title: 'LITIGIOS CIVILES Y COMERCIALES',
    description:
      'Representación y estrategia legal en conflictos civiles y comerciales, desde la evaluación del caso hasta su resolución.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Balanza de la ley con estructura blanca y platillos dorados */}
        <line x1="24" y1="6" x2="24" y2="38" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="14" x2="38" y2="14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 38H30" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        {/* Platillo izquierdo */}
        <line x1="14" y1="14" x2="9" y2="25" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="14" y1="14" x2="19" y2="25" stroke="#FFFFFF" strokeWidth="1.2" />
        <path d="M7 25C7 28.5 10 30 14 30C18 30 21 28.5 21 25H7Z" stroke="#C89A32" strokeWidth="1.5" />
        {/* Platillo derecho */}
        <line x1="34" y1="14" x2="29" y2="25" stroke="#FFFFFF" strokeWidth="1.2" />
        <line x1="34" y1="14" x2="39" y2="25" stroke="#FFFFFF" strokeWidth="1.2" />
        <path d="M27 25C27 28.5 30 30 34 30C38 30 41 28.5 41 25H27Z" stroke="#C89A32" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'corporativo',
    title: 'DERECHO CORPORATIVO Y COMERCIAL',
    description:
      'Asesoría jurídica para empresas y negocios, orientada a proteger sus intereses y facilitar sus operaciones.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Portafolio ejecutivo con líneas blancas y cerradura/broches dorados */}
        <rect x="8" y="15" width="32" height="23" rx="1" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M18 15V10C18 9 19 8 20 8H28C29 8 30 9 30 10V15" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="8" y1="24" x2="40" y2="24" stroke="#C89A32" strokeWidth="1.5" />
        <rect x="21" y="21" width="6" height="6" stroke="#C89A32" strokeWidth="1.5" fill="#062446" />
      </svg>
    ),
  },
  {
    id: 'contratos',
    title: 'CONTRATOS',
    description:
      'Elaboración, revisión y análisis de contratos para reducir riesgos y proteger los intereses de nuestros clientes.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Documento legal con esquina doblada y líneas de cláusula doradas */}
        <path d="M12 8H28L36 16V40H12V8Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M28 8V16H36" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="18" y1="22" x2="30" y2="22" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="28" x2="30" y2="28" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="34" x2="26" y2="34" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'cobros',
    title: 'COBROS Y RECUPERACIÓN DE CRÉDITOS',
    description:
      'Estrategias legales para la gestión y recuperación de obligaciones y créditos, buscando soluciones efectivas para nuestros clientes.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Archivo financiero con calculadora y balance contable */}
        <rect x="8" y="10" width="22" height="28" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="14" y1="16" x2="24" y2="16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        {/* Calculadora / módulo de crédito dorado */}
        <rect x="22" y="18" width="18" height="22" stroke="#C89A32" strokeWidth="1.5" fill="#062446" />
        <rect x="26" y="22" width="10" height="4" stroke="#C89A32" strokeWidth="1.2" />
        <circle cx="27" cy="31" r="1" fill="#C89A32" />
        <circle cx="31" cy="31" r="1" fill="#C89A32" />
        <circle cx="35" cy="31" r="1" fill="#C89A32" />
        <circle cx="27" cy="35" r="1" fill="#C89A32" />
        <circle cx="31" cy="35" r="1" fill="#C89A32" />
        <circle cx="35" cy="35" r="1" fill="#C89A32" />
      </svg>
    ),
  },
  {
    id: 'asesoria',
    title: 'ASESORÍA A EMPRESAS E INVERSIONISTAS',
    description:
      'Acompañamiento legal para empresas, inversionistas nacionales y extranjeros que desarrollan actividades o realizan negocios en República Dominicana.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bombilla / visión estratégica con filamento y rayos en dorado */}
        <path
          d="M24 10C17.4 10 12 15.4 12 22C12 26.2 14.1 29.8 17.5 32V35H30.5V32C33.9 29.8 36 26.2 36 22C36 15.4 30.6 10 24 10Z"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
        <line x1="19" y1="38" x2="29" y2="38" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        {/* Rayos de luz dorados */}
        <line x1="24" y1="4" x2="24" y2="7" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="9" x2="12" y2="11" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38" y1="9" x2="36" y2="11" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="22" x2="7" y2="22" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="44" y1="22" x2="41" y2="22" stroke="#C89A32" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const Services: React.FC = () => {
  return (
    <section
      id="servicios"
      aria-label="Áreas de práctica de Lawcrest Legal Group"
      className="relative w-full bg-[#062446] text-[#FFFFFF] py-20 sm:py-24 lg:py-28 scroll-mt-20 border-b border-[#173C68]"
    >
      <Container size="default">
        {/* ENCABEZADO EDITORIAL DE LA SECCIÓN */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
            <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#D8B65A] uppercase">
              ÁREAS DE PRÁCTICA
            </span>
          </div>

          <h2 className="font-serif font-normal text-white text-3xl sm:text-4xl lg:text-[44px] leading-[1.18] tracking-tight mb-4 sm:mb-5 [text-wrap:balance]">
            Soluciones legales diseñadas para proteger sus intereses.
          </h2>

          <p className="font-sans font-normal text-white/75 text-base sm:text-lg leading-relaxed">
            Brindamos asesoría y representación legal estratégica a personas, empresas e
            inversionistas, con un enfoque cercano, responsable y orientado a soluciones.
          </p>
        </div>

        {/* CUADRÍCULA CONTINUA CON LÍNEAS DIVISORIAS FINAS (ESTILO REFERENCIA) */}
        <div className="border border-[#173C68]/60 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.map((service, index) => {
              // Determinar bordes para cuadrícula de 3 columnas en desktop y 2 columnas en tablet
              const isFirstRowDesktop = index < 3;
              const isRightBorderDesktop = (index + 1) % 3 !== 0;
              const isBottomBorderDesktop = isFirstRowDesktop;

              return (
                <div
                  key={service.id}
                  className={`
                    p-8 sm:p-10 lg:p-12 transition-colors duration-200 group
                    hover:bg-[#031A39]/60
                    border-b border-[#173C68]/60
                    ${isRightBorderDesktop ? 'lg:border-r lg:border-[#173C68]/60' : 'lg:border-r-0'}
                    ${isBottomBorderDesktop ? 'lg:border-b lg:border-[#173C68]/60' : 'lg:border-b-0'}
                    ${(index + 1) % 2 !== 0 ? 'md:max-lg:border-r md:max-lg:border-[#173C68]/60' : 'md:max-lg:border-r-0'}
                    ${index < 4 ? 'md:max-lg:border-b md:max-lg:border-[#173C68]/60' : 'md:max-lg:border-b-0'}
                  `}
                >
                  {/* Icono vectorial minimalista dual en blanco y dorado */}
                  <div className="mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-200">
                    {service.icon}
                  </div>

                  {/* Título en mayúsculas sobrias */}
                  <h3 className="font-sans font-semibold text-sm sm:text-base tracking-[0.14em] uppercase text-white mb-3 group-hover:text-[#D8B65A] transition-colors duration-200 leading-snug">
                    {service.title}
                  </h3>

                  {/* Descripción clara y profesional */}
                  <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </section>
  );
};
