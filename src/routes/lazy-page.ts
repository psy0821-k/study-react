import type { RouteObject } from 'react-router-dom';

// 페이지 컴포넌트를 라우트 진입 시점에 지연 로드
export const lazyPage = (loader: () => Promise<{ default: React.ComponentType }>): Pick<RouteObject, 'lazy'> => ({
  lazy: async () => ({ Component: (await loader()).default }),
});
