import type { BackgroundColors, TextColors, TextTypes } from '@tallo/themes';
import type { TextStyle, ViewStyle } from 'react-native';
import type { TextProps } from '../text/text.props';

export interface TextEntryRef {
  focus: () => void;
  blur: () => void;
  setPrivate: () => void;
}

export interface TextEntryProps {
  ref?: React.RefObject<TextEntryRef>;
  readOnly?: boolean;
  /**
   * Can tell input field to automatically capitalize certain characters
   */
  autoCapitalize?: 'none' | 'characters' | 'words' | 'sentences';
  modalInput?: string;
  autoCorrect?: boolean;
  onPressIn?: () => void;
  returnKeyLabel?: string;
  /**
   * This is an Android only react property to disable text input auto suggestion.
   */
  autoCompleteType?:
    | 'off'
    | 'username'
    | 'password'
    | 'email'
    | 'name'
    | 'tel'
    | 'street-address'
    | 'postal-code'
    | 'cc-number'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year';

  text?: string;

  textType?: keyof TextTypes;

  textAlign?: TextProps['textAlign'];
  /**
   * @default: primary1
   */
  textColor?: keyof TextColors;
  /**
   * @default: primary2
   */
  hintColor?: keyof TextColors;

  // whether or not showing soft keyboard when the field is focused
  showSoftInputOnFocus?: boolean;

  /**
   * Sets the color of the cursor and selection when the text box is in focus.
   * @default: primary1
   */
  tintColor?: keyof TextColors;

  controlName?: string;

  /**
   * Text displayed when no content has been entered in the text box.
   */
  hint?: string;

  /**
   * Indicates the maximum number of characters that can be entered.
   */
  inputCharLimit?: number;

  /**
   * Specifies minimum height, in lines, of the input field.  Defaults to 1 (single line input)
   */
  linesMinimum?: number;

  /**
   * Specifies maximum height, in lines, of the input field.
   */
  linesMaximum?: number;

  /**
   * Indicates the type of keyboard that the user should see when they begin using the input field.
   */
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';

  /**
   * Sets the input mode property of the input
   */
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /**
   * Indicates that text in this field is secure, its content should be hidden, and the keyboard should not autocorrect.
   */
  secureTextEntry?: boolean;

  /**
   * Enables InputAccessoryView component for iOS only. This component adds a native look alike done button bar above the keyboard
   * in order to dismiss the keyboard when the user is done typing. This is not yet supported for web.
   */
  showInputAccessoryView?: boolean;

  /**
   * Callback with key pressed
   */
  keyPressHandler?: (key: string) => void;

  /**
   * Callback with the input whenever the user enters a value into the field.
   */
  textChangeHandler?: (text?: string) => void;

  /**
   * Callback with the input whenever the user ends editing.
   */
  endEditingHandler?: (text: string) => void;

  /**
   * Callback when control loses focus
   */
  blurHandler?: () => void;

  /**
   * Callback when control gains focus
   */
  focusHandler?: () => void;
  /**
   * Callback when control's submit button is pressed
   */
  onSubmitEditing?: (text: string) => void;

  onPaste?: (event: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
   * Determines how the return key should look.
   */
  returnKeyType?:
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send'
    | 'none'
    | 'previous'
    | 'default'
    | 'google'
    | 'join'
    | 'route'
    | 'yahoo'
    | 'emergency-call';
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;
  styles?: { container?: ViewStyle; input?: TextStyle };
  /**
   * Will disable the input if set to true
   */
  background?: keyof BackgroundColors;
}
