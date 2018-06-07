import React from 'react';
import img from '../../app/assets/images/splash_background';

let style = {
  backgroundImage: `url(${img})`,
  height: '500px',
  overflow: 'hidden',
};

const NoSessionBackground = () => (
  <section style={style}>
    <p>HELLO</p>
  </section>
);

export default NoSessionBackground;