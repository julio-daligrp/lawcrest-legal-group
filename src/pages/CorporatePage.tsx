import React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Corporate } from '@/src/components/corporate/Corporate';
import { FirmApproach } from '@/src/components/firm/FirmApproach';
import { WhyUs } from '@/src/components/why-us/WhyUs';
import { useI18n } from '@/src/i18n';

/** Página de Empresas: servicios corporativos, cómo trabajamos y quiénes somos la firma. */
export const CorporatePage: React.FC = () => {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        title={t('corporate.page.title')}
        description={t('corporate.page.description')}
        breadcrumb={t('corporate.page.breadcrumb')}
      />
      <Corporate />
      <FirmApproach />
      <WhyUs />
    </>
  );
};