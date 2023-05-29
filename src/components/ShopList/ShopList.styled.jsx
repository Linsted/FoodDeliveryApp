import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ShopListContainerStyled = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  max-height: 500px;
  overflow: auto;
  gap: 25px;
  justify-content: center;
`;

export const ShopItemContainerStyled = styled.li`
  margin-bottom: 10px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

export const ShopLink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  transition: color 0.3s;

  &.active {
    color: purple;
    font-weight: bold;
  }

  &:hover {
    color: purple;
  }
`;

export const ShopName = styled.div`
  color: grey;
  font-weight: bold;
  cursor: not-allowed;
`;
