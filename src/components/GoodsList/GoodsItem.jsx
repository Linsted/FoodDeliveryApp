import { MyContext } from 'components/App';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';

export const GoodsItem = ({ product, shopId }) => {
  const { setCart, cart, setActiveShop, activeShop } = useContext(MyContext);

  const handleClick = (shopId, productId) => {
    if (activeShop.length > 2 && activeShop !== shopId) {
      return toast.error('Sorry, you can`t add item from this store.');
    }
    setActiveShop(shopId);

    const updatedCart = [...cart, { shopId, productId }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <Toaster />
      <li>
        <img style={{ width: '300px' }} src={product.picture} alt="" />
        <p>{product.name}</p>
        <span>{product.price}</span>
        <button onClick={() => handleClick(shopId, product.id)} type="button">
          Add to cart
        </button>
      </li>
    </>
  );
};
