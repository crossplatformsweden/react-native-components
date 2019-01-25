import React from 'react';
import CrossButton, { ICrossButtonProps } from './CrossButton';
import TestRenderer from 'react-test-renderer';
import { styles } from '../../styles';

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
      color="blue"
      onPress={onPress || jest.fn()}
      size={size || 64}
    />
  );
}

jest.unmock('react-native');
jest.unmock('./CrossButton');

describe('components', () => {
  describe('<CrossButton />', () => {
    describe('`ICrossButtonProps` interface', () => {
      const propsMock: ICrossButtonProps = {};
      it('Should match snapshot', () => {
        expect(propsMock).toMatchSnapshot();
      });

      it('Should have `color` property that is undefined', () => {
        expect(propsMock.color).toBeUndefined();
      });
    });

    describe('With `title` and `iconName` properties provided', () => {
      it('Component should render', () => {
        const wrapper = setup('home', 'home');
        expect(wrapper.toJSON()).toMatchSnapshot();
      });

      it('Should have paper <Button />', () => {
        const wrapper = setup('home', 'home');
        const child = wrapper.root.findByProps({ mode: 'text' });
        expect(child.type).toEqual('Button');
      });

      it('Should have paper `<Button />` with `mode` property set to "text"', () => {
        const wrapper = setup('home', 'home');
        const child = wrapper.root.findByProps({ mode: 'text' });
        expect(child).toBeDefined();
      });

      it('Should have paper `<FontAwesome />` icon with `size` property set to `99`', () => {
        const wrapper = setup('home', 'home', 99);
        const child = wrapper.root.findByProps({ size: 99 });
        expect(child.props.color).toBe('blue');
      });

      it('Should have paper `<FontAwesome />` icon with `size` property set to `99`', () => {
        const wrapper = setup('home', 'home', 99);
        const child = wrapper.root.findByProps({ size: 99 });
        expect(child).toBeDefined();
      });
    });

    describe('With `iconName` but without `title` property provided', () => {
      it('Component should render', () => {
        const wrapper = setup('map', undefined);
        expect(wrapper.toJSON()).toMatchSnapshot();
      });

      it('Should have `<FontAwesome.Button />` with `name` set to "map"', () => {
        const wrapper = setup('map', undefined);
        const child = wrapper.root.findByProps({ name: 'map' });
        expect(child).toBeDefined();
      });

      it('Should have `<FontAwesome.Button />` with `style` set to "container"', () => {
        const wrapper = setup('map', undefined);
        const child = wrapper.root.findByProps({ name: 'map' });
        expect(child.props.style).toBe(styles.container);
      });

      it('<FontAwesome.Button /> onPress should be called', () => {
        let called = false;
        const onCalled = () => (called = !called);

        const wrapper = setup('map', undefined, undefined, onCalled);
        const child = wrapper.root.findByProps({
          testID: 'FontAwesomeButton',
        });
        child.props.onPress();
        expect(called).toBeTruthy();
      });
    });
  });
});
