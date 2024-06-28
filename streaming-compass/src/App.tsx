
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Series from './pages/Series';
import Section from './pages/Section';
import Filmes from './pages/Filmes';
import Actors from './pages/Actors';
import Login from './pages/Login';
import TitleSection from './components/UI/TitleSection';
import VerifySession from "./pages/VerifySession";

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
