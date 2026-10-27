import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import LearningGuide from '../../components/LearningGuide';

const BASE_URL = PATHS.LIST_RENDERING;

// 메뉴별 학습 주제 설명
const MENUS = [
  {
    path: BASE_URL.PRODUCT_LIST,
    title: '인기 상품 목록',
    description: 'map()으로 배열 데이터를 카드 컴포넌트 목록으로 렌더링하고, key로 각 항목을 구분하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.PRODUCT_LIST_WITH_FILTER,
    title: '상품 검색 필터 목록',
    description: '검색어 상태로 목록을 필터링하고, 검색 입력과 결과를 컴포넌트로 분리하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.SCHEDULE_TABLE,
    title: '시간표',
    description: '일정 데이터를 테이블 행으로 렌더링하고, 날짜 포맷과 완료 여부에 따라 표시를 달리하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.SHIFT_MANAGER,
    title: '근무 순서 조정',
    description: '배열을 복사해 섞은 뒤 상태로 갱신하고, 순서가 바뀌어도 key로 각 항목을 안정적으로 유지하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.STATUS_LIST,
    title: '상태별 목록',
    description: '로딩 중, 데이터 없음, 데이터 있음 상태에 따라 화면을 조건부로 렌더링하는 방법을 익힙니다.',
  },
] as const;

// 왜 배워야 하는지
const REASONS = [
  '실제 화면 대부분이 목록이므로 배열 데이터를 UI로 바꾸는 능력은 필수입니다.',
  'key를 잘못 쓰면 항목의 상태가 꼬이거나 불필요한 리렌더링이 생깁니다.',
  '로딩 중, 데이터 없음 같은 상태별 화면 처리는 실무에서 항상 필요합니다.',
] as const;

// 사용했을 때의 장점
const BENEFITS = [
  'map()으로 데이터와 UI를 선언적으로 연결할 수 있습니다.',
  'key로 순서가 바뀌어도 항목을 안정적으로 유지할 수 있습니다.',
  '검색어 같은 상태로 목록을 필터링하고 컴포넌트로 분리해 재사용할 수 있습니다.',
] as const;

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">리스트 렌더링 설계</h2>
      <p>컴포넌트로 제작되는 리스트들을 주제별로 실습하는 공간입니다.</p>
      <LearningGuide reasons={REASONS} benefits={BENEFITS} orderGuide="아래 순서대로 학습하면 기본 목록 → 필터링 → 데이터 표현 → 순서 변경 → 상태별 화면 순으로 자연스럽게 이어집니다." />


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
