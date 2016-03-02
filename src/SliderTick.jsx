import * as React from 'react';

import classnames from 'classnames';

const SliderTick = ({ first, last, onClick, vertical }) => {
    const classes = classnames({
        'k-tick': true,
        'k-first': vertical ? last : first,
        'k-last': vertical ? first : last
    });

    return <li className={classes} onClick={onClick}>&nbsp;</li>;
};

SliderTick.propTypes = {
    first: React.PropTypes.bool,
    last: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

export default SliderTick;
