import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import SectionHome from './components/SectionHome';


function App() {

  return (
    <> 
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="blogs" element={'#'} />
            <Route path="*" element={'#'} />
          </Routes>
        </BrowserRouter>
      <Footer />
      <SectionHome />
    </>
  );
}

export default App
