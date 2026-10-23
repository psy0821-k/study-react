import { useState, type ChangeEvent } from 'react';
import S from './style.module.css';

// (리액트에 의해) 제어된 컴포넌트 (Controlled Component)
// (리액트에 의해) 제어되지 않은 컴포넌트 (Uncontrolled Component)

const REG_EMAIL_CHECK = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function RegisterForm() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const { username, useremail } = Object.fromEntries(formData);
    console.log(username, useremail);
  };

  // 리액트에 의해 제어되는 방식으로 핸들링

  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');

  const handleControlled = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; // 타입스크립트가 제대로 대상의 타입 파악!

    const trimedValue = value.trim();

    if (trimedValue.length < 2) {
      console.warn('이름 값은 2글자 이상 입력해야 해요!');
    }

    setUsername(trimedValue);
  };

  return (
    <form className={S.form} onSubmit={handleSubmit}>
      <div className={S.field}>
        <label htmlFor="username" className={S.label}>
          이름
        </label>
        <input
          id="username"
          name="username"
          type="text"
          className={S.input}
          placeholder="이름을 입력해주세요."
          value={username}
          onChange={handleControlled}
        />

        {/* 조건부 렌더링 "username 상태 값의 길이(lengh)가 2보다 작다면 오류 메시지를 표시하라." */}
        {username.length !== 0 && username.length < 2 && (
          <span role="alert" className={S.errorMessage}>
            이름 값은 2글자 이상 입력해야 해요!
          </span>
        )}
      </div>

      <div className={S.field}>
        <label htmlFor="useremail" className={S.label}>
          이메일
        </label>
        <input
          id="useremail"
          name="useremail"
          type="email"
          className={S.input}
          placeholder="user@company.io"
          // 리액트에 의해 제어됨
          value={useremail}
          onChange={e => {
            const { value } = e.target;
            const trimedValue = value.trim();
            setUseremail(trimedValue);
          }}
        />
        {/* 이메일 유효성 검사 */}
        {useremail.length !== 0 && !REG_EMAIL_CHECK.test(useremail) && (
          <span role="alert" className={S.errorMessage}>
            유효한 이메일이 아닙니다.
          </span>
        )}
      </div>

      <button role="button" type="submit" className={S.button}>
        제출
      </button>

      <p className={S.preview}>출력될 이름: {username}</p>
    </form>
  );
}
