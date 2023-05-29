import styled from '@emotion/styled';

export const CartListContainerStyled = styled.ul`
  margin-top: 20px;
  padding: 0;
`;

export const CartItemStyled = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 5px;
`;

export const CartItemNameStyled = styled.p`
  font-weight: bold;
  margin-right: 10px;
`;

export const CartItemButtonStyled = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #4fa94d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const CartItemQuantityStyled = styled.span`
  margin-right: 10px;
`;

export const CartItemTotalPriceStyled = styled.span`
  font-weight: bold;
`;

export const TotalPriceContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;

export const TotalPriceLabelStyled = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

export const TotalPriceValueStyled = styled.span`
  font-weight: bold;
  color: #4fa94d;
`;

export const ClearCartStyled = styled.button`
  margin-top: 20px;
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  float: right;
`;

export const DeleteButtonStyled = styled.button`
  margin-left: 75vw;
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
