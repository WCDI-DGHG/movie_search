import './App.css';

import { HomePage, SearchPage } from './pages';
import { Route, Routes } from 'react-router-dom';

import HeaderBar from './components/HeaderBar';
import SearchDtailPage from './pages/SearchDtailPage';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/searchdtail" element={<SearchDtailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
