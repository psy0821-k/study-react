import { useState } from 'react';
import S from './style.module.css';
import { Section } from '../../../../components';

// 소스 원문에서 COUNTER 함수의 로직 부분(return 이전)만 추출

const COUNTER = () => {
  let localCount = 0;
  const handleIncreaseLocalCount = () => {
    localCount += 1;
    console.log('현재 카운트 값');
  };

  const [stateCount, setStateCount] = useState(0);

  const handleIncreaseStateCount = () => {
    const nextStateCount = stateCount + 1;

    setStateCount(nextStateCount);
    console.log('상태 카운트 현재 값 =', { stateCount });
    console.log('상태 카운트 다음 값 =', { nextStateCount });
  };

  return (
    <div>
      <section className={S.container}>
        <h2 className={S.title}>상태 관리 기초</h2>
        <div role="group" className={S.displayGroup}>
          {/* 일반 로컬 변수 영역 */}
          <div className={S.card}>
            <span className={S.label}>일반 로컬 변수</span>
            <strong className={S.value}>{localCount}</strong>
          </div>

          {/* State 변수 영역 */}
          <div className={`${S.card} ${S.highlight}`}>
            <span className={S.label}>리액트 상태 변수</span>
            <strong className={S.value}>{stateCount}</strong>
          </div>
        </div>

        <div className={S.buttonGroup}>
          <button type="button" className={S.button} onClick={handleIncreaseLocalCount}>
            일반 로컬 변수 증가
          </button>
          <button type="button" className={`${S.button} ${S.primary}`} onClick={handleIncreaseStateCount}>
            리액트 상태 변수 증가
          </button>
        </div>
      </section>
    </div>
  );
};

export default COUNTER;
