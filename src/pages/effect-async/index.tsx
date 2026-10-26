import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const BASE_URL = PATHS.EFFECT_ASYNC;

// 메뉴별 학습 주제 설명
const MENUS = [
  {
    path: BASE_URL.EFFECT_BASIC,
    title: 'Effect 기초',
    description: '렌더링과 커밋 이후 실행되는 useEffect의 동작 순서를 콘솔 로그로 확인하고, 외부 시스템(document.title)과 동기화하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.EFFECT_CLEANUP,
    title: 'Effect 클린업',
    description: '타이머와 이벤트 리스너처럼 이펙트가 만든 자원을 클린업 함수로 정리하고, 컴포넌트 소멸 시 동작을 관찰합니다.',
  },
  {
    path: BASE_URL.DATA_FETCHING,
    title: '데이터 페칭',
    description: 'useEffect로 마운트 시 비동기 데이터를 불러오고, 로딩/에러/성공 상태에 따라 화면을 렌더링하는 방법을 익힙니다.',
  },
] as const;

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">이펙트 비동기 통신</h2>

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
