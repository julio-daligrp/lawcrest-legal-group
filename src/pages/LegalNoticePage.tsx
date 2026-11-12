import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { ArrowRight } from 'lucide-react';
import {
  LegalArticle,
  LegalSection,
  LegalParagraph,
  LegalList,
} from '@/src/components/legal/LegalArticle';
import { useI18n } from '@/src/i18n';

/** Página de Aviso Legal: condiciones generales de uso del sitio. */
export const LegalNoticePage: React.FC = () => {
  const { t, link } = useI18n();

  return (
    <>
      <PageHeader
        title={t('legal.notice.title')}
        description={t('legal.notice.description')}
        breadcrumbKey="legalNotice"
      />

      <LegalArticle lastUpdatedKey="legal.lastUpdated">
        <LegalSection titleKey="legal.notice.section1.title">
          <LegalParagraph>{t('legal.notice.section1.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.notice.section2.title">
          <LegalParagraph>{t('legal.notice.section2.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.notice.section3.title">
          <LegalParagraph>{t('legal.notice.section3.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.notice.section4.title">
          <LegalParagraph>{t('legal.notice.section4.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.notice.section5.title">
          <LegalParagraph>{t('legal.notice.section5.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.notice.section6.title">
          <LegalParagraph>{t('legal.notice.section6.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.notice.section7.title">
          <LegalParagraph>{t('legal.notice.section7.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.notice.section8.title">
          <LegalParagraph>{t('legal.notice.section8.body')}</LegalParagraph>
          <LegalList itemKeys={['legal.notice.disclaimer']} />

          <div className="mt-8 pt-8 border-t border-[#062446]/10">
            <Link
              to={link('/contacto')}
              className="inline-flex items-center gap-2 font-sans font-medium text-xs sm:text-sm tracking-widest uppercase px-7 py-3.5 min-h-[46px] rounded-[2px] text-[#FFFFFF] bg-[#062446] border border-[#C89A32]/60 hover:border-[#D8B65A] hover:bg-[#031A39] transition-colors cursor-pointer group"
            >
              <span>{t('legal.contactCta')}</span>
              <ArrowRight className="w-4 h-4 text-[#D8B65A] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </LegalSection>
      </LegalArticle>
    </>
  );
};
