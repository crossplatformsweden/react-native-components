import React from 'react';
import CrossLabel, { ICrossLabelProps } from './CrossLabel';
import TestRenderer from 'react-test-renderer';
import {
  Headline,
  Title,
  Subheading,
  Caption,
  Paragraph,
  Text,
} from 'react-native-paper';
import { Colors } from '../../styles';
import { Linking } from 'react-native';

jest.unmock('react-native');
jest.unmock('./CrossLabel');

describe('components', () => {
  describe('<CrossLabel />', () => {
    describe('`ICrossLabelProps` interface', () => {
      const propsMock: ICrossLabelProps = {};
      it('Should match snapshot', () => {
        expect(propsMock).toMatchSnapshot();
      });

      it('Should have `isTitle` property that is undefined', () => {
        expect(propsMock.isTitle).toBeUndefined();
      });
    });

    it('Component should render', () => {
      const wrapper = TestRenderer.create(<CrossLabel />);
      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('When `isHeadline` is `true` should contain <Headline />', () => {
      const wrapper = TestRenderer.create(
        <CrossLabel isHeadline={true}>
          Crossplatform (isHeadline=true)
        </CrossLabel>
      );
      const child = wrapper.root.findByType(Headline);
      expect(child.type).toEqual('Text');
    });

    it('When `isTitle` is `true` should contain <Headline />', () => {
      const wrapper = TestRenderer.create(
        <CrossLabel isTitle={true}>&lt;CrossLabel isTitle=true&gt;</CrossLabel>
      );
      const child = wrapper.root.findByType(Title);
      expect(child.type).toEqual('Text');
    });

    it('When `isSubheading` is `true` should contain <Subheading />', () => {
      const wrapper = TestRenderer.create(
        <CrossLabel isSubheading={true} style={{ marginTop: 5 }}>
          isSubHeading = true
        </CrossLabel>
      );
      const child = wrapper.root.findByType(Subheading);
      expect(child.type).toEqual('Text');
    });

    it('When `isCaption` is `true` should contain <Caption />', () => {
      const wrapper = TestRenderer.create(
        <CrossLabel
          isCaption={true}
          style={{ color: Colors.CrossLightBlue, marginTop: 10 }}
        >
          isCaption=true, custom color
        </CrossLabel>
      );
      const child = wrapper.root.findByType(Caption);
      expect(child.type).toEqual('Text');
    });

    it('When `isParagraph` is `true` should contain <Paragraph />', () => {
      const wrapper = TestRenderer.create(
        <CrossLabel isParagraph={true} style={{ marginTop: 5 }}>
          isParagraph = true
        </CrossLabel>
      );
      const child = wrapper.root.findByType(Paragraph);
      expect(child.type).toEqual('Text');
    });

    it('When `onPressUrlTarget` is url should be clickable', () => {
      const wrapper = TestRenderer.create(
        <CrossLabel
          onPressUrlTarget='https://www.typescriptlang.org/'
          style={{ marginTop: 20, marginBottom: 10 }}
        >
          Clickable link (onPressUrlTarget):
        </CrossLabel>
      );
      const child = wrapper.root.findByType(Text);
      child.props.onPress();
      expect(Linking.openURL).toBeCalledWith('https://www.typescriptlang.org/');
    });
  });
});
