import { MyContext } from 'components/App';
import { useEffect } from 'react';
import { useContext } from 'react';

export const GoodsItem = ({ product, shopId }) => {
  const { setCart, cart, setActiveShop } = useContext(MyContext);

  //   console.log(cart);

  const handleClick = (shopId, productId) => {
    setActiveShop(shopId);
    const updatedCart = [...cart, { shopId, productId }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <li>
      <img style={{ width: '300px' }} src={product.picture} alt="" />
      <p>{product.name}</p>
      <span>{product.price}</span>
      <button onClick={() => handleClick(shopId, product.id)} type="button">
        Add to cart
      </button>
    </li>
  );
};
