import { useFormState } from 'react-hook-form'
import S from '../ReactHookForm.module.css'

interface Props {
  label: string
  submittingLabel: string
}

// useFormState로 제출 상태만 구독하므로 이 버튼만 리렌더링됩니다.
export default function SubmitButton({ label, submittingLabel }: Props) {
  const { isSubmitting } = useFormState()

  return (
    <button type="submit" className={S.button} disabled={isSubmitting}>
      {isSubmitting ? submittingLabel : label}
    </button>
  )
}
