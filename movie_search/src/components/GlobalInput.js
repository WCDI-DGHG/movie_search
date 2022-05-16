import { Colors } from '../styles';
import styled from '@emotion/styled';

const GlobalInput = ({ type = 'text', placeholder = '', ...props }) => {
  return <StyledInput className="input" type={type} placeholder={placeholder} {...props} />;
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 2px solid ${Colors.mainColor};
  border-radius: 8px;
`;

export default GlobalInput;
