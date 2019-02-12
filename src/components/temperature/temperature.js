/*
This is a 'functional component' that renders a temperature value with a degree (°) symbol. This
symbol is injected by css which is imported below.
*/

import React from 'react';

import './temperature.scss';

export default (props) => {
  console.log(props)
  return (
    <div>
      <div className='cardTemperature'>
        {props.children[0]}
      </div>
      <div className='minTemp'>
        {props.children[1]}
      </div>
      <div className='maxTemp'>
        {props.children[2]}
      </div>
    </div>
  );
};
