import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/slider/main';

const SliderTrack = ({ onMouseDown, disabled, max, min, value, onKeyDown, dragHandleTitle = 'Drag' }) => {
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

    const preventHandleClick = (event) => event.preventDefault();

    if (!disabled) {
        Object.assign(trackProps, {
            onMouseDown: onMouseDown
        });
    }

    return (
        <div {...trackProps}>
            <div className={styles["slider-selection"]}></div>
            <a className={styles.draghandle} {...attributes}
                onClick={preventHandleClick}
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
