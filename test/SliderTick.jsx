import * as React from 'react';
import { shallow } from 'enzyme';
import SliderTick from '../src/SliderTick';

describe('SliderTick', () => {
    it('should render a li', () => {
        let result = shallow(<SliderTick />);
        expect(result.type()).toEqual('li');
    });

    it('should have k-tick class', () => {
        let result = shallow(<SliderTick />);
        expect(result.hasClass('k-tick')).toBe(true);
    });

    it('should not add k-first and k-last by default', () => {
        let result = shallow(<SliderTick />);
        expect(result.hasClass('k-first')).toBe(false);
        expect(result.hasClass('k-last')).toBe(false);
    });

    it('should add k-first when intiialized with first prop', () => {
        let result = shallow(<SliderTick first/>);
        expect(result.hasClass('k-first')).toBe(true);
        expect(result.hasClass('k-last')).toBe(false);
    });

    it('should add k-last when intiialized with last prop', () => {
        let result = shallow(<SliderTick last/>);
        expect(result.hasClass('k-first')).toBe(false);
        expect(result.hasClass('k-last')).toBe(true);
    });

    it('onClick handler is called when clicked', () => {
        let spy = jasmine.createSpy('click');
        let result = shallow(<SliderTick onClick={spy} />);
        result.simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});
