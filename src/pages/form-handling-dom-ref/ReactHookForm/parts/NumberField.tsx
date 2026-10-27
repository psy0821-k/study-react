import { useController, type Control } from 'react-hook-form'
import type { CartValues } from '../schema'
import S from '../ReactHookForm.module.css'

type NumberFieldName = `cart.${number}.price` | `cart.${number}.quantity`

interface Props {
  control: Control<CartValues>
  name: NumberFieldName
  placeholder: string
}

// 화면에는 1,000 형식으로 보여주고, 폼에는 숫자(number)로 저장합니다.
const formatNumber = (value: number) => (Number.isNaN(value) ? '' : value.toLocaleString('ko-KR'))

// 입력값에서 숫자 이외의 문자(쉼표 포함)를 제거합니다. 비어 있으면 NaN으로 두어 검증 에러를 표시합니다.
const parseNumber = (input: string) => {
  const digits = input.replace(/\D/g, '')
  return digits ? Number(digits) : NaN
}

export default function NumberField({ control, name, placeholder }: Props) {
  const { field, fieldState } = useController({ control, name })

  return (
    <input
      ref={field.ref}
      name={field.name}
      type="text"
      inputMode="numeric"
      placeholder={placeholder}
      className={S.input}
      aria-invalid={fieldState.invalid}
      value={formatNumber(field.value)}
      onChange={(e) => field.onChange(parseNumber(e.target.value))}
      onBlur={field.onBlur}
    />
  )
}
