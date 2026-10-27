import { useWatch, type Control } from 'react-hook-form';
import type { CartValues } from '../schema';
import S from '../ReactHookForm.module.css';

interface Props {
  control: Control<CartValues>;
}

// useWatch는 이 컴포넌트만 리렌더링하므로, 입력할 때 부모 폼은 다시 그려지지 않습니다.
export default function CartTotal({ control }: Props) {
  const cart = useWatch({ control, name: 'cart' });
  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0);

  return <p className={S.total}>합계: {total.toLocaleString('ko-KR')}원</p>;
}
