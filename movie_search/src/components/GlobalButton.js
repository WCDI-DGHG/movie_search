import { Borders, Colors } from '../styles';

import styled from '@emotion/styled';

// child: 버튼 텍스트
// size: small, normal, medium, large
// colorType: true(브랜드 컬러) | false(서브 컬러)
const GlobalButton = ({ children, size = 'normal', colorType = false, ...props }) => {
  const setButtonClassName = 'button is-' + size;
  return (
    <StyledButton className={setButtonClassName} colorType={colorType} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ colorType }) => (!colorType ? Colors.mainColor : Colors.subColor)};
  border-radius: ${Borders.buttonBorder};
  :hover {
    background-color: ${({ colorType }) =>
      !colorType ? Colors.mainHoverColor : Colors.subHoverColor};
  }
`;

export default GlobalButton;
