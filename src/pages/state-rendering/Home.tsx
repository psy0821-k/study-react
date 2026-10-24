import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const BASE_URL = PATHS.STATE_RENDERING;

// 메뉴별 학습 주제 설명
const MENUS = [
  {
    path: BASE_URL.COMPONENT_STATE,
    title: '컴포넌트 스테이트',
    description: 'useState로 컴포넌트가 기억하는 값을 만들고, 값이 바뀌면 화면이 다시 그려지는 흐름을 익힙니다.',
  },
  {
    path: BASE_URL.CONDITIONAL_RENDERING,
    title: '조건부 렌더링',
    description: '삼항 연산자, && 연산자, 조기 반환으로 조건에 따라 보여줄 UI를 나누는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.CONTROLLED_COMPONENT,
    title: '제어 컴포넌트',
    description: '입력 요소의 value를 상태로 관리하고, onChange로 동기화하며 유효성을 검사하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.EVENT_HANDLING,
    title: '이벤트 핸들링',
    description: '클릭, 마우스, 키보드 이벤트를 처리하고 이벤트 객체 타입과 버블링/캡처링, 클로저 핸들러를 익힙니다.',
  },
  {
    path: BASE_URL.STATE_IS_SNAPSHOT,
    title: '스냅샷',
    description: '상태는 렌더링 시점의 스냅샷이라는 점과, 같은 핸들러 안에서 상태 값이 바로 바뀌지 않는 이유를 익힙니다.',
  },
  {
    path: BASE_URL.UPDATE_STATE,
    title: '상태 업데이트',
    description: '여러 상태 업데이트를 모아 한 번만 렌더링하는 배치(Batch)와 함수형 업데이트를 익힙니다.',
  },
] as const;

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">상태와 렌더링</h2>
      <p>React의 상태 관리와 렌더링 핵심 개념을 주제별로 실습하는 공간입니다.</p>

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
