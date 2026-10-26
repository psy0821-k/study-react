import { useEffect, useState } from 'react';
import { getTodos, type Todo } from '../api/getTodos';
import S from './Debounce.module.css';

// 입력이 멈춘 뒤 요청을 보낼 대기 시간(ms)
const DEBOUNCE_TIME = 300;

/**
 * 디바운스 (Debounce)
 * - 연속된 입력 중에는 요청을 미루고, 마지막 입력 후 일정 시간이 지나면 한 번만 요청
 * - 디바운스는 요청 횟수를 줄이고, AbortController는 이미 나간 이전 요청을 중단 (함께 사용)
 */
export default function Debounce() {
  const [userId, setUserId] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // 아직 응답되지 않은 이전의 네트워크 요청 중단용
    const controller = new AbortController();
    const { signal } = controller;

    const fetchTodos = async () => {
      if (userId === '') {
        setTodos([]);
        setError('');
        return;
      }

      setLoading(true);

      try {
        const data = await getTodos(userId, { signal });
        setTodos(data);
        setError('');
      } catch (err) {
        // 중단된 요청은 에러가 아니므로 무시
        if (err instanceof Error && err.name !== 'AbortError') {
          setError('데이터를 불러오지 못했습니다.');
          setTodos([]);
        }
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    // 디바운스: DEBOUNCE_TIME 동안 입력이 더 없을 때만 요청
    const debounceId = setTimeout(fetchTodos, DEBOUNCE_TIME);

    return () => {
      controller.abort(); // 응답되지 않은 이전 요청 중단
      clearTimeout(debounceId); // 아직 실행되지 않은 예약 취소
    };
  }, [userId]);

  return (
    <article className={S.container}>
      <header className={S.searchField}>
        <h2 className={S.title}>디바운스 검색</h2>
        <label htmlFor="debounce-user-id">사용자 ID로 할 일 찾기 (1~20)</label>
        <input
          id="debounce-user-id"
          type="number"
          min={1}
          max={20}
          value={userId}
          onChange={e => setUserId(e.target.value.trim())}
          placeholder="사용자 ID를 입력하세요..."
          aria-describedby="debounce-helper"
        />
        <span id="debounce-helper" className={S.helperText}>
          입력을 멈추고 {DEBOUNCE_TIME / 1000}초가 지나면 요청이 실행됩니다.
        </span>
      </header>

      <div className={S.resultArea}>
        {!loading && todos.length > 0 && (
          <ul className={S.list}>
            {todos.map(({ id, content, completed }) => (
              <li key={id} className={S.item}>
                <span className={completed ? S.completed : ''}>{content}</span>
                <span aria-label={completed ? '완료' : '예정'}>{completed ? '✅' : '❎'}</span>
              </li>
            ))}
          </ul>
        )}

        <div role="status">
          {loading && <p className={S.statusText}>데이터를 가져오고 있습니다...</p>}
          {!loading && !error && userId && todos.length === 0 && <p className={S.statusText}>검색 결과가 없습니다.</p>}
        </div>

        {!loading && error && (
          <p role="alert" className={S.error}>
            🚨 {error}
          </p>
        )}
      </div>

      <section className={S.guide}>
        <h3>디바운스는 어떻게 동작할까?</h3>
        <ol>
          <li>입력이 바뀔 때마다 이펙트가 setTimeout으로 요청을 예약합니다.</li>
          <li>대기 시간 안에 다시 입력되면 클린업이 clearTimeout으로 이전 예약을 취소합니다.</li>
          <li>이미 나간 이전 요청은 클린업의 abort()로 중단합니다.</li>
          <li>입력이 멈추고 대기 시간이 지나면 마지막 입력에 대한 요청만 실행됩니다.</li>
        </ol>
        <p>디바운스는 요청 횟수를 줄이고, AbortController는 응답 순서가 뒤바뀌는 문제를 막으므로 함께 사용합니다.</p>
      </section>
    </article>
  );
}
