import * as React from 'react';
import { shallow } from 'enzyme';
import Switch from '../../src/switch/Switch';

describe('Switch', () => {
    it('adds default widget classes', () => {
        let result = shallow(<Switch />);
        expect(result.html().indexOf('km-widget')).not.toBe(-1);
        expect(result.html().indexOf('km-switch')).not.toBe(-1);
    });

    it('creates toggle handle', () => {
        let result = shallow(<Switch />);
        expect(result.html().indexOf('km-switch-handle')).not.toBe(-1);
    });

    it('creates a container', () => {
        let result = shallow(<Switch />);
        expect(result.html().indexOf('km-switch-container')).not.toBe(-1);
    });

    it('creates wrapper and background', () => {
        let result = shallow(<Switch />);
        expect(result.html().indexOf('km-switch-wrapper')).not.toBe(-1);
        expect(result.html().indexOf('km-switch-background')).not.toBe(-1);
    });

    it('creates labels', () => {
        let result = shallow(<Switch />);
        expect(result.html().indexOf('km-switch-label-on')).not.toBe(-1);
        expect(result.html().indexOf('km-switch-label-off')).not.toBe(-1);
    });

    it('calls change event handler when changed', () => {
        let spy = jasmine.createSpy('click');
        let result = shallow(<Switch onClick={spy} />);
        result.simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('disabled switch has disabled classes applied', () => {
        let result = shallow(<Switch disabled />);
        expect(result.html().indexOf('k-state-disabled')).not.toBe(-1);
    });
});
