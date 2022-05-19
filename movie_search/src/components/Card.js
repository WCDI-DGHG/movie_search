import { FontSize, MediaSize, Shadows } from '../styles';

import PangImage from '../assets/testImage/abyssinian.jpg';
import styled from '@emotion/styled';

const Card = props => {
  const { image, title, subtitle, director, pubDate, userRating } = props;

  const starArray = ['☆', '☆', '☆', '☆', '☆'];
  for (let i = 0; i < userRating / 2; i++) {
    starArray[i] = '⭐';
  }

  return (
    // <div>
    //   <CardStyle>
    //     <Image>
    //       {image}
    //       <img src={PangImage} width={200} height={100}></img>
    //     </Image>
    //     <TitleName>{title}타이틀제목</TitleName>
    //     <SubTitle>부제목</SubTitle>
    //     <Director>{director}감독</Director>
    //     <OpeningDate>{pubDate}개봉일</OpeningDate>
    //     <Grade>{userRating}별점</Grade>
    //   </CardStyle>
    // </div>
    //⭐⭐⭐

    <div>
      <CardStyle>
        <Image className="ho">
          <figure className="image is-4by5">
            <img src={image === '' ? PangImage : image} alt="Placeholder image" />
          </figure>
        </Image>
        <TitleName>
          {title.replaceAll('<b>', '').replaceAll('</b>', '').substr(0, 9) + '..'}
        </TitleName>
        <SubTitle>{subtitle === '' ? '\u00A0' : subtitle.substr(0, 14)}</SubTitle>
        <Director>감독: {director.split('|')[0]}</Director>
        <OpeningDate>개봉: {pubDate}</OpeningDate>
        <Grade>평점: {starArray}</Grade>
      </CardStyle>
    </div>
  );
};

export default Card;

const CardStyle = styled.div`
  border-radius: 20px;
  box-sizing: content-box;
  background-color: white;
  margin: 10px;
  box-shadow: ${Shadows.cardShadow};
  :hover {
    box-shadow: ${Shadows.sectionShadow};
  }
`;

const Image = styled.div`
  text-align: center;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
`;

const TitleName = styled.div`
  text-align: center;
  font-weight: 700;
  @media ${MediaSize.mobile} {
    font-size: ${FontSize.small};
  }
  @media ${MediaSize.tablet} {
    font-size: ${FontSize.large};
  }
  @media ${MediaSize.desktop} {
    font-size: ${FontSize.large};
  }
`;

const SubTitle = styled.div`
  text-align: left;
  font-weight: 600;
  padding: 3px 15px;
`;

const Director = styled.div`
  text-align: left;
  padding: 3px 15px;
`;

const OpeningDate = styled.div`
  text-align: left;
  padding: 3px 15px;
`;

const Grade = styled.div`
  text-align: right;
  padding: 3px 15px;
`;
