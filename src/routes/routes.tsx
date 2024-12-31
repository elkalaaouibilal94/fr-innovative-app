import React, { lazy } from 'react';
import type { Route } from '../types/routes';

// Remove artificial delays from lazy loading
const Home = lazy(() => import('../pages/Home'));
const ProjectPage = lazy(() => import('../pages/ProjectPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const Imprint = lazy(() => import('../pages/Imprint'));

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projekte/:projectId',
    element: <ProjectPage />,
  },
  {
    path: '/kontakt',
    element: <ContactPage />,
  },
  {
    path: '/datenschutz',
    element: <PrivacyPolicy />,
  },
  {
    path: '/impressum',
    element: <Imprint />,
  },
];