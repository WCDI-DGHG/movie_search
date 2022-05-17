import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderBar = () => {
  return (
    <div>
      <Wrapper>
        <Link className="navbar-item" to="/">
          메인화면 헤더바
        </Link>
      </Wrapper>
    </div>
  );
};

export default HeaderBar;

const Wrapper = styled.div`
  background: #e4ccff;
  color: white;
  text-align: center;
`;
