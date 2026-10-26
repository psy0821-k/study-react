import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { lazyPage } from './lazy-page';
import listRenderingRoutes from './list-rendering-routes';
import { PATHS } from './paths';
import stateImmutabilityRoutes from './state-immutability-routes';
import { stateRenderingRoutes } from './state-rendering-routes';

const pageRoutes: RouteObject[] = [
  { path: PATHS.HOME, ...lazyPage(() => import('../pages/Home')) },
  { path: PATHS.ROUTE, ...lazyPage(() => import('../pages/Route')) },
  stateRenderingRoutes,
  stateImmutabilityRoutes,
  listRenderingRoutes,
  { path: '*', ...lazyPage(() => import('../pages/NotFound')) },
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: pageRoutes,
  },
]);
