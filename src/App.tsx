import styles from './App.module.css';
import Footer from './components/footer/Footer';
import Header from './components/header/header';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
