import React from 'react';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
  BallIndicatorProps,
} from 'react-native-indicators';

import { Colors } from '../../styles';

/**
 * Type of spinner. See examples at:
 *
 * https://github.com/n4kz/react-native-indicators
 *
 * @export
 * @enum {string}
 */
export enum CrossSpinnerType {
  BallIndicator = 'BallIndicator',
  BarIndicator = 'BarIndicator',
  DotIndicator = 'DotIndicator',
  MaterialIndicator = 'MaterialIndicator',
  PacmanIndicator = 'PacmanIndicator',
  PulseIndicator = 'PulseIndicator',
  SkypeIndicator = 'SkypeIndicator',
  UIActivityIndicator = 'UIActivityIndicator',
  WaveIndicator = 'WaveIndicator',
}

export interface ICrossSpinnerProps extends BallIndicatorProps {
  /**
   * {@link IndicatorType}
   */
  type: CrossSpinnerType;
  /**
   * Optional custom styles
   */
  style?: any;
  testID?: string|undefined;
}

/**
 * Generates a React-Native spinning busy indicator
 *
 * https://github.com/n4kz/react-native-indicators
 *
 * @param param0 see {@link ISpinnerProps}
 */
export const CrossSpinner = ({
  type,
  style = null,
  color = Colors.CrossLightBlue,
  count = 8,
  size = 40,
  testID = type.toString()
}: ICrossSpinnerProps) => {
  const props: ICrossSpinnerProps = {
    type,
    style,
    count,
    size,
    color,
    testID
  };
  switch (type) {
    case 'BallIndicator':
      return <BallIndicator {...props} />;
    case 'BarIndicator':
      return <BarIndicator {...props} />;
    case 'DotIndicator':
      return <DotIndicator {...props} />;
    case 'PacmanIndicator':
      return <PacmanIndicator {...props} />;
    case 'PulseIndicator':
      return <PulseIndicator {...props} />;
    case 'SkypeIndicator':
      return <SkypeIndicator {...props} />;
    case 'UIActivityIndicator':
      return <UIActivityIndicator {...props} />;
    case 'WaveIndicator':
      return <WaveIndicator {...props} />;
    default:
      return <MaterialIndicator {...props} />;
  }
};
