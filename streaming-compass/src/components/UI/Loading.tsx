
import React from 'react'
import Load from '../../images/icons/load.png'
import Style from '../../index.css'
import { useLocation } from 'react-router-dom'
import { createSession } from '../../api/auth'
import Load from '../../images/icons/load.png';

const Loading = () => {
  const location = useLocation()
  const currentPath = location.pathname;
  sessionStorage.setItem('location', currentPath)
  console.log(sessionStorage.getItem('location'))
  console.log("rota: " + currentPath)
  if(currentPath == '/verifySession') {
    console.log("Dentro do if")
    createSession()
  }
  return (
    <div id="loading-container">
      <img src={Load} alt="Loading" id="loading-icon"></img>
    </div>
  );
};

export default Loading;
