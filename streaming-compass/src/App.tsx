
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Series from './pages/Series';
import Filmes from './pages/Filmes';
import Actors from './pages/Actors';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/actors" element={<Actors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
