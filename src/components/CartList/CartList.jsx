import { fetchById } from 'API/api';
import { MyContext } from 'components/App';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CartItem } from './CartItem';
import { OrderForm } from 'components/OrderForm/OrderForm';

export const CartList = () => {
  const { cart, setCart } = useContext(MyContext);
  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };
  console.log(cart);
  const handleSubmit = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const address = event.target.address.value;

    const body = {
      shop: cart[0].shopId,
      products: cart,
      email,
      phoneNumber,
      address,
    };

    console.log(body);
    event.target.reset();
    setCart([]);
  };

  return (
    <>
      <OrderForm handleSubmit={handleSubmit} />
      <ul>
        {cart.length !== 0 &&
          cart.map(el => <CartItem key={el.productId} product={el} />)}
      </ul>
      <p>Total Price: {getTotalPrice()}</p>
    </>
  );
};
