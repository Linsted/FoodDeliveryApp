import { NavLink } from 'react-router-dom';
// import { NavStyled } from './Layout.styled';
// import { LinkStyled } from './Layout.styled';
import { Suspense } from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </>
  );
};

export default Layout;
