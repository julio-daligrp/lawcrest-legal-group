import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Container } from '@/src/components/ui/Container';
import { Services } from '@/src/components/services/Services';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/src/i18n';

interface ProcessStep {
  number: string;
  /** Clave del diccionario para el título del paso. */
  titleKey: string;
  /** Clave del diccionario para la descripción del paso. */
  descriptionKey: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    titleKey: 'services.process.step1.title',
    descriptionKey: 'services.process.step1.description',
  },
  {
    number: '02',
    titleKey: 'services.process.step2.title',
    descriptionKey: 'services.process.step2.description',
  },
  {
    number: '03',
    titleKey: 'services.process.step3.title',
    descriptionKey: 'services.process.step3.description',
  },
  {
    number: '04',
    titleKey: 'services.process.step4.title',
    descriptionKey: 'services.process.step4.description',
  },
];

/** Página de Servicios: proceso de trabajo y áreas de práctica. */
export const ServicesPage: React.FC = () => {
  const { t, link } = useI18n();

  return (
    <>
      <PageHeader
        title={t('services.page.title')}
        description={t('services.page.description')}
        breadcrumb={t('services.page.breadcrumb')}
      />

      {/* Proceso de trabajo */}
      <section
        aria-label={t('services.process.aria')}
        className="relative w-full bg-[#F7F7F5] text-[#062446] py-20 sm:py-24 lg:py-28 border-b border-[#062446]/8"
      >
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-5 h-[1.5px] bg-[#C89A32]" aria-hidden="true" />
              <span className="font-sans font-semibold text-xs tracking-[0.24em] text-[#173C68] uppercase">
                {t('services.process.eyebrow')}
              </span>
            </div>

            <h2 className="font-serif font-normal text-[#062446] text-3xl sm:text-4xl lg:text-[44px] leading-[1.16] tracking-tight mb-4 [text-wrap:balance]">
              {t('services.process.title')}
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#062446]/75 leading-relaxed font-normal">
              {t('services.process.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#FFFFFF] border border-[#062446]/10 p-7 hover:border-[#C89A32]/50 hover:shadow-sm transition-all duration-200"
              >
                <span className="font-serif text-3xl text-[#C89A32] font-normal leading-none block mb-4 select-none">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg font-medium text-[#062446] tracking-tight mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#062446]/75 leading-relaxed">
                  {t(step.descriptionKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-[#062446]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="block font-serif text-xl sm:text-2xl text-[#062446] font-medium tracking-tight">
                {t('services.cta.title')}
              </span>
              <span className="block font-sans text-xs sm:text-sm text-[#062446]/60 mt-1">
                {t('services.cta.description')}
              </span>
            </div>

            <Link
              to={link('/contacto')}
              className="
                inline-flex items-center justify-center gap-2 font-sans font-medium
                text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap
                px-7 py-3.5 min-h-[46px] rounded-[2px]
                text-[#FFFFFF] bg-[#062446]
                border border-[#C89A32]/60 hover:border-[#D8B65A] hover:bg-[#031A39]
                transition-all duration-200 ease-out cursor-pointer
                shadow-xs hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#C89A32]
                text-center w-full sm:w-auto group
              "
            >
              <span>{t('services.cta.button')}</span>
              <ArrowRight className="w-4 h-4 text-[#D8B65A] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      <Services />
    </>
  );
};
