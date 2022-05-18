import PangImage from '../assets/testImage/abyssinian.jpg';
import styled from '@emotion/styled';

const Card = () => {
  // const { image, title, director, pubDate, userRating } = props;

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

    <div>
      <CardStyle>
        <Image>
          <img src={PangImage}></img>
        </Image>
        <TitleName>냥이의 모험</TitleName>
        <SubTitle>숨막히는 냥이의 모험이 시..</SubTitle>
        <Director>감독: 박냥이</Director>
        <OpeningDate>개봉일: 2022</OpeningDate>
        <Grade>평점⭐⭐⭐</Grade>
      </CardStyle>
    </div>
  );
};

export default Card;

const CardStyle = styled.div`
  border-radius: 20px;
  box-sizing: content-box;
  width: 230px;
  height: 350px;
  padding: 20px;
  background-color: white;
  margin: 10px;
  padding: 0;
`;

const Image = styled.div`
  text-align: center;
  width: 100%;
  height: 195px;
  object-fit: cover;
  overflow: hidden;
`;

const TitleName = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
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
