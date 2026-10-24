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
    { path: PATHS.STATE_RENDERING.CONTROLLED_COMPONENT, ...lazyPage(() => import('../pages/state-rendering/ControlledComponent')) },
    { path: PATHS.STATE_RENDERING.EVENT_HANDLING, ...lazyPage(() => import('../pages/state-rendering/EventHandling')) },
    { path: PATHS.STATE_RENDERING.STATE_IS_SNAPSHOT, ...lazyPage(() => import('../pages/state-rendering/StateIsSnapshot')) },
    { path: PATHS.STATE_RENDERING.UPDATE_STATE, ...lazyPage(() => import('../pages/state-rendering/UpdateState')) },
  ],
};
