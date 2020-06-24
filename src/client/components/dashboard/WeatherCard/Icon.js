/* eslint-disable no-shadow */
import React from 'react';
import styled from '@emotion/styled';

const Icon = () => {
  const Img = styled.img`
     width: 30%;
     height: 20%;
    `;

  return (
    <Img src="./public/logo.png" alt="weather icon" />
  );
};

export default Icon;
