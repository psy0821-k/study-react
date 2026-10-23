import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

const Home = () => {
  return (
    <ul>
      <li>
        <Link to={PATHS.ROUTE}>라우트 테스트</Link>
      </li>
      <li>
        <Link to={PATHS.STATE_RENDERING.HOME}>State 렌더링 엔진</Link>
      </li>
    </ul>
  );
};

export default Home;
