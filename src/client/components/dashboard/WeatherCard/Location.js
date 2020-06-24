/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const Location = ({ city, country }) => {
  const City = styled.h1`
            margin:0 auto;
            font-family: 'Merriweather', sans-serif;
            font-size: 1.6em;
    `;
  const Country = styled.h3`
            margin:10px auto;
            font-family:'Fira Sans', sans-serif;
            font-size:12px;
            font-weight: bolder;
    `;

  return (
    <div>
      <City>{city}</City>
      <Country>{country}</Country>
    </div>
  );
};

export default Location;
