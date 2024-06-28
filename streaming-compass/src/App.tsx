import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Section from './pages/Section';
import Actors from './pages/Actors';
import Login from './pages/Login';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Section name="Home" />} />
          <Route path="/series" element={<Section name="Séries" />} />
          <Route path="/filmes" element={<Section name="Filmes" />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
