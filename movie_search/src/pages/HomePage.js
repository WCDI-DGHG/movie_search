import GlobalButton from '../components/GlobalButton';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/search');
  };

  return (
    <div>
      <p>검색 목록 페이지로 이동합니다.</p>
      <GlobalButton onClick={handleClickButton}>검색목록페이지</GlobalButton>
    </div>
  );
};

export default HomePage;
