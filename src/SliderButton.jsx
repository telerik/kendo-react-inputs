import * as React from 'react';

import classnames from 'classnames';

const SliderButton = (props) => {
    const { increase, vertical } = props;
    const classes = classnames({
        'k-button': true,
        'k-button-increase': increase,
        'k-button-decrease': !increase
    });
    const spanClasses = classnames({
        'k-icon': true,
        'k-i-arrow-e': increase && !vertical,
        'k-i-arrow-w': !increase && !vertical,
        'k-i-arrow-n': increase && vertical,
        'k-i-arrow-s': !increase && vertical
    });
    return (
        <a className={classes}>
            <span className={spanClasses} onClick={props.onClick}>{props.title}</span>
        </a>
    );
};

SliderButton.propTypes = {
    increase: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    title: React.PropTypes.string,
    vertical: React.PropTypes.bool
};

export default SliderButton;
