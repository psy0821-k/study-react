import { useState } from 'react';
import dummyData from './data/dummy.json';
import type { Item } from './type/item';
import S from './style.module.css';

const DUMMY_DATA: Item[] = dummyData;
const DELAY = 1500;

export default function StatusList() {
  // 제어할 상태 선언
  // - 로딩(loading, isLoading, pending, isPending, ...) 상태
  // - 데이터(data, items, ...) 상태
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  const handleFetchData = async () => {
    if (isLoading) return;
    console.log('데이터 가져오기 요청');

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, DELAY));
      setItems(DUMMY_DATA);
    } catch {
      console.error('데이터 가져오기 실패!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (isLoading) return;

    console.log('데이터 초기화');
    setItems([]);
  };

  return (
    <section className={S.container}>
      <h2 className="sr-only">상품 상태별 목록 확인</h2>

      <div role="status" aria-busy={isLoading} className={S.statusBox}>
        {isLoading && <p className={S.loadingText}>데이터를 로딩 중입니다...</p>}

        {!isLoading && items.length === 0 && (
          <div className={S.emptyText}>
            <p>표시할 상품이 없습니다.</p>
            <p>아래 버튼을 눌러 데이터를 불러오세요.</p>
          </div>
        )}

        {!isLoading && items.length > 0 && (
          <ul className={S.list}>
            {items.map(item => (
              <li key={item.id} className={S.item}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div role="group" className={S.buttonGroup}>
        <button type="button" onClick={handleFetchData} aria-disabled={isLoading}>
          데이터 가져오기
        </button>
        <button type="button" onClick={handleReset} aria-disabled={isLoading}>
          데이터 초기화
        </button>
      </div>
    </section>
  );
}
