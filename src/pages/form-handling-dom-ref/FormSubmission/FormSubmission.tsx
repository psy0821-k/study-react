import { useId, useState } from 'react';
import NicknameField from './parts/NicknameField';
import EmailField from './parts/EmailField';
import PasswordField from './parts/PasswordField';
import PasswordConfirmField from './parts/PasswordConfirmField';
import S from './FormSubmission.module.css';
import SuccessMessage from './parts/SuccessScreen';
import PracticeGuide from './parts/PracticeGuide';
import { wait } from './util/wait';

const INITIAL_STATE = {
  nickname: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

type FormState = typeof INITIAL_STATE;
type FormStateKey = keyof FormState;

export default function FormSubmission() {
  const sectionId = useId();
  const [formState, setFormState] = useState<FormState>(INITIAL_STATE);
  const [formResetKey, setFormResetKey] = useState(0);

  const changeFormState = (name: FormStateKey, value: string) => {
    setFormState({ ...formState, [name]: value });
  };

  // 폼 제출 상태 선언
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 폼 제출(가입) 성공 상태 선언
  const [isSuccess, setIsSuccess] = useState(false);

  // [파생된 상태] 모든 입력이 채워졌는가?
  const isAllInputed = Object.values(formState).every(Boolean);

  // [파생된 상태] 일부 입력이 하나라도 채워졌는가?
  const isSomeInputed = Object.values(formState).some(Boolean);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); // 브라우저 기본 작동(새로고침) 방지

    if (isSubmitting || !isAllInputed) return; // 방어 로직 (폼 서브미션 중이거나 모든 입력 필드가 채워지지 않았다면 실행 중단)

    try {
      setIsSubmitting(true);

      // 서버에 보낼 데이터 확인
      console.log(formState);

      // 서버에서의 응답은 즉시 일어나지 않는다. (지연된 처리 : 비동기 작업)
      // 서버의 응답 시뮬레이션 (약 2초 소요...)
      await wait(2000, true);
      alert('가입에 성공했습니다!');
      setIsSuccess(true); // 성공 화면으로 전환하기 위한 상태 업데이트
      handleReset(); // 폼 초기화 (key를 사용해 컴포넌트 초기화)
    } catch {
      alert('가입에 실패했습니다!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormState(INITIAL_STATE);
    setFormResetKey(prev => prev + 1);
  };

  // 가입에 성공했다면 성공 화면을 렌더링하세요!
  if (isSuccess) {
    return <SuccessMessage onGoBack={() => setIsSuccess(false)} />;
  }

  return (
    <>
      <article className={S.card} aria-labelledby={sectionId}>
        <header className={S.header}>
          <h2 id={sectionId} className={S.title}>
            회원 가입
          </h2>
          <p className={S.description}>가입 정보를 입력하고 각 입력 필드의 검증 전략을 확인하세요.</p>
        </header>

        <form key={formResetKey} className={S.form} onSubmit={handleSubmit} onReset={handleReset} noValidate>
          <NicknameField value={formState.nickname} onChange={value => changeFormState('nickname', value)} />
          <EmailField value={formState.email} onChange={value => changeFormState('email', value)} />
          <PasswordField value={formState.password} onChange={value => changeFormState('password', value)} />
          <PasswordConfirmField
            value={formState.passwordConfirm}
            basePassword={formState.password}
            onChange={value => changeFormState('passwordConfirm', value)}
          />
          <div role="group" className={S.buttonGroup}>
            <button type="reset" className={S.resetButton} aria-disabled={isSubmitting || !isSomeInputed ? 'true' : 'false'}>
              취소
            </button>
            <button type="submit" className={S.submitButton} aria-disabled={isSubmitting || !isAllInputed ? 'true' : 'false'}>
              {isSubmitting ? '처리 중...' : '가입'}
            </button>
          </div>
        </form>
      </article>
      <PracticeGuide />
    </>
  );
}
