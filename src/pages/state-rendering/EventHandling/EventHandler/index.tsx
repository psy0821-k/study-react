import { useState, type MouseEvent } from 'react';
import S from './style.module.css';

export default function EventHandler() {
  // 컴포넌트 상태(기억되는 데이터 값) 관리
  const [count, setCount] = useState(0);

  // 화살표 함수 식 (이벤트 객체를 사용할 경우, 타입 지정 필요)
  const handleIncreaseCount = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('버블링', e.eventPhase);
    console.log(e.type + ' 이벤트 발동!');
    const nextCount = count + 1;
    setCount(nextCount);
  };

  const makeClickHandler = (message: string) => (e: MouseEvent<HTMLButtonElement>) => {
    console.log('캡쳐링', e.eventPhase);
    console.log(message);
  };

  const message = '오늘 하루도 행복하게 시작합시다! 🍀';

  return (
    <section className={S.container}>
      <h2 className={S.title}>이벤트 핸들링</h2>

      <h3>언제 이벤트 핸들러 사용할까?</h3>
      <ul className="my-4">
        <li>사용자 행동이 발생한 시점에 실행할 로직은 이벤트 핸들러에 작성</li>
        <li>화면 표현만 변경한다면 CSS로 해결할 수 있는지 먼저 확인</li>
        <li>React 상태를 변경하면 React가 필요한 UI를 다시 렌더링</li>
        <li>렌더링 중 실행할 함수와 이벤트 발생 시 실행할 함수를 구분</li>
      </ul>
      <div role="group" className={S.buttonGroup}>
        <button type="button" className={S.button} onClick={handleIncreaseCount} onClickCapture={makeClickHandler(message)}>
          클릭(Click) 이벤트 ({count})
        </button>
        <button
          type="button"
          className={`${S.button} ${S.secondary}`}
          onMouseEnter={e => {
            console.log(`${e.type} 이벤트 발동!`);
          }}
          onMouseLeave={e => {
            console.log(e.type + ' 이벤트 발동!');
          }}
        >
          호버(MouseEnter) 이벤트
        </button>
      </div>
    </section>
  );
}
