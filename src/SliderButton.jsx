import * as React from 'react';

import classnames from 'classnames';

const SliderButton = (props) => {
    const classes = classnames({
        'k-button': true,
        'k-button-increase': props.increase,
        'k-button-decrease': !props.increase
    });
    return (
        <a className={classes}><span className={"k-icon k-i-arrow-e"} onClick={props.onClick}>{props.title}</span></a>
    );
};

SliderButton.propTypes = {
    increase: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    title: React.PropTypes.string
};

export default SliderButton;