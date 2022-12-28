import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation/Navigation';
import { Link } from 'react-router-dom';

import s from './Layout.module.css';

const Layout = ({ children }) => {
  let width = window.innerWidth;
  return (
    <>
      <header className={s.header}>
        <Link to="/">
          <Logo width={200} height={35} />
        </Link>
        {width > 1023 && <Navigation />}
      </header>
      {width < 1024 && <BurgerMenu />}

      <main id="page-wrap">{children}</main>
    </>
  );
};

export default Layout;
