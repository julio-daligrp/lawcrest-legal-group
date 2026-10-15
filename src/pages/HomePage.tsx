import React from 'react';
import { Hero } from '@/src/components/hero/Hero';
import { Services } from '@/src/components/services/Services';
import { About } from '@/src/components/about/About';
import { Testimonials } from '@/src/components/testimonials/Testimonials';
import { Blog } from '@/src/components/blog/Blog';
import { useDocumentTitle } from '@/src/hooks/useDocumentTitle';

/** Página de inicio: presentación principal, servicios, quiénes somos, testimonios y blog. */
export const HomePage: React.FC = () => {
  useDocumentTitle('LAWCREST LEGAL GROUP | Firma Legal Boutique');

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Blog />
    </>
  );
};
