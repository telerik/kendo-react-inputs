import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoSlider from '../src/KendoSlider';

ReactDOM.render(
  <KendoSlider max={9} min={0} smallStep={1.5} value={3} />,
  document.getElementById('app')
);
