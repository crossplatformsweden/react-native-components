import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Colors } from '../../styles';
import Modal from 'react-native-modal';
import {
  CrossSpinnerType,
  CrossSpinner,
  ICrossSpinnerProps,
} from '../animations/CrossSpinner';
import styles from '../../styles';

export type AnimationConfig = string | { from: Object; to: Object };

export type Orientation =
  | 'portrait'
  | 'portrait-upside-down'
  | 'landscape'
  | 'landscape-left'
  | 'landscape-right';

/**
 * Representation of react-native-modal props. All props except `isVisible` and `children` from:
 *
 * https://github.com/react-native-community/react-native-modal#available-props
 */
export interface IModalProps {
  animationIn?: AnimationConfig;
  animationInTiming?: number;
  animationOut?: AnimationConfig;
  animationOutTiming?: number;
  avoidKeyboard?: boolean;
  backdropColor?: string;
  backdropOpacity?: number;
  backdropTransitionInTiming?: number;
  backdropTransitionOutTiming?: number;
  useNativeDriver?: boolean;
  deviceHeight?: number;
  deviceWidth?: number;
  hideModalContentWhileAnimating?: boolean;
  onModalShow?: () => void;
  onModalHide?: () => void;
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
  onSwipe?: () => void;
  swipeThreshold?: number;
  style?: StyleProp<ViewStyle>;
  swipeDirection?: 'up' | 'down' | 'left' | 'right';
  scrollTo?: (e: any) => void;
  scrollOffset?: number;
  scrollOffsetMax?: number;
  supportedOrientations?: Orientation[];
  onDismiss?: () => void;
  onShow?: () => void;
  hardwareAccelerated?: boolean;
  onOrientationChange?: (orientation: 'portrait' | 'landscape') => void;
  presentationStyle?:
    | 'fullScreen'
    | 'pageSheet'
    | 'formSheet'
    | 'overFullScreen';
}

/**
 * Describes the props for {@link CrossBusyIndicator}
 *
 * @export
 * @interface IBusyIndicatorProps
 */
export interface IBusyIndicatorProps {
  /**
   * Determines if the indicator is visible
   *
   * @type {boolean}
   * @memberof IBusyIndicatorProps
   */
  isBusy: boolean;
  /**
   * Optional message to show while busy. Defaults to empty string.
   *
   * @type {string}
   * @memberof IBusyIndicatorProps
   */
  message?: string | undefined;
  /**
   * Type of spinner to use
   *
   * @type {CrossSpinnerType}
   * @memberof IBusyIndicatorProps
   */
  type?: CrossSpinnerType | undefined;
  /**
   * Optional test id to assign this component. Default is "1"
   *
   * @type {string}
   * @memberof IBusyIndicatorProps
   */
  testID?: string | undefined;
  /**
   * Determines if the modal is cancellable. Otherwise visibility is controlled by {@link isBusy}
   */
  isCancelButtonVisible: boolean;
  /**
   * Optional callback for user cancel event.
   */
  onCancel?: () => void;
  /**
   * Text for cancel button. Default is "Cancel"
   */
  cancelText?: string | undefined;
  /**
   * Optional custom style for the {@link cancelText}
   */
  cancelTextStyle?: StyleProp<TextStyle> | undefined;
  /**
   * Optional custom style for the modal view
   */
  modalStyle?: StyleProp<ViewStyle> | undefined;
  /**
   * Optional custom style for the inner view, contained in the modal
   */
  innerViewStyle?: StyleProp<ViewStyle> | undefined;
  /**
   * Optional custom style for the {@link message}
   */
  messageStyle?: StyleProp<TextStyle> | undefined;
  /**
   * Optional properties to configure the spinner
   *
   * See {@link ICrossSpinnerProps}
   */
  spinnerProps?: ICrossSpinnerProps | undefined;
  /**
   * Optional properties to customize the modal. All props except `isVisible` and `children` from
   *
   * https://github.com/react-native-community/react-native-modal#available-props
   */
  modalProps?: IModalProps | undefined;
}

/**
 * @description
 * Displays a modal with busy indicator (spinner) and message when {@link IBusyIndicatorProps.isBusy} is `true`.
 *
 * Properties are {@link IBusyIndicatorProps}.
 *
 * Customize the modal through {@link IBusyIndicatorProps.modalProps}.
 *
 * Also supports cancelling the modal using properties
 * {@link IBusyIndicatorProps.isCancelButtonVisible},
 * {@link IBusyIndicatorProps.cancelText} and
 * {@link IBusyIndicatorProps.onCancel}.
 * This does however not hide the modal.
 *
 * @example <caption>Modal with cancel</caption>
 *  <CrossBusyIndicator
 *         isBusy={this.state.isBusy}
 *         type='PacmanIndicator'
 *         isCancelButtonVisible={true}
 *         message="Loading.."
 *         onCancel={() => this.setState({ isBusy: false })}
 *       />
 *
 * @example <caption>Non cancellable and custom styles</caption>
 *       <CrossBusyIndicator
 *          spinnerProps={{
 *            color: 'red',
 *            type: 'WaveIndicator'
 *          }}
 *          messageStyle={{color: 'red'}}
 *          isBusy={this.state.isBusy2}
 *          isCancelButtonVisible={false}
 *          message="Resistance is futile"
 *        />
 *
 * @example <caption>Customize modal props</caption>
 *       <CrossBusyIndicator
 *          modalProps={{
 *            swipeDirection: 'up',
 *            backdropColor: 'blue'
 *          }}
 *          isBusy={this.state.isBusy2}
 *          isCancelButtonVisible={false}
 *          message="Busy busy busy.."
 *        />
 */
export class CrossBusyIndicator extends React.Component<IBusyIndicatorProps> {
  constructor(props: IBusyIndicatorProps) {
    super(props);
    this.onCancel = this.onCancel.bind(this);
  }

  onCancel() {
    if (!this.props.isCancelButtonVisible) {
      return;
    }

    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render() {
    return (
      <View testID={this.props.testID || '1'}>
        <Modal
          {...this.props.modalProps}
          style={
            this.props.modalStyle
              ? [styles.absoluteCentered, this.props.modalStyle]
              : styles.absoluteCentered
          }
          isVisible={this.props.isBusy}
          onDismiss={this.onCancel}
        >
          <View
            style={
              this.props.innerViewStyle
                ? [
                    styles.container,
                    styles.paddingDefault,
                    this.props.innerViewStyle,
                  ]
                : [styles.container, styles.paddingDefault]
            }
          >
            <View style={[styles.columnContentTopCenter]}>
              <CrossSpinner
                type={this.props.type || 'MaterialIndicator'}
                style={styles.spinner}
                {...this.props.spinnerProps}
              />
            </View>

            <View style={[styles.columnContentTopCenter]}>
              <Text style={[styles.textSpinner, this.props.messageStyle]}>
                {this.props.message || ''}
              </Text>
              {this.props.isCancelButtonVisible ? (
                <TouchableOpacity onPress={this.onCancel}>
                  <Text
                    testID="cancelText"
                    style={[
                      styles.textSpinner,
                      { color: Colors.CancelButton },
                      this.props.cancelTextStyle,
                    ]}
                  >
                    {this.props.cancelText || 'Cancel'}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default CrossBusyIndicator;
