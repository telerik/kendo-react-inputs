import * as React from 'react';
import { shallow } from 'enzyme';
import KendoSlider from '../src/KendoSlider';

describe('KendoSlider', () => {
  let result;

  beforeEach(() => { /* test setup */ });
	
  it('should render a div', () => {
    result = shallow(<KendoSlider />);
    expect(result.type()).toEqual('div');
  });
});
