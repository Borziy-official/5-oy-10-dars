import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { SearchMovie } from './pages/Search/Search';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/movies" element={<SearchMovie />} />
      </Routes>
    </>
  );
}

export default App;

s
s