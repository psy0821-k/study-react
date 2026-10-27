import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const BASE_URL = PATHS.STATE_IMMER;

// 메뉴별 학습 주제 설명
const MENUS = [
  {
    path: BASE_URL.REFERENCE_CHECK,
    title: '참조 비교',
    description: '객체의 참조(주소)가 어떻게 비교되는지 확인하고, 상태를 직접 변경했을 때 생기는 문제를 익힙니다.',
  },
  {
    path: BASE_URL.TODOS_CRUD,
    title: '할 일 CRUD',
    description: '불변성을 지키며 스프레드 문법으로 할 일 목록을 조회, 추가, 수정, 삭제하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.TODOS_CRUD_WITH_IMMER,
    title: '할 일 CRUD (Immer)',
    description: 'use-immer로 중첩된 상태를 직접 수정하듯 작성하는 방법을 익히고, 스프레드 문법과 비교합니다.',
  },
  {
    path: BASE_URL.DERIVED_STATE,
    title: '파생 상태',
    description: '다른 상태나 props로 계산할 수 있는 값은 상태로 만들지 않고 렌더링 중에 계산하는 방법을 익힙니다.',
  },
] as const;

// 왜 배워야 하는지
const REASONS = [
  'React는 상태의 참조(주소)가 바뀌어야 변경을 감지하므로, 상태를 직접 수정하면 화면이 갱신되지 않습니다.',
  '객체 안에 객체, 배열 안에 객체처럼 중첩된 상태는 스프레드 문법만으로 불변 업데이트를 하기 번거롭고 실수하기 쉽습니다.',
] as const;

// 사용했을 때의 장점
const BENEFITS = [
  '중첩된 상태도 draft를 직접 수정하듯 짧게 작성할 수 있습니다.',
  'push, splice 같은 익숙한 변경 문법을 그대로 사용할 수 있습니다.',
  '변경되지 않은 부분은 기존 참조를 재사용해 React.memo 같은 최적화가 정상 동작합니다.',
  '스프레드를 빠뜨려 원본을 실수로 변경하는 버그를 예방합니다.',
] as const;

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">상태 관리와 Immer</h2>

      <div className="space-y-4 rounded bg-gray-50 p-4">
        <div>
          <h3 className="font-semibold">왜 배워야 할까요?</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            {REASONS.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">사용하면 어떤 점이 좋을까요?</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
            {BENEFITS.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-gray-600">아래 순서대로 학습하면 문제 → 기본 해결 → Immer 적용 → 응용 순으로 자연스럽게 이어집니다.</p>
      </div>

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
