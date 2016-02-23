import * as React from 'react';
import { shallow } from 'enzyme';
import SliderButton from '../src/SliderButton';

describe('SliderButton', () => {
    it('should render a anchor', () => {
        let result = shallow(<SliderButton />);
        expect(result.type()).toEqual('a');
    });

    it('should add class k-button-increase for left button', () => {
        let result = shallow(<SliderButton increase/>);
        expect(result.hasClass('k-button-increase')).toBe(true);
    });

    it('should add class k-button-decrease for left button', () => {
        let result = shallow(<SliderButton />);
        expect(result.hasClass('k-button-decrease')).toBe(true);
    });

    it('should render child span element', () => {
        let result = shallow(<SliderButton />);
        expect(result.children().first().type()).toEqual('span');
    });

    it('should render title as text', () => {
        let result = shallow(<SliderButton title="Test" />);
        expect(result.children().first().text()).toEqual('Test');
    });

    it('onClick handler is propagated', () => {
        const noop = () => {/*meta function*/};
        let result = shallow(<SliderButton onClick={noop} />);
        expect(result.children().first().props().onClick).toEqual(noop);
    });
});
