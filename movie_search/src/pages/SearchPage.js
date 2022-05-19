import { Borders, Colors, MediaSize, Shadows } from '../styles';

import Card from '../components/Card';
import GlobalButton from '../components/GlobalButton';
import GlobalInput from '../components/GlobalInput';
import onReceiveMovieList from '../apis/naverMovieApi';
import styled from '@emotion/styled';
import { useState } from 'react';

const SearchPage = () => {
  const [movieArray, setMovieArray] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmitClick = async event => {
    event.preventDefault();
    const result = await onReceiveMovieList(input);
    const resultMovieArray = result.data.items;
    setMovieArray(resultMovieArray);
  };

  const handleInputChange = event => {
    setInput(event.target.value);
  };

  return (
    <div>
      <StyledHero className="hero is-medium">
        <StyledHeroBody className="hero-body column">
          <StyledForm className="section">
            <p className="title">영화 검색</p>
            <GlobalInput size="large" placeholder="영화 이름 입력" onBlur={handleInputChange} />
            <br />
            <GlobalButton size="large" onClick={handleSubmitClick}>
              검색하기
            </GlobalButton>
          </StyledForm>
        </StyledHeroBody>
      </StyledHero>
      <StyledHero className="hero is-medium">
        <StyledHeroBody className="hero-body columns is-multiline ">
          {movieArray.map((value, index) => {
            return (
              <div key={index} className="column is-half-mobile is-2-desktop is-3-tablet mt-1">
                <Card
                  title={value.title}
                  subtitle={value.subtitle}
                  image={value.image}
                  pubDate={value.pubDate}
                  userRating={value.userRating}
                  director={value.director}
                ></Card>
              </div>
            );
          })}
        </StyledHeroBody>
      </StyledHero>
    </div>
  );
};

const StyledHero = styled.section`
  box-shadow: ${Shadows.sectionShadow};
`;

const StyledHeroBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledForm = styled.form`
  background-color: #fffff9;
  border-radius: ${Borders.cardBorder};
  border: 2px solid ${Colors.subColor};
  box-shadow: ${Shadows.cardShadow};
  @media ${MediaSize.mobile} {
    width: 100%;
  }
  @media ${MediaSize.tablet} {
    width: 80%;
  }
  @media ${MediaSize.desktop} {
    width: 60%;
    max-width: 1200px;
  }
`;

export default SearchPage;
