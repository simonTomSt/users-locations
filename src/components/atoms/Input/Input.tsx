import type { HTMLAttributes } from 'react'
import InputMask from 'react-input-mask'

export type InputProps = { disabled?: true } & HTMLAttributes<HTMLInputElement>

export const Input = ({ ...rest }: InputProps): JSX.Element => (
  <InputMask mask="(999.999.999.999)" maskChar="0" {...rest} />
)
