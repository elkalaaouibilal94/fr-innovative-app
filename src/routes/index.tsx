import React from 'react';
import type { Route } from '../types/routes';
import Home from '../pages/Home';
import ProjectPage from '../pages/ProjectPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Imprint from '../pages/Imprint';

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

export * from './navigation';