import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background: '#f2f2f2';
  padding: '10px';
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px 30px;
  gap: 30px;
  color: black;
  box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.55);
  margin-bottom: 30px;
`;
export const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
    font-weight: bold;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f2f2;
  font-size: 20px;
  font-weight: bold;
`;
