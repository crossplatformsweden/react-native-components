import React from 'react';
import CrossButton from './CrossButton';
import TestRenderer from 'react-test-renderer';

function setup(iconName: string, title?: any) {
  return TestRenderer.create(
    <CrossButton iconName={iconName} title={title} onPress={jest.fn()} />
  );
}

jest.unmock('react-native');
jest.unmock('./CrossButton');

describe('components', () => {
  /**
   * Test component rendering. Properties of children might be tested by importing their type:
   *
   *    const busyProps = wrapper.find(BusyIndicator).props();
   *    expect(busyProps.isBusy).toBe(false);
   */
  describe('<CrossButton />', () => {
    it('With title should render', () => {
      const wrapper = setup('home', 'home');
      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('Without title should renders', () => {
      const wrapper = setup('map', undefined);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
