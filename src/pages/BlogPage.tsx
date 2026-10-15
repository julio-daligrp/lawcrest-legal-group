import React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Blog } from '@/src/components/blog/Blog';

/** Página de Blog y actualidad jurídica. */
export const BlogPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Análisis y perspectivas legales para decisiones informadas"
        description="Compartimos criterios jurídicos sobre el entorno inmobiliario, corporativo y de inversión en República Dominicana."
        breadcrumb="Blog"
      />
      <Blog />
    </>
  );
};
