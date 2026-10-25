import { useState } from 'react';
import S from './style.module.css';
import { log } from './utils/log';

export default function Immutability() {
  const INIT_TEXT = ['하나', '둘', '셋'];
  const [items, setItems] = useState([...INIT_TEXT]);

  // 직접 수정(push) 방식
  const handleMutation = () => {
    console.log('뮤테이션(변이)');

    // 원본 배열을 사용해 직접 수정
    items.push('push1', 'push2', 'push3');
    log(`원본 배열 데이터에 새로운 항목이 추가되었습니다. ${items}`);
    // 리액트가 꿈쩍도 안하는 이유!!
    // 메모리 힙(heap) : 객체형 데이터 저장 (참조 주소)
    setItems(items);
  };

  // 새로운 배열 생성(spread) 방식
  const handleKeepImmutable = () => {
    console.log('불변성(Immutability) 유지');
    setItems([...items, 'spread1', 'spread2', 'spread3']);
  };

  const handleResetResult = () => {
    setItems(INIT_TEXT);
  };

  return (
    <section className={S.container}>
      <h2 className={S.title}>불변성(Immutability) 관리 실습</h2>

      <div className="mb-8">
        <h3 className="mb-4">직접 수정 (Mutation)</h3>
        <p>배열의 주소(참조)는 그대로인 채 내부 값만 변경됩니다.</p>
        <ul>
          <li>리액트는 이전 상태와 새 상태의 참조를 비교하고, 같으면 변경이 없다고 판단해 리렌더링하지 않습니다.</li>
          <li>그 결과 내부 데이터는 쌓이지만 화면은 갱신되지 않습니다.</li>
          <li>이후 다른 이유로 리렌더링이 일어나면, 그동안 쌓인 데이터가 한꺼번에 화면에 나타납니다.</li>
        </ul>
      </div>

      <h3 className="mb-4">불변성 유지 (Spread)</h3>
      <p>기존 배열을 수정하지 않고, 값을 복사한 새 배열을 만들어 상태로 전달합니다.</p>
      <ul>
        <li>새 배열은 이전과 다른 참조(주소)를 가지므로, 리액트가 변경을 감지하고 리렌더링합니다.</li>
        <li>그 결과 버튼을 누르는 즉시 추가된 항목이 화면에 나타납니다.</li>
        <li>원본 배열은 그대로 유지되어 이전 상태와 비교하거나 되돌리기도 쉽습니다.</li>
      </ul>

      <div role="group" className={S.buttonGroup}>
        <button type="button" className={S.button} onClick={handleMutation}>
          직접 수정 (push)
        </button>
        <button type="button" className={`${S.button} ${S.primary}`} onClick={handleKeepImmutable}>
          새 배열 생성 (Spread)
        </button>
        <button type="button" className={`${S.button} bg-red-500`} onClick={handleResetResult}>
          초기화
        </button>
      </div>

      <div className={S.listWrapper}>
        <ul className={S.itemList}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
