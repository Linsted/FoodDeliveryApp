import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from 'components/App';

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
    <li>
      <p>{name}</p>
      <button onClick={() => handleDecrement(id)}>-</button>
      <span>{product.quantity}</span>
      <button onClick={() => handleIncrement(id)}>+</button>
      <span>{(price * product.quantity).toFixed(2)}</span>
    </li>
  );
};
