import { forwardRef } from 'react'
import tw from 'twin.macro'
import { Input, InputProps, SmallParagraph } from 'components/atoms'
import InputMask from 'react-input-mask'

const InputContainer = tw.div`
    flex
    flex-col
`
const InputLabel = tw.label``
const ErrorMessage = tw(SmallParagraph)`text-red-500`

type FormFieldProps = {
  errorMessage?: string
  label?: string
  className?: string
} & InputProps

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ errorMessage, label, className, ...rest }, ref) => (
    <InputContainer className={className}>
      {label && <InputLabel>{label}</InputLabel>}
      <InputMask mask="999.999.999.999" maskChar="0">
        {(inputProps: any) => <Input {...inputProps} {...rest} ref={ref} />}
      </InputMask>
      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
)
