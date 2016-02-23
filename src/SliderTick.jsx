import * as React from 'react';

import classnames from 'classnames';

const SliderTick = ({ first, last, onClick }) => {
    const classes = classnames({
        'k-tick': true,
        'k-first': first,
        'k-last': last
    });

    return <li className={classes} onClick={onClick}>&nbsp;</li>;
};

SliderTick.propTypes = {
    first: React.PropTypes.bool,
    last: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

export default SliderTick;