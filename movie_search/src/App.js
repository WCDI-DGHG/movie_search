import { HomePage, SearchPage } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
