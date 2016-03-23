import * as React from 'react';
import classnames from 'classnames';
import SliderTick from './SliderTick';
import styles from '@telerik/kendo-theme-default/styles/slider/main';
import { SliderUtil as util } from '@telerik/kendo-inputs-common';

const SliderTicks = ({ tickCount = 0, onClick, vertical, min, smallStep, title = util.identity }) => {
    const listClasses = classnames({
        [styles.reset]: true,
        [styles['slider-items']]: true
    });
    const ticks = Array(tickCount)
        .fill({})
        .map((item, index, array) => ({
            first: index === 0,
            last: index === array.length - 1
        }))
        .map((props, index) => {
            const titleText = min + (index * smallStep);

            return (<SliderTick
                key = {index}
                {...props}
                onClick = {onClick}
                title = {title(titleText)}
                vertical = {vertical}
                    />);
        });

    return <ul className={listClasses}>{ticks}</ul>;
};

SliderTicks.propTypes = {
    onClick: React.PropTypes.func,
    tickCount: React.PropTypes.number
};

export default SliderTicks;
