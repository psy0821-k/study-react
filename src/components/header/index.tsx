import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <dfn>
          <abbr title="자바스크립트의 어려운 유지보수성을 해결하기 위해 나온 라이브러리">React</abbr>
        </dfn>
        기초 배우기
      </h1>
    </header>
  );
}
