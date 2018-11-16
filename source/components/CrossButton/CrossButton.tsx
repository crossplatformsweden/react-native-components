import React from 'react';
// @ts-ignore
import { Button } from 'react-native-paper';
import { ViewStyle, StyleProp, View, ButtonProps } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Color } from 'csstype';
import _ from 'lodash';
import styles, { Colors } from '../../styles';

/**
 * Cross button options
 * @typedef ICrossButtonProps
 */
export interface ICrossButtonProps {
  /**
   * Foreground (icon) color. Default is {@link Colors.CrossBlack}
   */
  color?: Color;
  /**
   * Font-Awesome icon name
   *
   * https://fontawesome.com/icons/
   */
  iconName?: string;
  /**
   * Background color. Default value is {@link Colors.NextButton} if {@link title} was supplied
   */
  backgroundColor?: Color;
  style?: StyleProp<ViewStyle>;
  title?: string;
  /**
   * Size of the icon
   */
  size?: number;
  disabled?: boolean;
  /**
   * Button visual appearence. Default is 'text'
   *
   * https://callstack.github.io/react-native-paper/button.html
   */
  mode?: 'text' | 'outlined' | 'contained';
  /**
   * Optional button styles to apply
   */
  buttonStyle?: ButtonProps;
  onPress?: () => void;
  compact?: boolean;
}

/**
 * A custom button that displays as an icon if {@param title} is not supplied
 *
 * Remarks: use custom {@param onPressButton} event
 * @param param0 {@link ICrossButtonProps}
 */
export class CrossButton extends React.Component<ICrossButtonProps> {
  render() {
    const mode = this.props.mode || 'text';
    return (
      <View style={styles.container}>
        {_.isNil(this.props.title) && !_.isNil(this.props.iconName) ? (
          <FontAwesome.Button
            {...this.props}
            style={(this.props.style as ViewStyle) || styles.container}
            onPress={() => {
              if (this.props.onPress) {
                this.props.onPress();
              }
            }}
            color={this.props.color || Colors.CrossBlack}
            name={this.props.iconName.toString()
            }
          />
        ) : (
          <Button
            color={this.props.backgroundColor || Colors.NextButton}
            disabled={this.props.disabled || false}
            {...this.props}
            icon={({ size, color }) =>
              this.props.iconName ? (
                <FontAwesome
                  name={this.props.iconName}
                  size={this.props.size || size}
                  style={{ margin: 0, padding: 0 }}
                  color={color}
                />
              ) : null
            }
            style={this.props.style || this.props.buttonStyle || styles.button}
            onPress={
              this.props.onPress
                ? this.props.onPress
                : () => console.log('** CrossButton press **')
            }
            mode={mode}
          >
            {this.props.title}
          </Button>
        )}
      </View>
    );
  }
}

export default CrossButton;
