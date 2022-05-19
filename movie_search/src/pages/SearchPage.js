import * as Yup from 'yup';

import { Borders, Colors, MediaSize, Shadows } from '../styles';
import { onReceiveMovieList, onReceiveMovieListWithLength } from '../apis/naverMovieApi';

import Card from '../components/Card';
import GlobalButton from '../components/GlobalButton';
import GlobalInput from '../components/GlobalInput';
import styled from '@emotion/styled';
import { useFormik } from 'formik';
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
  const initialValues = {
    txt: '',
    num: 12,
  };

  const validationSchema = Yup.object().shape({
    txt: Yup.string()
      .min(2, '최소 2글자 이상 입력하세요')
      .max(10, '최대 10글자 이하여야 합니다.')
      .required('검색할 키워드를 입력해주세요'),
    num: Yup.number('숫자여야합니다.')
      .required('필수로 입력해주세요')
      .integer('정수를 입력하세요')
      .positive('양수를 입력하세요'),
  });
  const { errors, handleBlur, handleSubmit, handleChange, touched, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, formikHelper) => {
      try {
        formikHelper.setStatus({ success: true });
        formikHelper.setSubmitting(false);
        console.log(values);
        const result = await onReceiveMovieListWithLength();
        const resultMovieArray = result.data.items;
        console.log(result);
        setMovieArray(resultMovieArray);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
      <StyledHero className="hero is-medium">
        <StyledHeroBody className="hero-body column">
          <StyledForm className="section" onSubmit={handleSubmit}>
            <p className="title">영화 검색</p>
            <GlobalInput size="large" placeholder="영화 이름 입력" onBlur={handleInputChange} />
            <br />
            <GlobalInput
              size="large"
              placeholder="영화 이름 입력2"
              name="txt"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.txt}
            />
            <p className="title" style={{ color: 'red' }}>
              {touched.txt && errors.txt}
            </p>
            <GlobalInput
              size="large"
              placeholder="개수 입력"
              name="num"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.num}
            />
            <p className="title" style={{ color: 'red' }}>
              {touched.num && errors.num}
            </p>
            <br />
            <GlobalButton size="large" onClick={handleSubmitClick}>
              검색하기
            </GlobalButton>
            <br />
            <br />
            <GlobalButton size="large" type="submit">
              검색하기2
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
