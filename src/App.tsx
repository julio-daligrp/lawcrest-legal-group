/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CorporatePage } from './pages/CorporatePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { LegalNoticePage } from './pages/LegalNoticePage';
import { ConfidentialityPage } from './pages/ConfidentialityPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LanguageProvider, useI18n } from './i18n';

/** Redirección de la antigua ruta "/la-firma" hacia la página Nosotros. */
const LegacyFirmRedirect: React.FC = () => {
  const { link } = useI18n();
  return <Navigate to={link('/empresas-inversionistas')} replace />;
};

/** Tabla de rutas: se replica con prefijo /es para la versión en español. */
const ROUTES: { path: string; element: React.ReactNode }[] = [
  { path: '/', element: <HomePage /> },
  { path: '/servicios', element: <ServicesPage /> },
  { path: '/empresas-inversionistas', element: <CorporatePage /> },
  { path: '/la-firma', element: <LegacyFirmRedirect /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog/:slug', element: <BlogPostPage /> },
  { path: '/contacto', element: <ContactPage /> },
  { path: '/aviso-legal', element: <LegalNoticePage /> },
  { path: '/confidencialidad', element: <ConfidentialityPage /> },
  { path: '*', element: <NotFoundPage /> },
];

/** Construye la ruta equivalente en español. */
const esPath = (path: string): string => {
  if (path === '/') return '/es';
  if (path === '*') return '/es/*';
  return `/es${path}`;
};

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <LanguageProvider>
        <Routes>
          <Route element={<RootLayout />}>
            {ROUTES.map((route) => (
              <Route key={`en${route.path}`} path={route.path} element={route.element} />
            ))}
            {ROUTES.map((route) => (
              <Route key={`es${route.path}`} path={esPath(route.path)} element={route.element} />
            ))}
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
