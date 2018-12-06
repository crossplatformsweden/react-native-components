import React, { ReactNode } from 'react';
import {
  View,
  TextProps,
  Linking,
  TouchableHighlight,
  TextStyle,
} from 'react-native';
import {
  Text,
  Headline,
  Subheading,
  Title,
  Caption,
  Paragraph,
} from 'react-native-paper';
import styles from '../../styles';
import _ from 'lodash';

/**
 * Properties for the {@link CrossLabel} component. Control component type using {@link isTitle}, {@link isCaption},
 * {@link isHeadline}, {@link isSubheading} and {@link isParagraph}.
 *
 * Create an URL link using {@link onPressUrlTarget} and customize color using {@link linkColor}.
 *
 * Inherits react-native Text's {@link https://facebook.github.io/react-native/docs/text.html#props TextProps}
 */
export interface ICrossLabelProps extends TextProps {
  /**
   * An url to open when user clicks the label. Styles the label as a clickable "link"
   */
  onPressUrlTarget?: string;
  /**
   * Optional color for the link. Default is 'blue'. See also {@link onPressUrlTarget}
   */
  linkColor?: string | undefined;
  /**
   * Displays text as a {@link https://callstack.github.io/react-native-paper/headline.html react-native paper Headline component}
   */
  isHeadline?: boolean | undefined;
  /**
   * Displays text as a {@link https://callstack.github.io/react-native-paper/title.html react-native paper Title component}
   */
  isTitle?: boolean | undefined;
  /**
   * Displays text as a {@link https://callstack.github.io/react-native-paper/subheading.html react-native paper Subheading component}
   */
  isSubheading?: boolean | undefined;
  /**
   * Displays text as a {@link https://callstack.github.io/react-native-paper/paragraph.html react-native paper Paragraph component}
   */
  isParagraph?: boolean | undefined;
  /**
   * Displays text as a {@link https://callstack.github.io/react-native-paper/caption.html react-native paper Caption component}
   */
  isCaption?: boolean | undefined;
}

/**
 * Renders the relevant react-native-paper component based on props
 */
class TextComponent extends React.Component<ICrossLabelProps> {
  constructor(props: ICrossLabelProps) {
    super(props);
  }

  render() {
    let label: ReactNode = null;
    if (this.props.isHeadline) {
      label = <Headline {...this.props}>{this.props.children}</Headline>;
    }

    if (this.props.isSubheading) {
      label = <Subheading {...this.props}>{this.props.children}</Subheading>;
    }

    if (this.props.isTitle) {
      label = <Title {...this.props}>{this.props.children}</Title>;
    }

    if (this.props.isCaption) {
      label = <Caption {...this.props}>{this.props.children}</Caption>;
    }

    if (this.props.isParagraph) {
      label = <Paragraph {...this.props}>{this.props.children}</Paragraph>;
    }

    const url = _.get(this.props, ['onPressUrlTarget']);

    if (url && !label)
      return (
        <Text {...this.props} onPress={() => Linking.openURL(url.toString())}>
          {this.props.children}
        </Text>
      );

    if (url && label)
      return (
        <TouchableHighlight onPress={() => Linking.openURL(url.toString())}>
          {label}
        </TouchableHighlight>
      );

    return label ? (
      { ...label }
    ) : (
      <Text {...this.props}>{this.props.children}</Text>
    );
  }
}

/**
 * Wrapper for {@link https://callstack.github.io/react-native-paper/text.html react-native-paper Text} component
 * that displays as a clickable link if {@link ICrossLabelProps.onPressUrlTarget} is supplied.
 *
 * Link color can also be specified through {@link ICrossLabelProps.linkColor}.
 *
 * Properties are {@link ICrossLabelProps}
 *
 * @param param0 {@link ICrossLabelProps}
 * @returns {@link View}
 */
export class CrossLabel extends React.Component<ICrossLabelProps> {
  constructor(props: ICrossLabelProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextComponent
          {...this.props}
          style={[
            this.props.onPressUrlTarget ? linkStyle : {},
            this.props.style,
            this.props.linkColor ? { color: this.props.linkColor } : {},
          ]}
        >
          {this.props.children}
        </TextComponent>
      </View>
    );
  }
}

const linkStyle: TextStyle = {
  color: 'blue',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
};

export default CrossLabel;
