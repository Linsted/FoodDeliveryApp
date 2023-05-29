import { useContext } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from 'components/App';
import {
  CartItemStyled,
  CartItemNameStyled,
  CartItemButtonStyled,
  CartItemQuantityStyled,
  CartItemTotalPriceStyled,
} from './CartList.Sstyled';

export const CartItem = ({ product }) => {
  const { id, name, price } = product.product;
  const { setCart } = useContext(MyContext);

  const handleDecrement = id => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        if (item.quantity < 1) {
          return item;
        }
        if (item.productId === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleIncrement = id => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        if (item.productId === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <CartItemStyled>
      <CartItemNameStyled>{name}</CartItemNameStyled>
      <CartItemButtonStyled type="button" onClick={() => handleDecrement(id)}>
        -
      </CartItemButtonStyled>
      <CartItemQuantityStyled>{product.quantity}</CartItemQuantityStyled>
      <CartItemButtonStyled type="button" onClick={() => handleIncrement(id)}>
        +
      </CartItemButtonStyled>
      <CartItemTotalPriceStyled>
        {(price * product.quantity).toFixed(2)}
      </CartItemTotalPriceStyled>
    </CartItemStyled>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
