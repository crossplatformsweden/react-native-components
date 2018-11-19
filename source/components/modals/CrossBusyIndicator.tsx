import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Colors } from '../../styles';
import Modal from 'react-native-modal';
import {
  CrossSpinnerType,
  CrossSpinner,
  ICrossSpinnerProps,
} from '../animations/CrossSpinner';
import styles from '../../styles';

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
  cancelTextStyle?: StyleProp<ViewStyle> | undefined;
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
  messageStyle?: StyleProp<ViewStyle> | undefined;
  /**
   * Optional properties to configure the spinner
   *
   * See {@link ICrossSpinnerProps}
   */
  spinnerProps?: ICrossSpinnerProps | undefined;
}

/**
 * @description
 * Displays a modal with busy indicator (spinner) and message when {@link IBusyIndicatorProps.isBusy} is `true`
 * 
 * Properties are {@link IBusyIndicatorProps}
 * 
 * Also supports cancelling the modal using properties
 * {@link IBusyIndicatorProps.isCancelButtonVisible}, 
 * {@link IBusyIndicatorProps.cancelText} and
 * {@link IBusyIndicatorProps.onCancel}.
 * This does however not hide the modal.
 * 
 * Modal with cancel
 * @example
 * 
 ```
    <CrossBusyIndicator
      isBusy={isBusy}
      type={CrossSpinnerType.PacmanIndicator}
      isCancelButtonVisible={true}
      message="Loading.."
      onCancel={() => (isBusy = false)}
    />
```
 */
export class CrossBusyIndicator extends React.Component<IBusyIndicatorProps> {
  /**
   *
   */
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
          style={[styles.absoluteCentered, this.props.modalStyle]}
          isVisible={this.props.isBusy}
          onDismiss={this.onCancel}
        >
          <View
            style={[
              styles.container,
              styles.paddingDefault,
              this.props.innerViewStyle,
            ]}
          >
            <View style={[styles.columnContentTopCenter]}>
              <CrossSpinner
                type={this.props.type || CrossSpinnerType.MaterialIndicator}
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
