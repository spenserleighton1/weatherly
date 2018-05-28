import React from 'react';
import Search from '../Search/Search.js';
import './Welcome.css';

const Welcome = (props) => {

  return (
    <div className="welcome-page" >
      <h1>What weather you want?</h1>
      <Search
      getWeather={props.getWeather} />
    </div>
  )
}

export default Welcome;