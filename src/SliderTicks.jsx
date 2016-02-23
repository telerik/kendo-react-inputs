import * as React from 'react';

import classnames from 'classnames';

import SliderTick from "../src/SliderTick";

export default function SliderTicks({ tickCount = 0, onClick }) {
    const classes = classnames({
        'k-reset': true,
        'k-slider-items': true
    });

    const ticks = Array(tickCount)
        .fill({})
        .map((item, index, array) => ({
            first: index === 0,
            last: index === array.length - 1
        }))
        .map((props, index) => <SliderTick key={index} {...props} onClick={onClick} />);

    return <ul className={classes}>{ticks}</ul>;
}
