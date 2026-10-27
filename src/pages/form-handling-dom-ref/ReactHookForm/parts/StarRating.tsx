import { useController, type Control } from 'react-hook-form'
import { MAX_RATING, type ReviewValues } from '../schema'
import S from '../ReactHookForm.module.css'

interface Props {
  control: Control<ReviewValues>
}

const STARS = Array.from({ length: MAX_RATING }, (_, index) => index + 1)

// register로 연결할 수 없는 커스텀 UI(버튼 묶음)는 useController로 폼과 연결합니다.
export default function StarRating({ control }: Props) {
  const { field, fieldState } = useController({ control, name: 'rating' })

  return (
    <div className={S.field}>
      <span id="rating-label" className={S.label}>별점</span>
      <div role="radiogroup" aria-labelledby="rating-label" className={S.stars}>
        {STARS.map((score) => (
          <button
            key={score}
            type="button"
            role="radio"
            aria-checked={field.value === score}
            aria-label={`${score}점`}
            ref={score === 1 ? field.ref : undefined} // 검증 실패 시 첫 별로 포커스 이동
            className={score <= field.value ? S.starOn : S.starOff}
            onClick={() => field.onChange(score)}
            onBlur={field.onBlur}
          >
            ★
          </button>
        ))}
      </div>
      {fieldState.error && <p role="alert" className={S.error}>{fieldState.error.message}</p>}
    </div>
  )
}
