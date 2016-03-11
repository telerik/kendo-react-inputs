import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../src/Slider';
import { withRoot } from 'e2e-utils';

describe('Slider', withRoot(root => {
    function render() {
        ReactDOM.render( <Slider {...props} />, root[0]);
    }
    let props = {
        max: 10,
        min: 0,
        style: { width: 300 },
        step: 1
    };
    it('should resize slider wrapper', () => {
        render();
        const slider = root.find('.k-slider');
        expect(slider.width()).toEqual(300);
    });

    it('should resize  wrapper', () => {
        render();
        const track = root.find('.k-slider-track');

        expect(track.width()).toEqual(300);
    });
}));
