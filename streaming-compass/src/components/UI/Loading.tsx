import React from 'react'
import Load from '../../images/icons/load.png'
import Style from '../../index.css'
const Loading = () => {
  return (
    <div id="loading-container">
        <img src={Load} alt="Loading" id="loading-icon"></img>
    </div>
  )
}

export default Loading