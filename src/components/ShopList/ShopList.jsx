import { useContext } from 'react';
import { MyContext } from '../../components/App';
import { ShopItem } from './ShopItem';
import { ShopListContainerStyled } from './ShopList.styled';

export const ShopList = () => {
  const { shops } = useContext(MyContext);

  return (
    <>
      <ShopListContainerStyled>
        {shops.map(shop => (
          <ShopItem shop={shop} key={shop._id} />
        ))}
      </ShopListContainerStyled>
    </>
  );
};
