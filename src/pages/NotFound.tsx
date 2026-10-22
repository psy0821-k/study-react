import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

const NotFound = () => {
  return (
    <div>
      페이지를 찾을 수 없습니다.
      <Link to={PATHS.HOME}>홈으로</Link>
    </div>
  );
};

export default NotFound;
