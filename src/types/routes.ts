import { ReactNode } from 'react';

export interface Route {
  path: string;
  element: ReactNode;
}

export interface NavigationLink {
  path: string;
  label: string;
}