import { useState } from 'react';
import S from './style.module.css';

const INITIAL_COUNT = 0;

export default function BatchCounter() {
  const [count, setCount] = useState(INITIAL_COUNT);

  const handleResetCount = () => setCount(INITIAL_COUNT);

  const handleIncreaseSingle = () => {
    const nextCount = count + 1;
    setCount(nextCount);
  };

  const handleIncreaseTriple = () => {
    // Batch '일괄적으로 한꺼번에' 업데이트
    // 조건: setCount 함수를 3번 사용

    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <article className={S.container}>
      <h3 className={S.display} aria-label={`배치 카운터 현재 값: ${count}`}>
        {count}
      </h3>

      <div className={S.actions}>
        <button type="button" className={S.button} onClick={handleResetCount}>
          초기화
        </button>

        <button type="button" className={`${S.button} ${S.primary}`} onClick={handleIncreaseSingle}>
          +1 증가 (Single)
        </button>

        <button type="button" className={`${S.button} ${S.primary}`} onClick={handleIncreaseTriple}>
          +3 증가 (Batching)
        </button>
      </div>

      <section>
        <h4>배치(Batch)란?</h4>
        <p>
          한 이벤트 핸들러 안에서 호출된 여러 상태 업데이트를 모아서, <strong>리렌더링을 한 번만</strong> 수행하는
          리액트의 동작입니다.
        </p>
        <ul>
          <li>
            리액트의 상태 업데이트는 <strong>큐(Queue)</strong>에 쌓였다가 핸들러가 끝난 뒤 한꺼번에 처리됩니다.
          </li>
          <li>
            <code>+1 증가 (Single)</code>: <code>setCount(count + 1)</code> 한 번 호출 → 렌더링 1번
          </li>
          <li>
            <code>+3 증가 (Batching)</code>: <code>setCount(prev =&gt; prev + 1)</code>을 3번 호출 → 큐에 3개가 쌓인 뒤
            렌더링 1번
          </li>
        </ul>
        <p>
          <code>setCount(count + 1)</code>을 3번 호출하면 <code>count</code>는 해당 렌더링 시점의 스냅샷 값이라 +1만
          적용됩니다. 이전 값을 기준으로 누적하려면 <code>prev =&gt; prev + 1</code> 형태의 함수형 업데이트를 사용합니다.
        </p>
      </section>
    </article>
  );
}
