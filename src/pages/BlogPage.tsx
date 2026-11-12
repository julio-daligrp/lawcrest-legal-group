import React from 'react';
import { PageHeader } from '@/src/components/layout/PageHeader';
import { Blog } from '@/src/components/blog/Blog';
import { useI18n } from '@/src/i18n';

/** Página de Blog y actualidad jurídica. */
export const BlogPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
        title={t('blog.page.title')}
        description={t('blog.page.description')}
        breadcrumb={t('blog.page.breadcrumb')}
        breadcrumbKey="blog"
      />
      <Blog />
    </>
  );
};
