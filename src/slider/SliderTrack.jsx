import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/slider/main';

const SliderTrack = ({ onClick, max, min, value, onKeyDown, dragHandleTitle = 'Drag' }) => {
    const attributes = {
        'title': dragHandleTitle,
        'tabIndex': 0,
        'role': 'slider',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-valuetext': value
    };

    const onHandleClick = (event) => event.preventDefault();

    return (
        <div className={styles["slider-track"]} onClick={onClick}>
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
