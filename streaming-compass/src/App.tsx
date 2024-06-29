import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Section from './pages/Section';
import Login from './pages/Login';

import TitleSection from './components/UI/TitleSection';
import VerifySession from "./pages/VerifySession";
import Loading from "./components/UI/Loading";
import Favorites from './pages/Favorites';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verifySession" element={<Loading />} />
          <Route 
            path="/home"
            element={
              <VerifySession
                component={Home}
              />
            }
          />
          <Route
            path="/series"
            element={
              <VerifySession
                component={Section}
                componentProps={{ section: <Section name="Séries" /> }}
              />
            }
          />
          <Route
            path="/filmes"
            element={
              <VerifySession
                component={Section}
                componentProps={{ section: <Section name="Filmes" /> }} />
            }
          />
          <Route
            path="/actors"
            element={
              <VerifySession
                component={Actors} />
            }
          />
          <Route path="/home" element={<Section name="Home" />} />
          <Route path="/series" element={<Section name="Séries" />} />
          <Route path="/filmes" element={<Section name="Filmes" />} />
          <Route path="/actors" element={<Section name="Actors" />} />
          <Route path="/infoSeries" element={<Section name="InfoSeries" />} />
          <Route path="/infoMovies" element={<Section name="infoMovies" />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
