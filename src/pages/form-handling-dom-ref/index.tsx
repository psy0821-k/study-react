import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

const BASE_URL = PATHS.FORM_HANDLING_DOM_REF;

// 메뉴별 학습 주제 설명
const MENUS = [
  {
    path: BASE_URL.MULTI_INPUT_FORM,
    title: '다중 입력 폼',
    description: '여러 입력 필드의 값을 하나의 객체 상태로 관리하고, 폼 초기화(reset)를 처리하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.FORM_SUBMISSION,
    title: '폼 제출',
    description: '회원 가입 폼의 각 입력 필드를 검증하고, 제출 시 비동기 통신을 시뮬레이션해 성공 화면까지 처리하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.FILE_UPLOAD,
    title: '파일 업로드',
    description: 'useRef로 파일 인풋 DOM에 접근해 이미지 미리보기를 만들고, 업로드 결과와 클립보드 복사까지 처리하는 방법을 익힙니다.',
  },
  {
    path: BASE_URL.REF_STUDY,
    title: 'useRef 훅 활용',
    description: '리렌더링 없이 값을 유지하는 ref의 특징을 state와 비교하고, 타이머 ID 보관과 DOM 포커스 제어 사례로 익힙니다.',
  },
] as const;

export default function Home() {
  return (
    <section className="mx-auto max-w-2xl space-y-6">
      <h2 className="text-xl font-bold">폼 핸들링 DOM 참조</h2>

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
