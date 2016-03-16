import * as React from 'react';
import { shallow } from 'enzyme';
import SliderButton from '../../src/slider/SliderButton';

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

    it('should add class k-i-arrow-e when increase and not vertical', () => {
        let result = shallow(<SliderButton increase/>);
        expect(result.children().first().hasClass('k-i-arrow-e')).toBe(true);
    });

    it('should add class k-i-arrow-w when increase and not vertical', () => {
        let result = shallow(<SliderButton />);
        expect(result.children().first().hasClass('k-i-arrow-w')).toBe(true);
    });

    it('should add class k-i-arrow-n when increase and not vertical', () => {
        let result = shallow(<SliderButton increase vertical/>);
        expect(result.children().first().hasClass('k-i-arrow-n')).toBe(true);
    });

    it('should add class k-i-arrow-s when increase and not vertical', () => {
        let result = shallow(<SliderButton vertical/>);
        expect(result.children().first().hasClass('k-i-arrow-s')).toBe(true);
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
        expect(result.first().props().onClick).toEqual(noop);
    });
});
