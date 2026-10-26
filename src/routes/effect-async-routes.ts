import type { RouteObject } from 'react-router-dom';
import { PATHS } from './paths';
import { lazyPage } from './lazy-page';

const effectAsyncRoutes: RouteObject = {
  path: PATHS.EFFECT_ASYNC.HOME,
  children: [
    { index: true, ...lazyPage(() => import('../pages/effect-async')) },
    { path: PATHS.EFFECT_ASYNC.EFFECT_BASIC, ...lazyPage(() => import('../pages/effect-async/EffectBasic/EffectBasic')) },
    { path: PATHS.EFFECT_ASYNC.EFFECT_CLEANUP, ...lazyPage(() => import('../pages/effect-async/EffectCleanup/EffectCleanup')) },
    { path: PATHS.EFFECT_ASYNC.EFFECT_DEPENDENCIES, ...lazyPage(() => import('../pages/effect-async/EffectDependencies/EffectDependencies')) },
    { path: PATHS.EFFECT_ASYNC.DATA_FETCHING, ...lazyPage(() => import('../pages/effect-async/DataFetching/DataFetching')) },
  ],
};

export default effectAsyncRoutes;
