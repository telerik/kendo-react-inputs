import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../../src/slider/Slider';
import { withRoot } from 'e2e-utils';

describe('Slider', withRoot(root => {
    function render() {
        ReactDOM.render( <Slider {...props} />, root[0]);
    }
    let props;
    it('should resize slider wrapper', () => {
        props = {
            max: 10,
            min: 0,
            style: { width: 300 },
            step: 1
        };
        render();
        const slider = root.find('.k-slider');
        expect(slider.width()).toEqual(300);
    });

    it('should resize  wrapper', () => {
        props = {
            max: 10,
            min: 0,
            style: { width: 300 },
            step: 1
        };
        render();
        const track = root.find('.k-slider-track');

        expect(track.width()).toEqual(300);
    });

    it('should resize  wrapper', () => {
        props = {
            max: 10,
            min: 0,
            style: { width: 300 },
            step: 1
        };
        render();
        const track = root.find('.k-slider-track');
        expect(track.width()).toEqual(300);
    });

    it('should add tabindex attributes', () => {
        props = {
            max: 10,
            min: 0,
            style: { width: 300 },
            step: 1
        };
        render();
        const handle = root.find('.k-draghandle');
        expect(handle.attr('tabindex')).toEqual('0');
    });

    it('should add aria attributes', () => {
        props = {
            max: 10,
            min: 0,
            style: { width: 300 },
            step: 1,
            value: 3
        };
        render();
        const handle = root.find('.k-draghandle');
        const ariaMin = handle.attr('aria-valuemin');
        const ariaMax = handle.attr('aria-valuemax');
        const ariaNow = handle.attr('aria-valuenow');
        const ariaText = handle.attr('aria-valuetext');

        expect(ariaMin).toEqual('0');
        expect(ariaMax).toEqual('10');
        expect(ariaNow).toEqual('3');
        expect(ariaText).toEqual('3');
    });
}));
