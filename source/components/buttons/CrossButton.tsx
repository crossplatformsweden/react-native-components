import React from 'react';
// @ts-ignore
import { Button } from 'react-native-paper';
import { ViewStyle, StyleProp, View, ButtonProps } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Color } from 'csstype';
import _ from 'lodash';
import styles, { Colors } from '../../styles';

/**
 * Properties for the {@link CrossButton} component
 * @typedef ICrossButtonProps
 * @type ICrossButtonProps
 */
export interface ICrossButtonProps {
  /**
   * Foreground (icon) color. Default is {@link Colors.CrossBlack}
   */
  color?: Color;
  /**
   * Font-Awesome 4 icon name
   *
   * https://fontawesome.com/v4.7.0/icons/
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
 * A custom button that displays as an Paper Button with icon or just an icon if {@link ICrossButtonProps.title} is not supplied.
 *
 * Remarks: all icons are {@link https://fontawesome.com/v4.7.0/icons/ FontAwesome v4}.
 *
 * Remark: default appearence is "text", see {@link ICrossButtonProps.mode}
 *
 * Properties are {@link ICrossButtonProps}
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
