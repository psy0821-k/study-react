import SignupForm from './parts/SignupForm'
import CartForm from './parts/CartForm'
import ReviewForm from './parts/ReviewForm'
import S from './ReactHookForm.module.css'

export default function ReactHookForm() {
  return (
    <div className={S.page}>
      <SignupForm />
      <CartForm />
      <ReviewForm />
    </div>
  )
}
