import React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Contact } from '@/src/components/contact/Contact';
import { useI18n } from '@/src/i18n';

/** Página de Contacto con formulario de consulta. */
export const ContactPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        title={t('contact.page.title')}
        description={t('contact.page.description')}
        breadcrumb={t('contact.page.breadcrumb')}
        breadcrumbKey="contact"
      />
      <Contact />
    </>
  );
};
