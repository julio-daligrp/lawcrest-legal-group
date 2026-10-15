import React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Corporate } from '@/src/components/corporate/Corporate';
import { FirmApproach } from '@/src/components/firm/FirmApproach';
import { WhyUs } from '@/src/components/why-us/WhyUs';

/** Página de Empresas: servicios corporativos, cómo trabajamos y quiénes somos la firma. */
export const CorporatePage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Seguridad jurídica para hacer negocios en República Dominicana"
        description="Acompañamiento legal para empresas, inversionistas nacionales y extranjeros, y desarrolladores que buscan operar con claridad y protección jurídica."
        breadcrumb="Nosotros"
      />
      <Corporate />
      <FirmApproach />
      <WhyUs />
    </>
  );
};