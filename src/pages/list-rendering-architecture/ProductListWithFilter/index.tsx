import { useState } from 'react';
import ProductSearchResult from './parts/ProductSearchResult';
import ProductSearch from './parts/ProductSearch';
import productsData from './data/products.json';
import type { Product } from './type/product';
import S from './style.module.css';

const INITIAL_PRODUCTS: Product[] = productsData;

export default function ProductListWithFilter() {
  // 화면에 렌더링할 데이터 관리 상태 선언
  const [products] = useState(INITIAL_PRODUCTS);

  // 검색어 관리할 상태 선언
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section className={S.container}>
      <h2 className={S.title}>인기 상품 목록</h2>
      <ProductSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductSearchResult products={filteredProducts} searchQuery={searchQuery} />
    </section>
  );
}
