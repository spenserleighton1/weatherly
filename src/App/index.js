import React, { Component } from 'react';
import './App.css';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import Hourly from '../Hourly/Hourly.js'
import TenDayForecast from '../TenDay/TenDayForecast.js';
import { apiKey } from '../apiKey.js'
import { currentCleaner, hourlyCleaner, tendDayCleaner } from '../apiCleaner.js'
import Search from '../Search/Search.js';
import Welcome from '../Welcome/Welcome.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      current: {},
      hourly: [],
      tenDay: [],
      welcome: true
    }
    this.getWeather = this.getWeather.bind(this);
  }


  
  getWeather = (userInput) => {
    this.setState({welcome: false})
    let splitLocation = userInput.split(', ');
    let userCity = splitLocation[0];
    let userState = splitLocation[1];
    fetch(`http://api.wunderground.com/api/${apiKey}//conditions/geolookup/hourly/forecast10day/q/${userState}/${userCity}.json`)
      .then(response => response.json())
      .then(data => this.setState({
          current: currentCleaner(data), 
          hourly: hourlyCleaner(data), 
          tenDay: tendDayCleaner(data)}))
      .catch(err => console.log(err))

  }

  render() {
    if (this.state.welcome) {
      return (
          <Welcome
          getWeather={this.getWeather} />
      )
    } else {
      return (
        <div className="App">
          <div className="top">
            <Search 
              getWeather={this.getWeather} 
                />
            <CurrentWeather 
                current={this.state.current}
                />
          </div>
          <div className="bottom">
            <Hourly 
                hourly={this.state.hourly}
                />
            <TenDayForecast 
                tenDay={this.state.tenDay}
                />
          </div>
        </div>
      );
    }
  }
}
export default App;
