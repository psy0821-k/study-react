import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

const mainMenu = [
  {
    title: 'State 렌더링 엔진',
    path: PATHS.STATE_RENDERING.HOME,
  },
  {
    title: '데이터와 불변성 복합 상태',
    path: PATHS.IMMUTABILITY_STATE.HOME,
  },
];

const Home = () => {
  return (
    <ul>
      {mainMenu.map((menu, i) => (
        <li key={i + menu.title}>
          <Link to={menu.path}>
            {i + 1} {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
