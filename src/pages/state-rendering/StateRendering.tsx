import { NavLink, Outlet } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const StateRendering = () => {
  const BASE_URL = PATHS.STATE_RENDERING;
  return (
    <div className="min-h-screen">
      <nav className="fixed left-0 top-0 h-screen w-48 border-r p-6">
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink to={BASE_URL.HOME} end>
              폼
            </NavLink>
          </li>
          <li>
            <NavLink to={BASE_URL.TEST}>테스트</NavLink>
          </li>
        </ul>
      </nav>

      <main className="ml-48 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default StateRendering;
