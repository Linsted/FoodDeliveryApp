import { MyContext } from 'components/App';
import { useContext } from 'react';
import { CartItem } from './CartItem';
import { OrderForm } from 'components/OrderForm/OrderForm';
import { addOrder } from 'API/api';
import { Toaster, toast } from 'react-hot-toast';
import {
  CartListContainerStyled,
  TotalPriceContainerStyled,
  TotalPriceLabelStyled,
  TotalPriceValueStyled,
} from './CartList.Sstyled';

export const CartList = () => {
  const { cart, setCart, setActiveShop } = useContext(MyContext);
  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleSubmit = async event => {
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

    const smt = await addOrder(body);
    if (!smt) {
      toast.error('Sorry, there was an error');
      return;
    }
    toast.success('Thank you for your order');
    event.target.reset();
    setCart([]);
    setActiveShop('');
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.clear();
  };

  return (
    <>
      <Toaster />
      <OrderForm handleSubmit={handleSubmit} />
      <CartListContainerStyled>
        {cart.length !== 0 &&
          cart.map(el => <CartItem key={el.productId} product={el} />)}
      </CartListContainerStyled>
      <TotalPriceContainerStyled>
        <TotalPriceLabelStyled>Total Price:</TotalPriceLabelStyled>
        <TotalPriceValueStyled>{getTotalPrice()}</TotalPriceValueStyled>
      </TotalPriceContainerStyled>
    </>
  );
};
