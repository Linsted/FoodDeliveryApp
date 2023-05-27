import { fetchById } from 'API/api';
import { MyContext } from 'components/App';
import { useEffect } from 'react';
import { useContext } from 'react';

export const CartList = () => {
  const [shop, setShop] = useEffect({});

  useEffect(() => {});

  const getShopById = async id => {
    try {
      const data = await fetchById(id);
      setShop(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { cart } = useContext(MyContext);
  console.log(cart);
  return <></>;
};
