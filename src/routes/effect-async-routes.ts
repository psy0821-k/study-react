import type { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import { lazyPage } from './lazy-page';

const effectAsyncRoutes: RouteObject = {
  path: PATHS.EFFECT_ASYNC.HOME,
  children: [
    { index: true, ...lazyPage(() => import('../pages/effect-async')) },
  ],
};

export default effectAsyncRoutes;
