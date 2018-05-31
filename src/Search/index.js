import React, { Component } from 'react';
import './styles.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      userLocation: ''
    };
   
    this.updateInput = this.updateInput.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }


  updateInput(event) {
    const value = event.target.value;
    this.setState({ userLocation: value });
  }

  submitLocation(event) {
    event.preventDefault();
    this.props.getWeather(this.state.userLocation);
  }

  render() {
    return (
      <form>
        <input
          list="cities"
          placeholder="Search example: Denver, CO"
          type="text"
          value={this.state.userLocation}
          onChange={this.updateInput} />
        <datalist id="cities" />
        <button
          type="submit"
          onClick={this.submitLocation} >
            search
        </button>
      </form>
    );
  }
}

export default Search;
