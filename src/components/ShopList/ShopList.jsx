import { useContext } from 'react';
import { MyContext } from '../../components/App';
import { ShopItem } from './ShopItem';

export const ShopList = () => {
  const { shops } = useContext(MyContext);

  return (
    <>
      <ul>
        {shops.map(shop => (
          <ShopItem shop={shop} key={shop._id} />
        ))}
      </ul>
    </>
  );
};
