
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CountryPicker from '../components/CountryPicker';

describe('CountryPicker', () => {
  it("should render my component", () => {
    const wrapper = shallow(<CountryPicker/>);
    expect(wrapper).toMatchSnapshot();
  });
});