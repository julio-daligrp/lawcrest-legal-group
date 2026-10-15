import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { ArrowRight, Users, Scale, Compass, Lock } from 'lucide-react';

interface Principle {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const PRINCIPLES: Principle[] = [
  {
    icon: Users,
    title: 'Atención cercana',
    description: 'Relación directa y personalizada con cada cliente.',
  },
  {
    icon: Scale,
    title: 'Rigor jurídico',
    description: 'Análisis técnico y estricto apego a la normativa.',
  },
  {
    icon: Compass,
    title: 'Visión estratégica',
    description: 'Soluciones orientadas a proteger sus intereses.',
  },
  {
    icon: Lock,
    title: 'Confidencialidad',
    description: 'Discreción absoluta en el manejo de cada asunto.',
  },
];

/** Sección "Quiénes somos": presentación de la firma y sus principios. */
export const About: React.FC = () => {
  return (
    <section
      id="quienes-somos"
      aria-label="Quiénes somos - Lawcrest Legal Group"
      className="relative w-full bg-[#FFFFFF] text-[#062446] py-20 sm:py-24 lg:py-28 border-b border-[#062446]/8 scroll-mt-20 overflow-hidden"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* COLUMNA IZQUIERDA: Imagen de la firma */}
          <div className="lg:col-span-6 order-1">
            <div className="relative">
              <div className="relative overflow-hidden aspect-[2/3] w-full bg-[#031A39] border border-[#062446]/10">
                <img
                  src={`${import.meta.env.BASE_URL}images/OFC.webp`}
                  alt="Lawcrest Legal Group · Firma legal en Bávaro–Punta Cana"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Detalle decorativo en ángulo (acento dorado) */}
              <div
                className="pointer-events-none absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-[#C89A32]/50 hidden sm:block"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: Narrativa de la firma */}
          <div className="lg:col-span-6 order-2">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
              <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
                QUIÉNES SOMOS
              </span>
            </div>

            <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[44px] leading-[1.16] tracking-tight mb-5 [text-wrap:balance]">
              Una firma legal boutique, cercana y estratégica
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal mb-4">
              Lawcrest Legal Group es una firma legal boutique con sede en Bávaro–Punta Cana,
              República Dominicana. Asesoramos y representamos a personas, empresas e inversionistas
              en la protección de sus intereses y en el desarrollo de sus proyectos.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal">
              Nuestro trabajo combina rigor jurídico, atención cercana y una visión estratégica
              orientada a soluciones. Creemos que una asesoría clara y oportuna previene conflictos,
              reduce riesgos y abre oportunidades.
            </p>

            {/* Principios de la firma */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-10">
              {PRINCIPLES.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.title} className="flex items-start gap-3.5">
                    <span className="shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#C89A32]" />
                    </span>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-medium text-[#062446] tracking-tight mb-0.5">
                        {principle.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#062446]/70 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enlace a la página de la firma */}
            <div className="mt-10">
              <Link
                to="/empresas-inversionistas"
                className="
                  inline-flex items-center gap-2 font-sans font-medium
                  text-xs sm:text-sm tracking-widest uppercase
                  px-7 py-3.5 min-h-[46px] rounded-[2px]
                  text-[#062446] bg-transparent border border-[#062446]/20
                  hover:border-[#C89A32] hover:bg-[#062446] hover:text-[#FFFFFF]
                  transition-all duration-200 ease-out cursor-pointer group
                "
              >
                <span>Conocer la firma</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
