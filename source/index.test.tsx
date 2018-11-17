import React from 'react';
import TestRenderer from 'react-test-renderer';
import { CrossButton } from './index';

function setup(
  iconName: string,
  title?: any,
  size?: number,
  onPress?: () => void
) {
  return TestRenderer.create(
    <CrossButton
      iconName={iconName}
      title={title}
      color='blue'
      onPress={onPress || jest.fn()}
      size={size || 64}
    />
  );
}

jest.unmock('react-native');

/**
   * Test component rendering. Properties of children might be tested by importing their type:
   *```
      const btn = wrapper.root.findByType(Button); // or findByProps({ mode: 'text' });
      expect(btn.props.title).toBe('child');
      ```
   */
describe('components', () => {
  describe('Index should have <CrossButton />', () => {
    it('Component should render', () => {
      const wrapper = setup('home', 'home');
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });
});
