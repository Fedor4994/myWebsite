import Logo from 'components/Logo';

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
