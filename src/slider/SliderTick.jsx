import * as React from 'react';
import classnames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/slider/main';

const SliderTick = ({ first, last, onClick, vertical, title }) => {
    const classes = classnames({
        [styles.tick]: true,
        [styles.first]: vertical ? last : first,
        [styles.last]: vertical ? first : last
    });
    const attributes = {
        'role': 'presentation',
        'title': title
    };

    return <li className={classes} {...attributes} onClick={onClick}>&nbsp;</li>;
};

SliderTick.propTypes = {
    first: React.PropTypes.bool,
    last: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

export default SliderTick;
