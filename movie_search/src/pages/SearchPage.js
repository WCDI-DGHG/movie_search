import { Colors } from '../styles';
import GlobalButton from '../components/GlobalButton';
import GlobalInput from '../components/GlobalInput';
import styled from '@emotion/styled';

const SearchPage = () => {
  //TODO : input 유효성 검사를 추가합니다.
  //TODO : 버튼 클릭시 영화 검색 입력 데이터를 얻어 처리하는 이벤트를 추가합니다.
  const handleSubmitClick = event => {
    event.preventDefault();
    alert('버튼 클릭');
  };
  return (
    <div className="container">
      <StyledHero className="hero is-medium">
        <StyledHeroBody className="hero-body">
          <StyledForm>
            <p className="title">영화 검색</p>
            <GlobalInput size="large" placeholder="영화 이름 입력" />
            <br />
            <GlobalButton size="large" onClick={handleSubmitClick}>
              검색하기
            </GlobalButton>
          </StyledForm>
        </StyledHeroBody>
      </StyledHero>
    </div>
  );
};

const StyledHero = styled.section`
  box-shadow: 11px 15px 8px ${Colors.subColor};
`;

const StyledHeroBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledForm = styled.form`
  width: 80%;
`;

export default SearchPage;
