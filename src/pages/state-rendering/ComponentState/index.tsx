import Counter from './Counter';
import S from './style.module.css';

function ComponentState() {
  return (
    <div className={S.container}>
      <section className={`${S.container} mb-20`}>
        <div className="ml-40">
          <h2 className="text-3xl mb-4">컴포넌트 스테이트</h2>
          <p>
            리액트에서는 자바스크립트와 달리 값 그 자체를 변경하는 것이 아니라, 새로운 값을 리액트에 전달해 화면을 다시 그리도록 요청합니다.
            <br />
            리액트에서는 상태를 변경하기 위해 useState를 사용합니다 튜플형태로 <code>[value, setValue] = useState(초깃값)</code> 으로 구성됩니다
          </p>
        </div>
      </section>
      <Counter />
    </div>
  );
}

export default ComponentState;
