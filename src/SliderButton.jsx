import * as React from 'react';

import classnames from 'classnames';

const SliderButton = (props) => {
    const classes = classnames({
        'k-button': true,
        'k-button-increase': props.increase,
        'k-button-decrease': !props.increase
    });
    const arrowClass = classnames({
        'k-icon': true,
        'k-i-arrow-e': props.increase,
        'k-i-arrow-w': !props.increase
    });

    return (
        <a className={classes}><span className={arrowClass} onClick={props.onClick}>{props.title}</span></a>
    );
};

SliderButton.propTypes = {
    increase: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    title: React.PropTypes.string
};

export default SliderButton;