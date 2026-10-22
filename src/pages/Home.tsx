import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

const Home = () => {
  return (
    <ul>
      <li>
        <Link to={PATHS.ROUTE}>라우트 테스트</Link>
      </li>
    </ul>
  );
};

export default Home;
