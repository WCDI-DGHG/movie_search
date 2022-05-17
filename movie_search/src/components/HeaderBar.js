import styled from '@emotion/styled';

const HeaderBar = () => {
  return (
    <div>
      <Wrapper>
        <a className="navbar-item" href="/">
          메인화면 헤더바
        </a>
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
