import type { RouteObject } from 'react-router-dom';
import { lazyPage } from './lazy-page';
import { PATHS } from './paths';

export const stateRenderingRoutes: RouteObject = {
  path: PATHS.STATE_RENDERING.HOME,
  ...lazyPage(() => import('../pages/state-rendering/StateRendering')),
  children: [
    { index: true, ...lazyPage(() => import('../pages/state-rendering/EmployeeForm')) },
    { path: PATHS.STATE_RENDERING.COMPONENT_STATE, ...lazyPage(() => import('../pages/state-rendering/ComponentState')) },
    { path: PATHS.STATE_RENDERING.CONDITIONAL_RENDERING, ...lazyPage(() => import('../pages/state-rendering/ConditionalRendering')) },
  ],
};
