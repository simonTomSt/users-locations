import { forwardRef, HTMLAttributes } from 'react'
import InputMask from 'react-input-mask'

export type InputProps = { disabled?: true } & HTMLAttributes<HTMLInputElement>

export const Input = forwardRef<InputMask, InputProps>(({ ...rest }, ref) => (
  <InputMask mask="(999.999.999.999)" maskChar="0" ref={ref} {...rest} />
))
