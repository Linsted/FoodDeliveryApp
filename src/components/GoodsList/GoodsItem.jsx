import { MyContext } from 'components/App';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import {
  GoodsItemContainerStyled,
  GoodsItemImageStyled,
  GoodsItemNameStyled,
  GoodsItemPriceStyled,
  GoodsItemButtonStyled,
} from './GoodsList.styled';

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
      <GoodsItemContainerStyled>
        <GoodsItemImageStyled
          style={{ width: '300px' }}
          src={product.picture}
          alt={product.name}
        />
        <GoodsItemNameStyled>{product.name}</GoodsItemNameStyled>
        <GoodsItemPriceStyled>{product.price}</GoodsItemPriceStyled>
        <GoodsItemButtonStyled
          onClick={() => handleClick(shopId, product.id)}
          type="button"
          disabled={isAddedToCart}
        >
          {isAddedToCart ? 'Added to cart' : 'Add to cart'}
        </GoodsItemButtonStyled>
      </GoodsItemContainerStyled>
    </>
  );
};

GoodsItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  shopId: PropTypes.string.isRequired,
};
