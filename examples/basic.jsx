import * as React from 'react';
import ReactDOM from 'react-dom';
import KendoSlider from '../src/KendoSlider';

const state = {
    max: 11,
    min: 0,
    value: 3,
    smallStep: 2,
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
            smallStep={state.smallStep}
            value={state.value}
        />,
        document.getElementById('app')
    );
};

render();
