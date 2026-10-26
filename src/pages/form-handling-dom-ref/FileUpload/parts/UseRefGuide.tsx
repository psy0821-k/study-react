import S from './UseRefGuide.module.css'

export default function UseRefGuide() {
  return (
    <section className={S.guide} aria-labelledby="use-ref-guide-title">
      <h3 id="use-ref-guide-title" className={S.title}>
        useRef는 왜 사용할까?
      </h3>

      <h4>역할 구분</h4>
      <ul>
        <li>useState: 화면이 바뀌어야 하는 값 (미리보기 주소 previewUrl, 업로드 중, 업로드 결과)</li>
        <li>useRef: DOM을 직접 만지거나 화면과 무관한 값을 기억 (파일 인풋 요소 fileRef)</li>
      </ul>

      <h4>이 페이지에서 useRef를 쓰는 이유</h4>
      <ol>
        <li>인풋 값 제거: 미리보기 삭제 시 fileRef.current.value = ''로 인풋 안에 남은 선택 파일도 함께 지웁니다. 지우지 않으면 같은 파일을 다시 선택해도 change 이벤트가 발생하지 않습니다.</li>
        <li>파일 꺼내기: 제출 시 fileRef.current?.files?.[0]로 실제 File 객체를 꺼내 FormData에 담아 전송합니다.</li>
      </ol>

      <h4>DOM을 직접 만진다는 의미</h4>
      <p>
        state를 바꿔 React가 화면을 고치게 하는 대신, 실제 DOM 요소에 직접 명령(focus(), value = '', play() 등)을 내리는 것입니다. 파일 인풋은 보안상 state로
        제어할 수 없어서 이 방식이 필요합니다.
      </p>

      <h4>미리보기를 그리는 흐름은 useState</h4>
      <p>파일 선택 → URL.createObjectURL(file)로 주소 변환 → setPreviewUrl로 상태 저장 → 리렌더링 → img src로 표시</p>

      <h4>그 외 useRef 사용처</h4>
      <ul>
        <li>DOM 접근: 포커스 이동, 스크롤, 미디어 재생, 크기 측정, 바깥 클릭 감지, 외부 라이브러리 연동</li>
        <li>값 보관: 타이머 ID, 이전 값, 렌더링 횟수, 한 번만 실행 플래그, AbortController</li>
      </ul>

      <p className={S.summary}>화면을 다시 그려야 하면 state, DOM을 직접 만져야 하거나 화면과 무관한 값을 기억만 하면 ref입니다.</p>
    </section>
  )
}
