import { MyContext } from 'components/App';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainerStyled,
  FormLabelStyled,
  FormInputStyled,
  FormButtonStyled,
} from './OrderForm.styled';

export const OrderForm = ({ handleSubmit }) => {
  const { activeShop } = useContext(MyContext);

  return (
    <FormContainerStyled onSubmit={handleSubmit}>
      <FormLabelStyled htmlFor="name">Name:</FormLabelStyled>
      <FormInputStyled
        type="text"
        id="name"
        name="name"
        pattern="[a-zA-Z\s\p{L}]*"
        required
      />

      <FormLabelStyled htmlFor="email">Email:</FormLabelStyled>
      <FormInputStyled type="email" id="email" name="email" required />

      <FormLabelStyled htmlFor="address">Address:</FormLabelStyled>
      <FormInputStyled type="text" id="address" name="address" required />

      <FormLabelStyled htmlFor="phoneNumber">Phone:</FormLabelStyled>
      <FormInputStyled
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        required
      />

      <FormButtonStyled disabled={activeShop === ''} type="submit">
        Submit
      </FormButtonStyled>
    </FormContainerStyled>
  );
};

OrderForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
