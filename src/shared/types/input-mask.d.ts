// Type definitions for react-input-mask 3.0
// Project: https://github.com/sanniassin/react-input-mask
// Definitions by: Alexandre Paré <https://github.com/apare>
//                 Dima Danylyuk <https://github.com/dima7a14>
//                 Lucas Rêgo <https://github.com/lucasraziel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9
// modified by ru-web-designer

declare module 'react-input-mask' {
  import * as React from 'react'

  export interface Selection {
    start: number
    end: number
  }

  export interface InputState {
    value: string
    selection: Selection | null
  }

  export interface BeforeMaskedStateChangeStates {
    previousState: InputState
    currentState: InputState
    nextState: InputState
  }

  export interface MaskOptions {
    mask: string
    maskChar: string | null
    alwaysShowMask: boolean
    formatChars: Record<string, any>
    permanents: Array<number>
  }

  export interface InputMaskProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Mask string. Format characters are:
     * * `9`: `0-9`
     * * `a`: `A-Z, a-z`
     * * `\*`: `A-Z, a-z, 0-9`
     *
     * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
     * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
     */
    mask: string | Array<string | RegExp>
    maskChar?: string | null
    formatChars?: Record<string, any>
    /**
     * Character to cover unfilled editable parts of mask. Default character is "_". If set to null, unfilled parts will be empty, like in ordinary input.
     */
    maskPlaceholder?: string | null
    /**
     * Show mask even in empty input without focus.
     */
    alwaysShowMask?: boolean
    /**
     * Use inputRef instead of ref if you need input node to manage focus, selection, etc.
     */
    inputRef?: React.Ref<HTMLInputElement>
    /**
     * In case you need to implement more complex masking behavior,
     * you can provide beforeMaskedValueChange function to change masked
     * value and cursor position before it will be applied to the input.
     * beforeMaskedValueChange receives following arguments:
     *
     * @param newState (object): New input state. Contains value and selection fields. selection is null on input blur or when function is called before input mount.
     * @example { value: '12/1_/____', selection: { start: 4, end: 4 } }
     *
     * @param oldState (object): Input state before change. Contains value and selection fields. selection is null on input focus or when function is called before input mount.
     * @param userInput (string): Raw entered or pasted string. null if user didn't enter anything (e.g. triggered by deletion or rerender due to props change).
     * @param maskOptions (object): Mask options.
     * @example {
     *  mask: '99/99/9999',
     *  maskChar: '_',
     *  alwaysShowMask: false,
     * formatChars: {
     * 	'9': '[0-9]',
     * 	'a': '[A-Za-z]',
     * 	'*': '[A-Za-z0-9]'
     * },
     * permanents: [2, 5] // permanents is an array of indexes of the non-editable characters in the mask
     * 	}
     */
    beforeMaskedValueChange?(
      newState: InputState,
      oldState: InputState,
      userInput: string | null,
      maskOptions: MaskOptions
    ): InputState
  }

  // eslint-disable-next-line react/prefer-stateless-function
  export class ReactInputMask extends React.Component<InputMaskProps> {}

  export default ReactInputMask
}
