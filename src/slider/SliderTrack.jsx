import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/slider/main';

const SliderTrack = ({ onClick, disabled, max, min, value, onKeyDown, dragHandleTitle = 'Drag' }) => {
    const attributes = {
        'title': dragHandleTitle,
        'tabIndex': 0,
        'role': 'slider',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-valuetext': value
    };

    const trackProps = {
        className: styles["slider-track"]
    };

    if (!disabled) {
        Object.assign(trackProps, {
            onClick: onClick
        });
    }

    const onHandleClick = (event) => event.preventDefault();

    return (
        <div {...trackProps}>
            <div className={styles["slider-selection"]}></div>
            <a className={styles.draghandle} {...attributes} href="#"
                onClick={onHandleClick}
                onKeyDown={onKeyDown}
            ></a>
        </div>
    );
};

SliderTrack.propTypes = {
    onClick: React.PropTypes.func,
    onKeyDown: React.PropTypes.func
};

export default SliderTrack;
