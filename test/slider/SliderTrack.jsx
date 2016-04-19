import * as React from 'react';
import { shallow } from 'enzyme';
import { SliderTrack } from '../../src/slider/SliderTrack';

describe('SliderTrack', () => {
    it('should render a div', () => {
        const result = shallow(<SliderTrack />);

        expect(result.type()).toEqual('div');
    });

    it('should render a selection', () => {
        const result = shallow(<SliderTrack />);
        const selection = result.children().first();

        expect(selection.type()).toEqual('div');
        expect(selection.hasClass('k-slider-selection')).toBe(true);
    });

    it('should render a draghandle', () => {
        const result = shallow(<SliderTrack />);
        const draghandle = result.children().last();

        expect(draghandle.type()).toEqual('a');
        expect(draghandle.hasClass('k-draghandle')).toBe(true);
    });

    it('should not attach click handler when disabled', () => {
        const result = shallow(<SliderTrack disabled/>);

        expect(result.props().onClick).toBe(undefined);
    });

    it('should render pressed style', () => {
        const result = shallow(<SliderTrack trackPressed />);
        const draghandle = result.children().last();

        expect(draghandle.hasClass('k-pressed')).toBe(true);
    });

    it('should not render pressed style if not pressed', () => {
        const result = shallow(<SliderTrack />);
        const draghandle = result.children().last();

        expect(draghandle.hasClass('k-pressed')).toBe(false);
    });
});
