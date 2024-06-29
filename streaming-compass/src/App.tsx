import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Section from './pages/Section';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Section name="Home" />} />
          <Route path="/series" element={<Section name="Séries" />} />
          <Route path="/filmes" element={<Section name="Filmes" />} />
          <Route path="/actors" element={<Section name="Actors" />} />
          <Route path="/infoSeries" element={<Section name="InfoSeries" />} />
          <Route path="/infoMovies" element={<Section name="infoMovies" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
