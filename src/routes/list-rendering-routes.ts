import type { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import { lazyPage } from './lazy-page';

const listRenderingRoutes: RouteObject = {
  path: PATHS.LIST_RENDERING.HOME,
  children: [
    { index: true, ...lazyPage(() => import('../pages/list-rendering-architecture')) },
    { path: PATHS.LIST_RENDERING.PRODUCT_LIST, ...lazyPage(() => import('../pages/list-rendering-architecture/ProductList')) },
    { path: PATHS.LIST_RENDERING.PRODUCT_LIST_WITH_FILTER, ...lazyPage(() => import('../pages/list-rendering-architecture/ProductListWithFilter')) },
    { path: PATHS.LIST_RENDERING.SCHEDULE_TABLE, ...lazyPage(() => import('../pages/list-rendering-architecture/ScheduleTable')) },
  ],
};

export default listRenderingRoutes;
