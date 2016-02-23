import * as React from 'react';

export default function SliderTrack({ onClick }) {
    return (
        <div className="k-slider-track" onClick={onClick}>
            <div className="k-slider-selection"></div>
            <a className="k-draghandle" href="#">Drag</a>
        </div>
    );
}