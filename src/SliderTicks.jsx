import * as React from 'react';

import classnames from 'classnames';

import SliderTick from "../src/SliderTick";

const SliderTicks = ({ tickCount = 0, onClick, vertical, min, smallStep, title }) => {
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
        .map((props, index) =>
            <SliderTick
                key={index}
                {...props}
                onClick = {onClick}
                title = {title ? title(min + (index * smallStep)) : min + (index * smallStep)}
                vertical = {vertical}
            />);

    return <ul className={classes}>{ticks}</ul>;
};

SliderTicks.propTypes = {
    onClick: React.PropTypes.func,
    tickCount: React.PropTypes.number
};

export default SliderTicks;
