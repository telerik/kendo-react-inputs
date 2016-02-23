import * as React from 'react';
import { shallow } from 'enzyme';
import SliderTrack from '../src/SliderTrack';

describe('SliderTrack', () => {
    it('should render a div', () => {
        let result = shallow(<SliderTrack />);
        expect(result.type()).toEqual('div');
    });

    it('should render a selection', () => {
        let result = shallow(<SliderTrack />);
        const selection = result.children().first();
        expect(selection.type()).toEqual('div');
        expect(selection.hasClass('k-slider-selection')).toBe(true);
    });

    it('should render a draghandle', () => {
        let result = shallow(<SliderTrack />);
        const draghandle = result.children().last();
        expect(draghandle.type()).toEqual('a');
        expect(draghandle.hasClass('k-draghandle')).toBe(true);
    });

    it('should render a draghandle', () => {
        let spy = jasmine.createSpy('click');
        let result = shallow(<SliderTrack onClick={spy} />);
        result.simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});
