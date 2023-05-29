import {
  NavStyled,
  LinkStyled,
  HeaderStyled,
  LoadingContainer,
} from './Layout.styled';

import { Suspense } from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderStyled>
        <NavStyled>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/cart">Cart</LinkStyled>
        </NavStyled>
      </HeaderStyled>
      <Suspense fallback={<LoadingContainer>Please wait...</LoadingContainer>}>
        {children}
      </Suspense>
    </>
  );
};

export default Layout;
