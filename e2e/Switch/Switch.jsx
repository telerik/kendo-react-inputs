import React from 'react';
import ReactDOM from 'react-dom';
import Switch from '../../src/switch/Switch';
import { withRoot } from 'e2e-utils';

describe('Switch', withRoot(root => {
    function render(options) {
        const props = Object.assign({
            onChange: () => { /*noop*/ }
        }, options);

        ReactDOM.render(<Switch {...props} />, root[0]);
    }

    it('triggers change on switch press', () => {
        const changeSpy = jasmine.createSpy("onChange");
        const props = {
            onChange: changeSpy
        };
        render(props);

        const switchComp = root.find('.km-switch')[0];

        switchComp.dispatchEvent(new MouseEvent('mousedown', {
            bubbles: true,
            clientX: switchComp.offsetLeft,
            clientY: switchComp.offsetTop
        }));

        document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        expect(changeSpy).toHaveBeenCalledWith({ checked: true });
    });

    it('does not trigger chnage when disabled', () => {
        const changeSpy = jasmine.createSpy("onChange");
        const props = {
            onChange: changeSpy,
            disabled: true
        };
        render(props);

        const switchComp = root.find('.km-switch')[0];

        switchComp.dispatchEvent(new MouseEvent('mousedown', {
            bubbles: true,
            clientX: switchComp.offsetLeft,
            clientY: switchComp.offsetTop
        }));

        document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        expect(changeSpy).not.toHaveBeenCalled();
    });
}));
