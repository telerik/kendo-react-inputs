import * as React from 'react';

import classnames from 'classnames';

export default function SliderTick({ first, last, onClick }) {
    const classes = classnames({
        'k-tick': true,
        'k-first': first,
        'k-last': last
    });

    return <li className={classes} onClick={onClick}>&nbsp;</li>;
}