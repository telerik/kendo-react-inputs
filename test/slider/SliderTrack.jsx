import * as React from 'react';
import { shallow } from 'enzyme';
import SliderTrack from '../../src/slider/SliderTrack';

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

    it('should propagate draghandle mousedown', () => {
        let spy = jasmine.createSpy('mousedown');
        let result = shallow(<SliderTrack onMouseDown={spy} />);
        result.simulate('mousedown');
        expect(spy).toHaveBeenCalled();
    });

    it('should not attach click handler when disabled', () => {
        let result = shallow(<SliderTrack disabled/>);
        expect(result.props().onClick).toBe(undefined);
    });
});
