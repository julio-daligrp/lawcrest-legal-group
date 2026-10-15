import React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Contact } from '@/src/components/contact/Contact';

/** Página de Contacto con formulario de consulta. */
export const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Conversemos sobre su caso"
        description="Complete el formulario y un miembro de nuestro equipo se pondrá en contacto con usted para coordinar una consulta."
        breadcrumb="Contacto"
      />
      <Contact />
    </>
  );
};
