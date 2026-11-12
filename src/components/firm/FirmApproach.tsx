import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/src/components/ui/Container';
import { useI18n } from '@/src/i18n';
import { ArrowRight } from 'lucide-react';

interface ApproachStep {
  number: string;
  labelKey: string;
  titleKey: string;
  descriptionKey: string;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    labelKey: 'firm.step1.label',
    titleKey: 'firm.step1.title',
    descriptionKey: 'firm.step1.description',
  },
  {
    number: '02',
    labelKey: 'firm.step2.label',
    titleKey: 'firm.step2.title',
    descriptionKey: 'firm.step2.description',
  },
  {
    number: '03',
    labelKey: 'firm.step3.label',
    titleKey: 'firm.step3.title',
    descriptionKey: 'firm.step3.description',
  },
  {
    number: '04',
    labelKey: 'firm.step4.label',
    titleKey: 'firm.step4.title',
    descriptionKey: 'firm.step4.description',
  },
];

/** Sección "Cómo trabajamos": el proceso de trabajo de la firma, paso a paso. */
export const FirmApproach: React.FC = () => {
  const { t, link } = useI18n();

  return (
    <section
      id="como-trabajamos"
      aria-label={t('firm.section.ariaLabel')}
      className="relative w-full bg-[#F7F7F5] text-[#062446] py-20 sm:py-24 lg:py-28 overflow-hidden scroll-mt-20 border-b border-[#062446]/8"
    >
      <Container size="default">
        {/* Encabezado de la sección */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
            <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
              {t('firm.eyebrow')}
            </span>
          </div>
          <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[44px] leading-[1.16] tracking-tight mb-5 [text-wrap:balance]">
            {t('firm.title')}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal">
            {t('firm.description')}
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
                {t(step.labelKey)}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-medium text-[#062446] tracking-tight mb-2.5">
                {t(step.titleKey)}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#062446]/70 leading-relaxed font-normal">
                {t(step.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Enlace a las áreas de práctica */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to={link('/servicios')}
            className="inline-flex items-center gap-2 font-sans font-semibold text-xs sm:text-sm tracking-widest uppercase text-[#062446] hover:text-[#C89A32] transition-colors duration-200 group"
          >
            {t('firm.cta')}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#C89A32]" />
          </Link>
        </div>
      </Container>
    </section>
  );
};