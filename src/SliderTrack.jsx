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
    return (
        <div className="k-slider-track" onClick={onClick}>
            <div className="k-slider-selection"></div>
            <a className="k-draghandle" {...attributes} href="#" onKeyDown={onKeyDown}>Drag</a>
        </div>
    );
};

SliderTrack.propTypes = {
    onClick: React.PropTypes.func
};

export default SliderTrack;
