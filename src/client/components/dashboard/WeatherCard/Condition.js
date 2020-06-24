/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const Condition = ({ temp, state }) => {
  const Temp = styled.h1`
        margin:15px auto;
        font-family: 'Merriweather', sans-serif;
        font-size: 2rem;
        font-weight: bolder;
`;
  const State = styled.h3`
        font-family: 'Merriweather', sans-serif;
        font-size:14px;
`;
  return (
    <div>
      <Temp>
        {temp}
°C
      </Temp>
      <State>{state}</State>
    </div>
  );
};

export default Condition;
