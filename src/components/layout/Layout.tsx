import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../Header';
import Main from '../main/Main';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
