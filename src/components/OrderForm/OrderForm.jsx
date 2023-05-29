import { MyContext } from 'components/App';
import { useContext } from 'react';

export const OrderForm = ({ handleSubmit }) => {
  const { activeShop } = useContext(MyContext);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        pattern="[a-zA-Z\s\p{L}]*"
        required
      />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" required />

      <label htmlFor="phoneNumber">Phone:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" required />

      <button disabled={activeShop === ''} type="submit">
        Submit
      </button>
    </form>
  );
};
