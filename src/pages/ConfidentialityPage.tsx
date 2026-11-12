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

/** Página de Confidencialidad: tratamiento de datos personales y privacidad. */
export const ConfidentialityPage: React.FC = () => {
  const { t, link } = useI18n();

  return (
    <>
      <PageHeader
        title={t('legal.confidentiality.title')}
        description={t('legal.confidentiality.description')}
        breadcrumbKey="confidentiality"
      />

      <LegalArticle lastUpdatedKey="legal.lastUpdated">
        <LegalSection titleKey="legal.confidentiality.section1.title">
          <LegalParagraph>{t('legal.confidentiality.section1.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.confidentiality.section2.title">
          <LegalList
            itemKeys={[
              'legal.confidentiality.section2.item1',
              'legal.confidentiality.section2.item2',
              'legal.confidentiality.section2.item3',
            ]}
          />
        </LegalSection>

        <LegalSection titleKey="legal.confidentiality.section3.title">
          <LegalList
            itemKeys={[
              'legal.confidentiality.section3.item1',
              'legal.confidentiality.section3.item2',
              'legal.confidentiality.section3.item3',
              'legal.confidentiality.section3.item4',
            ]}
          />
        </LegalSection>

        <LegalSection titleKey="legal.confidentiality.section4.title">
          <LegalParagraph>{t('legal.confidentiality.section4.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.confidentiality.section5.title">
          <LegalParagraph>{t('legal.confidentiality.section5.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.confidentiality.section6.title">
          <LegalParagraph>{t('legal.confidentiality.section6.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.confidentiality.section7.title">
          <LegalParagraph>{t('legal.confidentiality.section7.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.confidentiality.section8.title">
          <LegalParagraph>{t('legal.confidentiality.section8.body')}</LegalParagraph>
        </LegalSection>

        <LegalSection titleKey="legal.confidentiality.section9.title">
          <LegalParagraph>{t('legal.confidentiality.section9.body')}</LegalParagraph>

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
