import styled from '@emotion/styled';

export const FormContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormLabelStyled = styled.label`
  font-weight: bold;
`;

export const FormInputStyled = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormButtonStyled = styled.button`
  padding: 10px;
  background-color: ${props => (props.disabled ? '#ccc' : '#4fa94d')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const FormErrorMessageStyled = styled.div`
  color: red;
`;
