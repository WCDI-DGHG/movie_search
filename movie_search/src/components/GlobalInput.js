import { Colors } from '../styles';
import styled from '@emotion/styled';

const GlobalInput = ({ type = 'text', size = 'normal', placeholder = '', ...props }) => {
  const setInputClassName = 'input is-' + size;
  return (
    <StyledInput className={setInputClassName} type={type} placeholder={placeholder} {...props} />
  );
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 2px solid ${Colors.mainColor};
  border-radius: 8px;
  :focus {
    border-color: ${Colors.mainHighlightColor};
  }
  :hover {
    border-color: ${Colors.mainHoverColor};
  }
`;

export default GlobalInput;
