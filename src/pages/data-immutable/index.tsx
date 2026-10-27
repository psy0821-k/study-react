import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import LearningGuide from '../../components/LearningGuide';

const BASE_URL = PATHS.IMMUTABILITY_STATE;

// 메뉴별 학습 주제 설명
const MENUS = [
  {
    path: BASE_URL.IMMUTABILITY,
    title: '불변성',
    description: 'useState로 컴포넌트가 기억하는 값을 만들고, 값이 바뀌면 화면이 다시 그려지는 흐름을 익힙니다.',
  },
  {
    path: BASE_URL.IMMUTABILITY_CRUD,
    title: '불변성 CRUD',
    description: '장바구니 배열에서 상품을 추가, 수정, 삭제할 때 원본을 변경하지 않고 새 배열로 상태를 갱신하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.RENDER_PIPELINE,
    title: '렌더 파이프라인',
    description: 'Trigger → Render → Commit으로 이어지는 리액트의 렌더링 과정을 주방 비유로 익힙니다.',
  },
  {
    path: BASE_URL.VIRTUAL_DOM,
    title: '가상 DOM',
    description: '바닐라 JS의 직접 DOM 조작과 리액트의 가상 DOM 방식을 비교해, 변경된 부분만 갱신하는 원리를 익힙니다.',
  },
] as const;

// 왜 배워야 하는지
const REASONS = [
  'React는 상태의 참조(주소)가 바뀌어야 변경을 감지하므로, 원본을 직접 수정하면 화면이 갱신되지 않습니다.',
  '렌더링이 어떤 과정으로 화면에 반영되는지 알아야 불필요한 렌더링과 성능 문제를 이해할 수 있습니다.',
] as const;

// 사용했을 때의 장점
const BENEFITS = [
  '새 배열과 새 객체로 갱신하면 상태 변화를 추적하기 쉽고 예측 가능합니다.',
  '불변성을 지키면 변경 감지와 최적화(React.memo 등)가 정상 동작합니다.',
  '가상 DOM 원리를 알면 변경된 부분만 갱신된다는 점을 근거로 코드를 설계할 수 있습니다.',
] as const;

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">데이터 불변성과 복합 상태</h2>

      <LearningGuide reasons={REASONS} benefits={BENEFITS} orderGuide="아래 순서대로 학습하면 불변성 개념 → 실전 CRUD → 렌더링 과정 → 가상 DOM 순으로 자연스럽게 이어집니다." />

      <ul className="space-y-4">
        {MENUS.map(({ path, title, description }, index) => (
          <li key={path} className="rounded border border-gray-300 p-4 hover:bg-amber-50">
            <Link to={path} className="block">
              <h3 className="font-semibold">
                {index + 1}. {title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
