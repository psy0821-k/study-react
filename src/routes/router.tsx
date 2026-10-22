import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { PATHS } from './paths';

const lazyPage = (loader: () => Promise<{ default: React.ComponentType }>): Pick<RouteObject, 'lazy'> => ({
  lazy: async () => ({ Component: (await loader()).default }),
});

const pageRoutes: RouteObject[] = [
  { path: PATHS.HOME, ...lazyPage(() => import('../pages/Home')) },
  { path: PATHS.ROUTE, ...lazyPage(() => import('../pages/Route')) },
  { path: '*', ...lazyPage(() => import('../pages/NotFound')) },
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: pageRoutes,
  },
]);
