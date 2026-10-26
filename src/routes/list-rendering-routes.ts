import type { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import { lazyPage } from './lazy-page';

const listRenderingRoutes: RouteObject = {
  path: PATHS.LIST_RENDERING.HOME,
  children: [
    { index: true, ...lazyPage(() => import('../pages/list-rendering-architecture')) },
  ],
};

export default listRenderingRoutes;
