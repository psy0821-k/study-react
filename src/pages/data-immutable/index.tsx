import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const BASE_URL = PATHS.IMMUTABILITY_STATE;

// 메뉴별 학습 주제 설명
const MENUS = [
  {
    path: BASE_URL.IMMUTABILITY,
    title: '',
    description: 'useState로 컴포넌트가 기억하는 값을 만들고, 값이 바뀌면 화면이 다시 그려지는 흐름을 익힙니다.',
  },
  {
    path: BASE_URL.IMMUTABILITY_CRUD,
    title: '불변성 CRUD',
    description: '장바구니 배열에서 상품을 추가, 수정, 삭제할 때 원본을 변경하지 않고 새 배열로 상태를 갱신하는 방법을 익힙니다.',
  },
] as const;

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">데이터 불변성과 복합 상태</h2>

      <ul className="space-y-4">
        {MENUS.map(({ path, title, description }) => (
          <li key={path} className="rounded border border-gray-300 p-4 hover:bg-amber-50">
            <Link to={path} className="block">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
