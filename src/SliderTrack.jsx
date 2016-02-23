import * as React from 'react';

const SliderTrack = ({ onClick }) =>
    (
        <div className="k-slider-track" onClick={onClick}>
            <div className="k-slider-selection"></div>
            <a className="k-draghandle" href="#">Drag</a>
        </div>
    );

SliderTrack.propTypes = {
    onClick: React.PropTypes.func
};

export default SliderTrack;