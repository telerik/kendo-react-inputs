import * as React from 'react';
import { shallow } from 'enzyme';
import SliderTicks from '../../src/slider/SliderTicks';
import SliderTick from '../../src/slider/SliderTick';

describe('SliderTicks', () => {
    it('should render a ul', () => {
        let result = shallow(<SliderTicks />);
        expect(result.type()).toEqual('ul');
    });

    it('should add k-reset and k-slider-items class names', () => {
        let result = shallow(<SliderTicks />);
        expect(result.hasClass('k-reset')).toBe(true);
        expect(result.hasClass('k-slider-items')).toBe(true);
    });

    it('does not render li elements by default', () => {
        let result = shallow(<SliderTicks />);
        expect(result.children().length).toEqual(0);
    });

    it('renders children elements based on tickCount prop', () => {
        let result = shallow(<SliderTicks tickCount={2} />);
        expect(result.children().length).toEqual(2);
        expect(result.children().first().type()).toBe(SliderTick);
    });

    it('sets first prop to the first child', () => {
        let result = shallow(<SliderTicks tickCount={3} />);
        expect(result.children().first().props().first).toEqual(true);
    });

    it('sets last prop to the last child', () => {
        let result = shallow(<SliderTicks tickCount={3} />);
        expect(result.children().last().props().last).toEqual(true);
    });

    it('propagates onClick to children elements', () => {
        const noop = () => {/*meta function*/};
        let result = shallow(<SliderTicks onClick={noop} tickCount={1} />);
        expect(result.children().first().props().onClick).toEqual(noop);
    });
});
