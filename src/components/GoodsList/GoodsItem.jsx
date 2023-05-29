import { MyContext } from 'components/App';
import toast, { Toaster } from 'react-hot-toast';
import { useContext, useState } from 'react';

export const GoodsItem = ({ product, shopId }) => {
  const { setCart, cart, setActiveShop, activeShop } = useContext(MyContext);
  const [isAddedToCart, setIsAddedToCart] = useState(
    JSON.parse(localStorage.getItem(`isActive_${product.id}`)) || false
  );

  const handleClick = (shopId, productId) => {
    if (activeShop.length > 2 && activeShop !== shopId) {
      return toast.error('Sorry, you can`t add item from this store.');
    }
    setActiveShop(shopId);

    const updatedCart = [...cart, { shopId, productId, quantity: 1, product }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setIsAddedToCart(true);
    localStorage.setItem(
      `isActive_${product.id}`,
      JSON.stringify(!isAddedToCart)
    );
  };

  return (
    <>
      <Toaster />
      <li>
        <img
          style={{ width: '300px' }}
          src={product.picture}
          alt={product.name}
        />
        <p>{product.name}</p>
        <span>{product.price}</span>
        <button
          onClick={() => handleClick(shopId, product.id)}
          type="button"
          disabled={isAddedToCart}
        >
          {isAddedToCart ? 'Added to cart' : 'Add to cart'}
        </button>
      </li>
    </>
  );
};
