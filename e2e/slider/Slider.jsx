import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../../src/slider/Slider';
import { withRoot } from 'e2e-utils';

describe('Slider', withRoot(root => {
    function render(options) {
        const props = Object.assign({
            max: 10,
            min: 0,
            style: { width: 300 },
            smallStep: 1,
            value: 3,
            onChange: () => { /*noop*/ }
        }, options);

        ReactDOM.render(<Slider {...props} />, root[0]);
    }

    it('should resize slider wrapper', () => {
        render();

        const slider = root.find('.k-slider');

        expect(slider.width()).toEqual(300);
    });

    it('should resize wrapper', () => {
        render();

        const track = root.find('.k-slider-track');

        expect(track.width()).toEqual(222);
    });

    it('should add tabindex attributes', () => {
        render();

        const handle = root.find('.k-draghandle');

        expect(handle.attr('tabindex')).toEqual('0');
    });

    it('should add aria attributes', () => {
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

    it('should add k-pressed on track drag', () => {
        render();

        const track = root.find('.k-slider-track')[0];
        const handle = root.find('.k-draghandle');

        track.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));

        expect(handle.hasClass('k-pressed')).toBeTruthy();

        document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    });

    it('should trigger change on track press', () => {
        const changeSpy = jasmine.createSpy("onChange");
        const props = {
            min: 1,
            onChange: changeSpy
        };

        render(props);

        const track = root.find('.k-slider-track')[0];
        const tick = root.find('.k-tick').first();

        track.dispatchEvent(new MouseEvent('mousedown', {
            bubbles: true,
            clientX: tick.offset().left,
            clientY: tick.offset().top
        }));

        expect(changeSpy).toHaveBeenCalledWith({ value: props.min });

        document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
    });

    it('should trigger change on handle drag', () => {
        const changeSpy = jasmine.createSpy("onChange");
        const props = {
            min: 0,
            max: 3,
            value: 0,
            onChange: changeSpy
        };

        render(props);

        const track = root.find('.k-slider-track')[0];
        const tick = root.find('.k-tick');

        track.dispatchEvent(new MouseEvent('mousedown', {
            bubbles: true,
            clientX: tick.first().offset().left,
            clientY: tick.first().offset().top
        }));

        document.dispatchEvent(new MouseEvent('mousemove', {
            bubbles: true,
            clientX: tick.eq(1).offset().left + 40,
            clientY: tick.eq(1).offset().top
        }));

        expect(changeSpy).toHaveBeenCalledWith({ value: 1 });
    });

    it('should focus drag handle when track component is clicked', () => {
        const props = {
            min: 0,
            max: 3,
            value: 0
        };
        render(props);
        const component = root.find('.k-slider')[0];
        const event = document.createEvent('Event');

        event.initEvent("click", true, true);
        component.dispatchEvent(event);

        const activeElement = document.activeElement.className;

        expect(activeElement).toEqual('k-draghandle');
    });
}));
