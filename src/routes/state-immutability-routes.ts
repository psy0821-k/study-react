import type { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import { lazyPage } from './lazy-page';

const stateImmutabilityRoutes: RouteObject = {
  path: PATHS.IMMUTABILITY_STATE.HOME,
  children: [
    { index: true, ...lazyPage(() => import('../pages/data-immutable')) },
    { path: PATHS.IMMUTABILITY_STATE.IMMUTABILITY, ...lazyPage(() => import('../pages/data-immutable/Immutability')) },
    { path: PATHS.IMMUTABILITY_STATE.IMMUTABILITY_CRUD, ...lazyPage(() => import('../pages/data-immutable/ImmutabilityCRUD')) },
  ],
};

export default stateImmutabilityRoutes;
