import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      name: '',
      icon: '',
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${API_KEY}`,
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperature: Math.floor(json.main.temp - 273.15),
          name: json.weather[0].main,
          icon: json.weather[0].icon,
        });
      });
  };

  render() {
    const { temperature, name, icon } = this.state;
    const imgUrl = `http://openweathermap.org/img/w/${icon}.png`;

    return (
      <>
        <h1>오늘의 날씨</h1>
        <img alt="weather_icon" src={imgUrl} />
        <h3>온도 : {temperature}</h3>
        <h3>날씨 : {name}</h3>
      </>
    );
  }
}

export default Home;
