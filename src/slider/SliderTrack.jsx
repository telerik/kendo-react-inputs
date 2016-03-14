import * as React from 'react';

const SliderTrack = ({ onClick, max, min, value, onKeyDown }) => {
    const attributes = {
        'title': 'Drag',
        'tabIndex': 0,
        'role': 'slider',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-valuetext': value
    };

    const onHandleClick = (event) => event.preventDefault();

    return (
        <div className="k-slider-track" onClick={onClick}>
            <div className="k-slider-selection"></div>
            <a className="k-draghandle" {...attributes} href="#"
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
