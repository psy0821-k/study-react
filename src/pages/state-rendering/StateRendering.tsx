import { NavLink, Outlet } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const StateRendering = () => {
  const BASE_URL = PATHS.STATE_RENDERING;
  return (
    <div className="min-h-screen">
      <nav className="fixed left-0 top-0 h-screen w-48 border-r p-6 mt-14">
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink to={BASE_URL.HOME} end className="block w-full p-2 hover:bg-amber-200">
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to={BASE_URL.COMPONENT_STATE} className="block w-full p-2 hover:bg-amber-200">
              컴포넌트 스테이트
            </NavLink>
          </li>
          <li>
            <NavLink to={BASE_URL.CONDITIONAL_RENDERING} className="block w-full p-2 hover:bg-amber-200">
              조건부 렌더링
            </NavLink>
          </li>
          <li>
            <NavLink to={BASE_URL.CONTROLLED_COMPONENT} className="block w-full p-2 hover:bg-amber-200">
              제어 컴포넌트
            </NavLink>
          </li>
          <li>
            <NavLink to={BASE_URL.EVENT_HANDLING} className="block w-full p-2 hover:bg-amber-200">
              이벤트 핸들링
            </NavLink>
          </li>
          <li>
            <NavLink to={BASE_URL.STATE_IS_SNAPSHOT} className="block w-full p-2 hover:bg-amber-200">
              스냅샷
            </NavLink>
          </li>
          <li>
            <NavLink to={BASE_URL.UPDATE_STATE} className="block w-full p-2 hover:bg-amber-200">
              상태 업데이트
            </NavLink>
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
