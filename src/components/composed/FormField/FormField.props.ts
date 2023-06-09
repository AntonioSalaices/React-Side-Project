import { DebouncedFunc } from 'lodash';
import I18n from 'i18n-js';
import { TxKeyPath } from '@Translate/i18n';
import { OnChangeType, SingleInputType } from '@Constans/htmlConstants';
import { Func } from '@Utils/types';

export interface FormFieldProps {
  /**
   * Ref of the input
   */
  ref?: React.RefObject<HTMLInputElement>;
  /**
   * Current selected value depicted by pagination attribute
   */
  search?: string;
  /**
   * Handle fuction to listen every input change with delay
   */
  onChange?: DebouncedFunc<({ target: { value } }: OnChangeType) => void> | Func;
  /**
   * Optional options to pass to i18n, Useful for interpolation
   * as well as explicitly setting locale or translation
   */
  txOptions?: I18n.TranslateOptions;
  /**
   * The text to display if not using `tx` or nested components
   */
  text?: string;
  /**
   * Text which is looked up via i18n
   */
  tx?: TxKeyPath;
  /**
   * sub text which is looked up via i18n
   */
  subTx?: TxKeyPath;
  /**
   * The sub text to display if not using `tx` or nested components
   */
  subText?: string;
  /**
   * Icon to display inside of the input
   */
  left?: string | JSX.Element;
  /**
   * Icon to display inside of the input
   */
  right?: string | JSX.Element;
  /**
   * Type of the input
   */
  type: SingleInputType;
  /**
   * Maximum value for the input
   */
  min?: string;
  /**
   * Minimum value for the input
   */
  max?: string;
  /**
   * ID used for testing
   */
  testID: string;
}
