import { fetchById } from 'API/api';
import { MyContext } from 'components/App';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

export const CartList = () => {
  const [shop, setShop] = useState({});
  const [productQuantities, setProductQuantities] = useState({});
  const { cart } = useContext(MyContext);

  useEffect(() => {
    if (cart.length !== 0) {
      getShopById(cart[0].shopId);
    }
  }, [cart, cart.length]);

  const getShopById = async id => {
    try {
      const data = await fetchById(id);
      setShop(data);
    } catch (error) {
      console.log(error);
    }
  };
  let productsInCartId = [];

  let productsInCart;
  console.log(cart);

  //   console.log(productsInCartId);
  if (cart.length !== 0 && shop.products !== undefined) {
    cart.forEach(el => productsInCartId.push(el.productId));
    // console.log(shop.products);
    productsInCart = shop.products.filter(element =>
      productsInCartId.includes(element.id)
    );
  }

  //   console.log(productsInCart);

  return (
    <>
      <ul>
        {productsInCart &&
          productsInCart.map(el => <li key={el._id}>{el.name}</li>)}
      </ul>
    </>
  );
};
