import Logo from 'components/Logo';
// import { Link } from 'react-router-dom';
// import s from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Logo width={320} height={45} />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
