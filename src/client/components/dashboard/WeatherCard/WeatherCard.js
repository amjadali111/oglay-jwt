/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable no-bitwise */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

const WeatherCard = () => {
  const [search, setSearch] = useState('Sydney,au');

  const [weather, setWeather] = useState({
    temp: null,
    state: null,
    city: null,
    country: null
  });


  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  if (weather.temp > 12) {
    highColor = (1 - ((weather.temp - 12) / 28)) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to top, rgb(255,${highColor},0),rgb(255,${lowColor},0))`;
  } else if (weather.temp <= 12) {
    highColor = (1 - ((weather.temp + 20) / 32)) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(to bottom, rgb(0,${highColor},255),rgb(0,${lowColor},255))`;
  }
  const Card = styled.div`
        color: white;
        width: 180px;
        font-family:  'Merriweather', sans-serif;
        height: 220px;
        background:${bg};
        margin: 0 auto;
        text-align: center;
        padding: 5px;
        justify-content: space-around;
        border-radius: 10px;
        border-style: solid;
        border-width: 1px;
        border-color: #9c9796;
        `;

  const data = async (s) => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${s}&units=metric&APPID=185f5afde6f463816ca6d61966eea58a`
    );
    const resJson = await res.json();
    return resJson;
  };

  const handleClick = (e) => {
    e.preventDefault();
    data(search).then((res) => {
      setWeather({
        temp: res.main.temp | 0, // round off value by using pipe
        state: res.weather[0].main,
        city: res.name,
        country: res.sys.country
      });
    });
  };

  useEffect((e) => {
    data(search).then((res) => {
      setWeather({
        temp: res.main.temp | 0, // round off value by using pipe
        state: res.weather[0].main,
        city: res.name,
        country: res.sys.country
      });
    });
  }, []);


  return (
    <div>
      <Card>
        <Location city={weather.city} country={weather.country} />
        <Icon />
        <Condition temp={weather.temp} state={weather.state} />
      </Card>
      <div className="row">
        <div className="searchElements input-field">
          <input value={search} type="text" onChange={e => setSearch(e.target.value)} />
          <div className="form-control">
            <button className="btn pink " onClick={e => handleClick(e)}>
                            Search
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
