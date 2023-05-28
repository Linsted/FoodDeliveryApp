export const OrderForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" />

      <button type="submit">Submit</button>
    </form>
  );
};
