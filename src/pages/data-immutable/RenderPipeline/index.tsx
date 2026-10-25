import { useEffect, useState } from 'react';
import S from './style.module.css';

export default function RenderPipeline() {
  const [orderCount, setOrderCount] = useState(0);

  console.log(`[Render] 리액트 주방에서 주문받은 요리(주문 번호: ${orderCount}) 중...`);

  const handleOrder = () => {
    setOrderCount(oc => oc + 1);
    console.log('[Trigger] 리액트 주방에 주문하기');
  };

  useEffect(() => {
    console.log('[Commit] 실제 DOM에 반영해 화면을 업데이트하기');
  });

  return (
    <section className={S.container}>
      <h2 className={S.title}>리액트 주방 (파이프라인)</h2>

      <p>버튼을 누르고 콘솔을 열면 아래 순서로 로그가 찍힙니다. (Trigger는 주문, Render는 조리, Commit은 서빙)</p>
      <ol>
        <li>
          <strong>Trigger</strong>: 클릭하면 <code>handleOrder</code>가 실행되어 <code>setOrderCount</code>로 렌더링을 요청합니다.
        </li>
        <li>
          <strong>Render</strong>: 핸들러가 끝나면 컴포넌트 함수가 다시 실행되고, 새 상태로 화면 구조(가상 DOM)를 계산합니다.
        </li>
        <li>
          <strong>Commit</strong>: 계산 결과를 실제 DOM에 반영합니다. 이후 <code>useEffect</code>가 실행됩니다.
        </li>
      </ol>

      <div className={S.display}>
        <p className={S.text}>
          현재 주문 번호: <strong>{orderCount}</strong>
        </p>
      </div>

      <button type="button" className={S.button} onClick={handleOrder}>
        [Trigger] 새 요리 주문하기
      </button>
    </section>
  );
}
