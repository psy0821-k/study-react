import { useFormContext } from 'react-hook-form'
import type { SignupValues } from '../schema'
import S from '../ReactHookForm.module.css'

interface Props {
  name: keyof SignupValues
  label: string
  type?: 'text' | 'password'
}

// FormProvider 안에서 useFormContext로 register와 errors를 직접 가져옵니다. (props drilling 제거)
export default function TextField({ name, label, type = 'text' }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignupValues>()
  const error = errors[name]

  return (
    <div className={S.field}>
      <label htmlFor={name} className={S.label}>{label}</label>
      <input
        id={name}
        type={type}
        className={S.input}
        aria-invalid={error ? 'true' : 'false'}
        {...register(name)}
      />
      {error && <p role="alert" className={S.error}>{error.message}</p>}
    </div>
  )
}
