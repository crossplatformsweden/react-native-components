import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

/**
 * Properties for the {@link CrossEditor} component. Supports masking through {@link maskProps}. This allows getting the masked value.
 *
 * The `onChangeText` event will isntead export the raw value.
 *
 * Inherits react-native-paper {@link https://callstack.github.io/react-native-paper/text-input.html TextInputProps}
 */
export interface ICrossEditorProps extends TextInputProps {
  /**
   * Text for floating label
   * https://callstack.github.io/react-native-paper/text-input.html
   */
  label: string;
  /**
   * `True` to use error styling
   * https://callstack.github.io/react-native-paper/text-input.html
   */
  error?: boolean | undefined;
  /**
   * Visual appearence. Default value is 'outlined'
   *
   * https://callstack.github.io/react-native-paper/text-input.html
   */
  mode?: 'flat' | 'outlined' | undefined;
  /**
   * Allows masking the input.
   *
   * https://github.com/benhurott/react-native-masked-text
   *
   * @example
   * ```
   <CrossEditor
    label='Mobile'
    maskProps={{ type: 'cel-phone' }} />```
   */
  maskProps?: TextInputMaskProps | undefined;
}

let maskInput: any | null = null;

/**
 * A text input supporting mask through {@see ICrossEditorProps.maskProps}.
 *
 * When using mask the raw value will be exported in the `onChangeText` event, not the masked value.
 *
 * Default {@see ICrossEditorProps.mode mode} is 'outlined'.
 *
 * Props are {@see ICrossEditorProps}
 *
 *
 * @example
 * ```
 <CrossEditor
  label='Mobile'
  maskProps={{ type: 'cel-phone' }} />
 ```
 */
export class CrossEditor extends React.Component<ICrossEditorProps> {
  constructor(props: ICrossEditorProps) {
    super(props);
  }

  render() {
    const paperProps = {
      ...this.props,
      mode: this.props.mode || ('outlined' as 'flat' | 'outlined'),
    } as TextInputProps;
    // console.log('** CrossEditor paper props = ', paperProps);

    if (this.props.maskProps && this.props.maskProps.type) {
      const maskedProps = {
        ...this.props,
        ...this.props.maskProps,
      } as TextInputMaskProps;
      // console.log('** CrossEditor masked props = ', maskedProps);

      // console.log('*** CrossEditor: render TextInputMask');

      return (
        <TextInputMask
          {...maskedProps}
          ref={(comp) => (maskInput = comp)}
          // @ts-ignore - bad map
          customTextInput={TextInput}
          customTextInputProps={paperProps}
          onChangeText={() => {
            // console.log('**** CrossEditor: onChangeText');
            if (!maskInput || !maskInput.getRawValue) {
              // console.log('TextInputMask missing getRawValue', maskInput);
              return;
            }

            // @ts-ignore - bad map
            const rawValue = maskInput.getRawValue();
            // console.log('CrossEditor rawValue = ', rawValue || 'nothing');

            if (maskedProps && maskedProps.onChangeText) {
              maskedProps.onChangeText(rawValue);
              return;
            }

            if (paperProps.onChangeText) {
              paperProps.onChangeText(rawValue);
              return;
            }

            // console.log('***** CrossEditor: no listener *****');
          }}
        />
      );
    }

    // console.log('** CrossEditor: render paper TextInput **');
    return <TextInput {...paperProps} mode={paperProps.mode} />;
  }
}

export default CrossEditor;
