import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoSlider from '../src/KendoSlider';

const state = {
    max: 10,
    min: 0,
    value: 6,
    step: 4,
    onChange: function(e) {
        state.value = e.value;
        render();
    }
};
const render = () => {
    ReactDOM.render(
        <KendoSlider
            max={state.max}
            min={state.min}
            onChange = {state.onChange}
            smallStep={state.step}
            value={state.value}
        />,
        document.getElementById('app')
    );
};

render();
