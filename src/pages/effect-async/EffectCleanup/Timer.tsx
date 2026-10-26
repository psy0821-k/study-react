import { useEffect, useState } from 'react';
import S from './EffectCleanup.module.css';

const expensiveCalc = () => {
  console.group('값 비싼 계산');
  console.warn('값 비싼 계산이 수행됨');
  const startTime = Date.now();

  console.time('렌더링 지연 처리');
  // 0.1초 렌더링 지연
  while (Date.now() - startTime < 300 /* 0.3s */) continue;
  console.timeEnd('렌더링 지연 처리');
  console.groupEnd();

  return 0;
};

export default function Timer() {
  const [seconds, setSeconds] = useState(expensiveCalc);

  useEffect(() => {
    // 메모리 힙(heap)의 동일 주소 참조를 사용해야 추가/제거가 가능!
    // 그러므로 함수를 참조하는 변수를 사용해야 합니다.
    const handleClick = () => {
      console.log(`현재 seconds 값은 "${seconds}"이다.`);
    };

    console.log('%c[클린업] 이벤트 리스너 추가(연결)', 'font-weight: 900; font-size: 24px; color: #0077c7;');
    document.addEventListener('click', handleClick);

    return function cleanup() {
      console.log('%c[클린업] 연결된 이벤트 제거', 'font-weight: 900; font-size: 24px; color: #ff4857;');
      document.removeEventListener('click', handleClick);
    };
  }, [seconds]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // 정리(cleanup) 함수 반환
    return () => {
      // 여기서 정리(예: 타이머 해제)하세요!
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={S.card}>
      <p className={S.info}>실시간 타이머</p>
      <output className={S.timerDisplay} aria-live="polite" aria-atomic="true">
        {seconds}s
      </output>
      <span className={S.info}>이 카드가 사라지면 콘솔 로그도 멈춰야 합니다.</span>
    </div>
  );
}
