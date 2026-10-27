import { useState } from 'react'
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { wait } from '../../FormSubmission/util/wait'
import { signupSchema, type SignupValues } from '../schema'
import TextField from './TextField'
import SubmitButton from './SubmitButton'
import S from '../ReactHookForm.module.css'

const DEFAULT_VALUES: SignupValues = { email: '', password: '', passwordConfirm: '' }

export default function SignupForm() {
  const [doneMessage, setDoneMessage] = useState('')

  const methods = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onBlur', // 포커스를 벗어날 때 검증
  })

  // 검증을 통과한 값만 도착합니다.
  const onSubmit: SubmitHandler<SignupValues> = async ({ email }) => {
    await wait(1000) // 서버 요청 흉내
    setDoneMessage(`${email} 가입 완료!`)
    methods.reset()
  }

  return (
    <section className={S.card}>
      <h2 className={S.title}>useForm + zodResolver + FormProvider</h2>
      <p className={S.desc}>스키마로 검증하고, 자식 컴포넌트가 useFormContext / useFormState로 폼에 접근합니다.</p>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={S.form} noValidate>
          <TextField name="email" label="이메일" />
          <TextField name="password" label="비밀번호" type="password" />
          <TextField name="passwordConfirm" label="비밀번호 확인" type="password" />
          <SubmitButton label="가입하기" submittingLabel="가입 중..." />
        </form>
      </FormProvider>

      {doneMessage && <p role="status" className={S.success}>{doneMessage}</p>}
    </section>
  )
}
