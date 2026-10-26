import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const ListRenderingArchitecture = () => {
  return (
    <div>
      <h1>리스트 렌더링 설계</h1>
      <p>이번 학습에서는 컴포넌트로 제작되는 리스트들에 대해 알아보겠습니다</p>
      <Link to={PATHS.LIST_RENDERING.PRODUCT_LIST}>인기 상품 목록</Link>
      <Link to={PATHS.LIST_RENDERING.PRODUCT_LIST_WITH_FILTER}>상품 검색 필터 목록</Link>
    </div>
  );
};

export default ListRenderingArchitecture;
