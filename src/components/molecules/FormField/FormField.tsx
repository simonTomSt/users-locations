import { forwardRef } from 'react'
import tw from 'twin.macro'
import { Input, SmallParagraph } from 'components/atoms'
import type InputMask from 'react-input-mask'

const InputContainer = tw.div``
const InputLabel = tw.label``
const ErrorMessage = tw(SmallParagraph)`text-red-500`

type FormFieldProps = {
  errorMessage?: string
  label: string
}

export const FormField = forwardRef<InputMask, FormFieldProps>(
  ({ errorMessage, label }, ref) => (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Input ref={ref} />
      {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
)
