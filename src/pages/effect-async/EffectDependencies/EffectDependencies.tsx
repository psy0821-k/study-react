import { useEffect, useState } from 'react';
import S from './EffectDependencies.module.css';

export default function EffectDependencies() {
  // 상태 선언
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [mounted, setMounted] = useState(false);

  // 이펙트 설정 (종속성 또는 의존성(dependencies: Array)
  // 상황 1. 의존성 배열이 없을 경우
  // 컴포넌트가 렌더링 할 때 마다 이펙트 함수의 로직이 실행
  useEffect(() => {
    if (text.length > 8) return;
    document.title = `⌨️ ${text.length === 0 ? '입력 대기 중...' : text}`;
    console.log('외부 시스템인 브라우저와 리액트의 상태를 동기화했습니다! ✨');
  });

  // 상황 2. 의존성 배열이 비어있는 경우
  // 최초 렌더링 할 때 단 한번만 이펙트 함수의 로직이 실행
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true); // '리액트 앱이 마운트 되었다!'

    const currentYear = new Date().getFullYear();
    setCount(currentYear); // 0 -> 2026
    console.log(`올해는 ${currentYear}년입니다. 📆`);
  }, []);

  // 상황 3. 의존성 배열에 특정 값이 포함된 경우
  // 종속성 배열에 반응성 데이터를 추가하면 오직 그 데이터가 변경될 때만 이펙트 함수의 로직이 실행됨
  useEffect(() => {
    console.log(`현재 카운트 값 = ${count}`);
    document.title = `현재 카운트 = ${count}`;
  }, [count]);

  const mountedISOTime = mounted ? new Date().toISOString() : undefined;

  return (
    <article className={S.container}>
      <header className={S.display}>
        <h2>의존성 배열 학습</h2>
        <output>{mounted ? '마운트 됨' : '마운트 안됨'}</output>
        <p className={S.description}>실시간 카운트 상태를 확인하세요.</p>
        <output className={S.countOutput} aria-live="polite" aria-atomic="true">
          {count}
        </output>
      </header>

      <div className={S.controls}>
        <button type="button" className={S.counterButton} aria-label="카운트 1 증가" onClick={() => setCount(count + 1)}>
          카운트 업!
        </button>

        <div className={S.field}>
          <label htmlFor="effect-input" className={S.label}>
            의존성 테스트 입력창
          </label>
          <input
            id="effect-input"
            type="text"
            className={S.input}
            placeholder="여기에 타이핑해도 Case 3은 실행되지 않습니다."
            aria-describedby="input-help"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <p id="input-help" className="sr-only">
            이 입력창의 변화는 특정 의존성 배열이 설정된 Effect를 트리거하지 않습니다.
          </p>
        </div>
      </div>

      <section className={S.guide}>
        <h3>이펙트는 언제 다시 실행될까?</h3>
        <ol>
          <li>클릭이나 입력으로 상태가 바뀌면 컴포넌트가 다시 실행(리렌더링)됩니다.</li>
          <li>렌더링이 끝나면 React가 각 이펙트의 의존성 배열 값을 이전 값과 비교합니다.</li>
          <li>값이 달라졌으면 이펙트를 재실행하고, 같으면 건너뜁니다.</li>
        </ol>
        <ul>
          <li>의존성 배열 없음: 렌더링마다 매번 실행됩니다.</li>
          <li>[]: 마운트 직후 최초 1회만 실행됩니다.</li>
          <li>[count]: 최초 1회와 count가 이전 값과 달라졌을 때만 실행됩니다.</li>
        </ul>
        <p>개발 모드의 StrictMode에서는 마운트 시 이펙트가 한 번 더 실행될 수 있으며, 배포 환경에서는 발생하지 않습니다.</p>
      </section>

      <footer className={S.logBox} aria-label="상태 로그">
        <p>콘솔창(F12)을 확인하며 Effect의 동작을 관찰하세요.</p>
        <p>
          현재 입력 내용:
          <ins dateTime={mountedISOTime} className={S.textHighlight}>
            {text || '입력 대기 중...'}
          </ins>
        </p>
      </footer>
    </article>
  );
}
