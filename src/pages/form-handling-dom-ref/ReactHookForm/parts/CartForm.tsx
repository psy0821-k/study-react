import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CATEGORIES, cartSchema, type CartValues } from '../schema'
import CartTotal from './CartTotal'
import NumberField from './NumberField'
import S from '../ReactHookForm.module.css'

const EMPTY_ITEM: CartValues['cart'][number] = { category: '', name: '', price: 0, quantity: 1 }

export default function CartForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<CartValues>({
    resolver: zodResolver(cartSchema),
    defaultValues: { cart: [EMPTY_ITEM] },
  })

  // fields: 렌더링용 목록 (각 항목의 고유 id 포함), append/remove: 항목 추가/삭제
  const { fields, append, remove } = useFieldArray({ control, name: 'cart' })

  const onSubmit: SubmitHandler<CartValues> = (values) => {
    console.log('주문 데이터', values)
  }

  return (
    <section className={S.card}>
      <h2 className={S.title}>useFieldArray + useWatch</h2>
      <p className={S.desc}>항목을 동적으로 추가/삭제하고, 합계는 useWatch로 실시간 계산합니다.</p>

      <form onSubmit={handleSubmit(onSubmit)} className={S.form} noValidate>
        {fields.map((field, index) => {
          const itemErrors = errors.cart?.[index]
          const itemErrorMessage =
            itemErrors?.category?.message ?? itemErrors?.name?.message ?? itemErrors?.price?.message ?? itemErrors?.quantity?.message

          return (
            <div key={field.id} className={S.row}>
              <select className={S.input} {...register(`cart.${index}.category`)}>
                <option value="">카테고리</option>
                {CATEGORIES.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
              <input placeholder="상품명" className={S.input} {...register(`cart.${index}.name`)} />
              <NumberField control={control} name={`cart.${index}.price`} placeholder="가격" />
              <NumberField control={control} name={`cart.${index}.quantity`} placeholder="수량" />
              <button type="button" className={S.subButton} onClick={() => remove(index)}>삭제</button>
              {itemErrorMessage && <p role="alert" className={S.error}>{itemErrorMessage}</p>}
            </div>
          )
        })}

        {errors.cart?.root && <p role="alert" className={S.error}>{errors.cart.root.message}</p>}

        <button type="button" className={S.subButton} onClick={() => append(EMPTY_ITEM)}>상품 추가</button>
        <CartTotal control={control} />
        <button type="submit" className={S.button}>주문하기</button>
      </form>

      {isSubmitSuccessful && <p role="status" className={S.success}>주문 데이터를 콘솔에 출력했습니다.</p>}
    </section>
  )
}
