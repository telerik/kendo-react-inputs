import * as React from 'react';
import { shallow } from 'enzyme';
import KendoComponent from '../src/KendoComponent';

describe('KendoComponent', () => {
    let result;

    beforeEach(() => { /* test setup */ });

    it('should render a div', () => {
        result = shallow(<KendoComponent />);
        expect(result.type()).toEqual('div');
    });
});
