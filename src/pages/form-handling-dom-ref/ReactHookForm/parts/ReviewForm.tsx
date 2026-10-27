import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { reviewSchema, type ReviewValues } from '../schema'
import StarRating from './StarRating'
import S from '../ReactHookForm.module.css'

export default function ReviewForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ReviewValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 0, comment: '' },
  })

  const onSubmit: SubmitHandler<ReviewValues> = (values) => {
    console.log('리뷰 데이터', values)
    reset()
  }

  return (
    <section className={S.card}>
      <h2 className={S.title}>useController</h2>
      <p className={S.desc}>별점처럼 input이 아닌 커스텀 컴포넌트를 폼 값과 연결합니다.</p>

      <form onSubmit={handleSubmit(onSubmit)} className={S.form} noValidate>
        <StarRating control={control} />

        <div className={S.field}>
          <label htmlFor="comment" className={S.label}>리뷰</label>
          <textarea id="comment" rows={3} className={S.input} {...register('comment')} />
          {errors.comment && <p role="alert" className={S.error}>{errors.comment.message}</p>}
        </div>

        <button type="submit" className={S.button}>리뷰 등록</button>
      </form>

      {isSubmitSuccessful && <p role="status" className={S.success}>리뷰 데이터를 콘솔에 출력했습니다.</p>}
    </section>
  )
}
