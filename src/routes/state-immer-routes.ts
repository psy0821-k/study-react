import type { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import { lazyPage } from './lazy-page';

const stateImmerRoutes: RouteObject = {
  path: PATHS.STATE_IMMER.HOME,
  children: [
    { index: true, ...lazyPage(() => import('../pages/state-immer')) },
    { path: PATHS.STATE_IMMER.REFERENCE_CHECK, ...lazyPage(() => import('../pages/state-immer/ReferenceCheck/ReferenceCheck')) },
    { path: PATHS.STATE_IMMER.TODOS_CRUD, ...lazyPage(() => import('../pages/state-immer/TodosCRUD/TodosCRUD')) },
    { path: PATHS.STATE_IMMER.TODOS_CRUD_WITH_IMMER, ...lazyPage(() => import('../pages/state-immer/TodosCrudWithImmer/TodosCrudWithImmer')) },
    { path: PATHS.STATE_IMMER.DERIVED_STATE, ...lazyPage(() => import('../pages/state-immer/DerivedState/DerivedState')) },
  ],
};

export default stateImmerRoutes;
