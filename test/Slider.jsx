import * as React from 'react';
import { shallow } from 'enzyme';
import KendoSlider from '../src/KendoSlider';

describe('Slider', () => {
    it('should add default wrapper classes', () => {
        let result = shallow(<KendoSlider />);
        expect(result.hasClass('k-widget')).toBe(true);
        expect(result.hasClass('k-slider')).toBe(true);
        expect(result.hasClass('k-state-default')).toBe(true);
    });

    it('should add k-slider-horizontal class', () => {
        let result = shallow(<KendoSlider />);
        expect(result.hasClass('k-slider-horizontal')).toBe(true);
    });

    it('should add k-slider-vertical class', () => {
        let result = shallow(<KendoSlider vertical />);
        expect(result.hasClass('k-slider-vertical')).toBe(true);
    });

    it('should add default component classes', () => {
        let result = shallow(<KendoSlider />);
        expect(result.children().first().hasClass('k-slider-wrap')).toBe(true);
        expect(result.children().first().hasClass('k-slider-buttons')).toBe(true);
    });

    it('should add topleft class when placement is before', () => {
        let result = shallow(<KendoSlider tickPlacement="before"/>);
        expect(result.children().first().hasClass('k-slider-topleft')).toBe(true);
    });

    it('should add bottomRight class when placement is after', () => {
        let result = shallow(<KendoSlider tickPlacement="after"/>);
        expect(result.children().first().hasClass('k-slider-bottomright')).toBe(true);
    });

    it('should not render ticks when placement is none', () => {
        let result = shallow(<KendoSlider tickPlacement="none"/>);
        expect(result.children().text().indexOf('SliderTicks')).toEqual(-1);
    });

    it('should not render tick position classes when position is both', () => {
        let result = shallow(<KendoSlider tickPlacement="both"/>);
        const children = result.children();
        expect(children.first().hasClass('k-slider-bottomright')).toBe(false);
        expect(children.first().hasClass('k-slider-topleft')).toBe(false);
    });
});
