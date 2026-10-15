import React from 'react';
import { Container } from '@/src/components/ui/Container';
import { WHATSAPP_CONFIG } from '@/src/config/contact';
import corporateImg from '@/src/assets/images/lawcrest_corporate_investment_1791469438121.jpg';
import corporateImg600 from '@/src/assets/images/lawcrest_corporate_investment-600.jpg';
import corporateImg900 from '@/src/assets/images/lawcrest_corporate_investment-900.jpg';

interface PracticePillar {
  number: string;
  title: string;
  description: string;
}

const CORPORATE_PILLARS: PracticePillar[] = [
  {
    number: '01',
    title: 'EMPRESAS',
    description:
      'Asesoría legal para empresas y negocios que necesitan respaldo jurídico en sus operaciones y decisiones comerciales.',
  },
  {
    number: '02',
    title: 'INVERSIONISTAS',
    description:
      'Acompañamiento legal para inversionistas nacionales y extranjeros interesados en realizar inversiones o desarrollar negocios en República Dominicana.',
  },
  {
    number: '03',
    title: 'DESARROLLADORES',
    description:
      'Asesoría y acompañamiento legal para desarrolladores y proyectos que requieren una adecuada gestión jurídica.',
  },
];

export const Corporate: React.FC = () => {
  const whatsappHref = WHATSAPP_CONFIG.getUrl();

  return (
    <section
      id="empresas-inversionistas"
      aria-label="Empresas e Inversionistas - Lawcrest Legal Group"
      className="relative w-full bg-[#F7F7F5] py-16 sm:py-20 lg:py-28 border-b border-[#062446]/8 scroll-mt-20 overflow-hidden"
    >
      <Container size="default">
        {/* COMPOSICIÓN ASIMÉTRICA: 60% Contenido / 40% Imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: Contenido Editorial y las 3 Áreas (60% en Desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Encabezado de la Sección */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
                <span className="font-sans font-semibold text-xs tracking-[0.22em] text-[#173C68] uppercase">
                  EMPRESAS E INVERSIONISTAS
                </span>
              </div>

              <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[42px] leading-[1.16] tracking-tight mb-5 [text-wrap:balance]">
                Seguridad jurídica para hacer negocios en República Dominicana.
              </h2>

              <div className="space-y-4 text-[#062446]/80 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
                <p>
                  En Lawcrest Legal Group acompañamos a empresas e inversionistas que necesitan orientación legal para desarrollar sus actividades, proteger sus intereses y tomar decisiones con mayor claridad.
                </p>
                <p className="text-[#062446]/70">
                  Nuestro enfoque combina análisis jurídico, estrategia y acompañamiento cercano, procurando que cada cliente conozca sus opciones y pueda avanzar con mayor seguridad.
                </p>
              </div>
            </div>

            {/* Tres Áreas Destacadas: Composición Editorial Asimétrica con números 01, 02, 03 discretos */}
            <div className="space-y-4 sm:space-y-5 pt-2">
              {CORPORATE_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-[#FFFFFF] p-6 sm:p-7 border border-[#062446]/10 hover:border-[#C89A32]/50 shadow-xs hover:shadow-sm transition-all duration-200 group relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6"
                >
                  {/* Número editorial grande pero discreto en dorado */}
                  <span className="font-serif text-2xl sm:text-3xl text-[#C89A32] font-normal leading-none shrink-0 select-none pt-0.5">
                    {pillar.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#062446] tracking-tight mb-2 group-hover:text-[#C89A32] transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#062446]/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* COLUMNA DERECHA: Fotografía Corporativa de Negocios y Acompañamiento (40% en Desktop) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Fotografía limpia sin marcos */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] w-full shadow-lg">
                <img
                  src={corporateImg}
                  srcSet={`${corporateImg600} 600w, ${corporateImg900} 900w, ${corporateImg} 1200w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                  alt="Reunión corporativa y asesoría estratégica a inversionistas en República Dominicana"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

            </div>
          </div>

        </div>

        {/* MENSAJE DE CONFIANZA: Elemento visual de transición */}
        <div className="my-14 sm:my-16 py-8 sm:py-10 border-y border-[#062446]/10 text-center">
          <p className="font-serif italic text-xl sm:text-2xl lg:text-[26px] text-[#062446] font-normal leading-relaxed max-w-3xl mx-auto [text-wrap:balance]">
            "Su inversión merece una estrategia legal a la altura de su importancia."
          </p>
        </div>

        {/* BLOQUE SECUNDARIO: Clientes Internacionales */}
        <div className="bg-[#FFFFFF] p-8 sm:p-10 lg:p-12 border border-[#062446]/10 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-[#C89A32] block mb-2 select-none">
                Inversionistas Extranjeros
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#062446] font-medium tracking-tight mb-3 [text-wrap:balance]">
                ¿Está considerando invertir en República Dominicana?
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed">
                Desde el primer contacto, nuestro objetivo es ofrecer orientación clara y acompañamiento legal para que pueda comprender mejor el entorno jurídico de su operación y tomar decisiones informadas.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={whatsappHref}
                target={whatsappHref.startsWith('http') ? '_blank' : '_self'}
                rel={whatsappHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="
                  inline-flex items-center justify-center font-sans font-medium
                  text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap
                  px-7 py-3.5 min-h-[46px] rounded-none
                  text-[#062446] bg-transparent
                  border border-[#C89A32] hover:bg-[#062446] hover:text-[#FFFFFF]
                  active:bg-[#031A39]
                  transition-all duration-200 ease-out cursor-pointer
                  focus-visible:ring-2 focus-visible:ring-[#C89A32]
                  text-center w-full sm:w-auto
                "
              >
                <span>Hablar con un abogado</span>
              </a>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
