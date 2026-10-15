import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { ArrowRight } from 'lucide-react';

interface ApproachStep {
  number: string;
  label: string;
  title: string;
  description: string;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    label: 'Escuchamos',
    title: 'Primera consulta',
    description:
      'Nos reunimos con usted para comprender su situación, contexto y objetivos, sin compromiso y con total confidencialidad.',
  },
  {
    number: '02',
    label: 'Analizamos',
    title: 'Estrategia a medida',
    description:
      'Estudiamos a fondo el asunto, revisamos la documentación y estructuramos la mejor ruta legal junto a usted.',
  },
  {
    number: '03',
    label: 'Gestionamos',
    title: 'Ejecución rigurosa',
    description:
      'Impulsamos las gestiones necesarias con precisión técnica, transparencia y comunicación constante en cada etapa.',
  },
  {
    number: '04',
    label: 'Acompañamos',
    title: 'Seguimiento continuo',
    description:
      'Damos seguimiento permanente a su caso y seguimos a su lado para anticipar riesgos y aprovechar oportunidades.',
  },
];

/** Sección "Cómo trabajamos": el proceso de trabajo de la firma, paso a paso. */
export const FirmApproach: React.FC = () => {
  return (
    <section
      id="como-trabajamos"
      aria-label="Cómo trabajamos - Lawcrest Legal Group"
      className="relative w-full bg-[#F7F7F5] text-[#062446] py-20 sm:py-24 lg:py-28 overflow-hidden scroll-mt-20 border-b border-[#062446]/8"
    >
      <Container size="default">
        {/* Encabezado de la sección */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
            <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
              CÓMO TRABAJAMOS
            </span>
          </div>
          <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[44px] leading-[1.16] tracking-tight mb-5 [text-wrap:balance]">
            Un proceso claro, de principio a fin
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal">
            Creemos que un asunto legal bien atendido comienza con un proceso ordenado y
            transparente. Así trabajamos cada gestión, con el mismo rigor para una consulta puntual
            que para un proyecto de gran envergadura.
          </p>
        </div>

        {/* Pasos del proceso */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.number}
              className="
                relative h-full bg-[#FFFFFF] border border-[#062446]/10 border-t-2 border-t-[#C89A32]
                p-6 sm:p-7 flex flex-col
                hover:border-[#C89A32]/60 transition-colors duration-200 ease-out
              "
            >
              <span className="font-serif text-3xl sm:text-4xl text-[#C89A32] font-normal leading-none mb-4 select-none">
                {step.number}
              </span>
              <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#173C68] mb-1.5 select-none">
                {step.label}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-medium text-[#062446] tracking-tight mb-2.5">
                {step.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#062446]/70 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enlace a las áreas de práctica */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase text-[#062446] hover:text-[#C89A32] transition-colors duration-200 group"
          >
            Conozca nuestras áreas de práctica
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#C89A32]" />
          </Link>
        </div>
      </Container>
    </section>
  );
};