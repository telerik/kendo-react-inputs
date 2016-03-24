import * as React from 'react';
import classnames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/slider/main';

const SliderTick = ({ disabled, first, last, onClick, vertical, title }) => {
    const classes = classnames({
        [styles.tick]: true,
        [styles.first]: vertical ? last : first,
        [styles.last]: vertical ? first : last
    });

    const tickProps = {
        className: classes,
        'role': 'presentation',
        'title': title
    };

    if (!disabled) {
        Object.assign(tickProps, {
            onClick: onClick
        });
    }

    return <li {...tickProps}>&nbsp;</li>;
};

SliderTick.propTypes = {
    first: React.PropTypes.bool,
    last: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

export default SliderTick;
