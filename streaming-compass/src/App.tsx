
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Series from './pages/Series';
import Section from './pages/Section';
import Filmes from './pages/Filmes';
import Actors from './pages/Actors';
import Login from './pages/Login';
import TitleSection from './components/UI/TitleSection';

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/series"  element={<Section name="Séries"/>} />
          <Route path="/filmes" element={<Section name="Filmes"/>} />
          <Route path="/actors" element={<Actors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
