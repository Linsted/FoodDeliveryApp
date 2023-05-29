import styled from '@emotion/styled';

export const GoodsListContainerStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const GoodsItemContainerStyled = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  justify-content: space-between;
`;

export const GoodsItemImageStyled = styled.img`
  width: 300px;
`;

export const GoodsItemNameStyled = styled.p`
  font-weight: bold;
`;

export const GoodsItemPriceStyled = styled.p`
  color: green;
`;

export const GoodsItemButtonStyled = styled.button`
  background-color: ${({ isAddedToCart }) =>
    isAddedToCart ? 'gray' : 'purple'};
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
