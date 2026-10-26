import { useState } from 'react';
import Timer from './Timer';
import S from './EffectCleanup.module.css';

export default function EffectCleanup() {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => setIsShow(!isShow);

  return (
    <article className={S.container}>
      <header>
        <h2>이펙트(Effect) 클린업</h2>
        <p>컴포넌트의 소멸과 자원 정리 과정을 관찰합니다.</p>
        <ul>
          <li>cleanup을 하지 않으면 언마운트 후에도 타이머 콜백이 계속 실행되어 메모리 누수가 발생합니다.</li>
          <li>클린업 함수에서 clearInterval로 타이머를 해제해 누수를 방지합니다.</li>
        </ul>
      </header>

      <button type="button" className={S.toggleButton} onClick={handleToggle} aria-pressed={isShow}>
        타이머 {isShow ? '제거' : '추가'}
      </button>

      <div role="region" aria-live="polite">
        {isShow ? <Timer /> : null}
      </div>
    </article>
  );
}
