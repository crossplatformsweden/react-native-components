// https://itnext.io/testing-react-16-3-components-with-react-test-renderer-without-enzyme-d9c65d689e88
import React from 'react';
import { ICrossEditorProps, CrossEditor } from './CrossEditor';
import TestRenderer from 'react-test-renderer';
import { TextInputMaskProps } from 'react-native-masked-text';

jest.unmock('react-native');
jest.unmock('./CrossEditor');

/**
   * Test component rendering. Properties of children might be tested by importing their type:
   *```
      const btn = wrapper.root.findByType(Button); // or findByProps({ mode: 'text' });
      expect(btn.props.title).toBe('child');
      ```
   */
describe('components', () => {
  describe('<CrossEditor />', () => {
    describe('`ICrossEditorProps` interface', () => {
      const propsMock: ICrossEditorProps = { label: 'Test' };
      it('Should match snapshot', () => {
        expect(propsMock).toMatchSnapshot();
      });

      it('Should have `maskProps` property that is undefined', () => {
        expect(propsMock.maskProps).toBeUndefined();
      });
    });

    describe('With `label` property provided', () => {
      it('Component should render', () => {
        const wrapper = TestRenderer.create(
          <CrossEditor
            label={'Test'}
            onChangeText={jest.fn()}
            value={'Textvalue'}
          />
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
      });

      it('Should have paper <TextInput /> with mode "outlined"', () => {
        const wrapper = TestRenderer.create(
          <CrossEditor
            label={'Test'}
            onChangeText={jest.fn()}
            value={'Textvalue'}
          />
        );
        const child = wrapper.root.findByProps({ mode: 'outlined' });
        expect(child.type).toEqual('TextInput');
      });

      it('TextInputProps onChangeText should be called', () => {
        let gotText: string | undefined = undefined;
        const onCalled = (val: string) => (gotText = val);

        const textVal = '111222';
        const maskProps: TextInputMaskProps = { type: 'zip-code' };

        const wrapper = TestRenderer.create(
          <CrossEditor
            onChangeText={onCalled}
            label={'Test'}
            maskProps={maskProps}
            value={'default value'}
          />
        );

        const child = wrapper.root.findByProps(maskProps);
        child.instance.props.onChangeText(textVal);

        // There will not be a value test time
        expect(gotText).toEqual('');
      });

      it('maskProps onChangeText should be called', () => {
        let gotText: string | undefined = undefined;
        const onCalled = (val: string) => (gotText = val);

        const textVal = '111222';
        const maskProps: TextInputMaskProps = {
          type: 'zip-code',
          onChangeText: onCalled,
        };

        const wrapper = TestRenderer.create(
          <CrossEditor
            label={'Test'}
            maskProps={maskProps}
            value={'default value'}
          />
        );

        const child = wrapper.root.findByProps({
          type: 'zip-code',
        });
        child.instance.props.onChangeText(textVal);

        // There will not be a value test time
        expect(gotText).toEqual('');
      });
    });
  });
});
