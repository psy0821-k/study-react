import S from './PracticeGuide.module.css';

interface GuideItem {
  text: string;
  subItems?: GuideItem[];
}

const GUIDE_ITEMS: GuideItem[] = [
  { text: '제출 중(isSubmitting), 성공(isSuccess) 상태를 추가해보세요.' },
  {
    text: '파생된 상태(Derived State)를 만들어보세요. 별도 상태 만들지 않고, formState의 값들을 확인하여 결정합니다.',
    subItems: [
      { text: 'isAllInputed: 모든 필드에 값이 입력되었는가? (Object.values 활용)' },
      { text: 'isSomeInputed: 필드 중 하나라도 값이 입력되었는가?' },
    ],
  },
  {
    text: '폼 제출 핸들러(handleSubmit)를 완성하세요.',
    subItems: [
      { text: '브라우저 기본 새로고침 방지' },
      { text: '방어 로직: 이미 제출 중이거나 모든 필드가 채워지지 않았다면 실행 중단' },
      { text: '제출 시작: 로딩 상태(isSubmitting)를 true로 변경' },
      { text: '비동기 통신 시뮬레이션: 2초 대기 (wait 유틸리티 활용)' },
      { text: '제출 성공: 성공 상태로 변경하고 폼 초기화 핸들러 호출' },
      { text: "제출 오류: '가입에 실패했습니다.' 오류 메시지 안내" },
      { text: '제출 종료: 성공/실패 여부와 상관없이 로딩 상태를 false로 변경' },
    ],
  },
  {
    text: '성공 화면을 조건부 렌더링으로 처리하세요.',
    subItems: [{ text: '성공 상태라면 <SuccessMessage /> 컴포넌트를 반환합니다.' }, { text: 'onBack 속성에 상태를 복구하는 로직을 추가하세요.' }],
  },
  {
    text: '사용자 경험과 접근성을 고려해 가입/취소 버튼의 상태를 제어하세요.',
    subItems: [
      { text: '가입 버튼의 비활성화 상태(aria-disabled)를 설정합니다.' },
      { text: "폼 제출 중에는 가입 버튼의 레이블을 '처리 중...'으로 변경합니다." },
      { text: '취소 버튼의 비활성화 상태(aria-disabled)를 설정합니다.' },
    ],
  },
  {
    text: '폼 초기화 핸들러에 방어 로직을 추가하세요.',
    subItems: [{ text: '제출 중이거나 입력된 내용이 없을 때 초기화되지 않도록 방어합니다.' }],
  },
];

function GuideList({ items }: { items: GuideItem[] }) {
  return (
    <ul className={S.list}>
      {items.map(({ text, subItems }) => (
        <li key={text} className={S.item}>
          {text}
          {subItems && <GuideList items={subItems} />}
        </li>
      ))}
    </ul>
  );
}

export default function PracticeGuide() {
  return (
    <section className={S.guide} aria-label="실습 가이드">
      <details open>
        <summary className={S.title}>실습 가이드</summary>
        <GuideList items={GUIDE_ITEMS} />
      </details>
    </section>
  );
}
