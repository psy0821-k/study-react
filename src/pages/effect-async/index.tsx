import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import LearningGuide from '../../components/LearningGuide';

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
    path: BASE_URL.EFFECT_DEPENDENCIES,
    title: 'Effect 의존성',
    description: '의존성 배열에 따라 이펙트가 다시 실행되는 시점을 콘솔 로그로 관찰하고, 의존성을 올바르게 지정하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.IGNORE_STATE_UPDATE,
    title: '상태 업데이트 무시',
    description: '요청이 중복되거나 입력이 빠르게 바뀔 때, 클린업의 ignore 플래그로 이전 응답이 화면에 반영되지 않도록 막습니다.',
  },
  {
    path: BASE_URL.RACE_CONDITION,
    title: '경쟁 상태(Race Condition)',
    description: 'AbortController로 이전 요청을 중단해, 응답 순서가 뒤바뀌어도 최신 요청의 결과만 화면에 반영되도록 처리합니다.',
  },
  {
    path: BASE_URL.DEBOUNCE,
    title: '디바운스',
    description: 'setTimeout과 클린업으로 연속된 입력 중에는 실행을 미루고, 입력이 멈춘 뒤 한 번만 검색해 불필요한 요청을 줄입니다.',
  },
  {
    path: BASE_URL.DATA_FETCHING,
    title: '데이터 페칭',
    description: 'useEffect로 마운트 시 비동기 데이터를 불러오고, 로딩/에러/성공 상태에 따라 화면을 렌더링하는 방법을 익힙니다.',
  },
] as const;

// 왜 배워야 하는지
const REASONS = [
  '타이머, API 요청, DOM처럼 렌더링 바깥의 외부 시스템과 동기화하려면 useEffect가 필요합니다.',
  '클린업과 의존성 배열을 모르면 메모리 누수, 무한 루프, 중복 요청이 생깁니다.',
  '비동기 응답은 요청 순서대로 도착하지 않아, 오래된 응답이 화면을 덮어쓸 수 있습니다.',
] as const;

// 사용했을 때의 장점
const BENEFITS = [
  '클린업으로 타이머와 이벤트 리스너 같은 자원 누수를 막을 수 있습니다.',
  'ignore 플래그와 AbortController로 오래된 응답이 화면에 반영되는 것을 차단합니다.',
  '디바운스로 불필요한 요청을 줄여 서버와 사용자 경험 모두 개선됩니다.',
  '로딩, 에러, 성공 상태를 일관된 패턴으로 처리할 수 있습니다.',
] as const;

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">이펙트 비동기 통신</h2>

      <LearningGuide reasons={REASONS} benefits={BENEFITS} orderGuide="아래 순서대로 학습하면 Effect 기본 → 클린업 → 의존성 → 비동기 문제 해결 → 실전 데이터 페칭 순으로 자연스럽게 이어집니다." />

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
