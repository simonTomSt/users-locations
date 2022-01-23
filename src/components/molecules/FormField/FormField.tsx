import { forwardRef } from 'react'
import tw from 'twin.macro'
import { Input, InputProps, SmallParagraph } from 'components/atoms'
import { useField } from 'formik'

const InputContainer = tw.div`
    flex
    flex-col
    w-full
`
const InputLabel = tw.label``
const ErrorMessage = tw(SmallParagraph)`text-red-500`

type FormFieldProps = {
  errorMessage?: string
  label?: string
  className?: string
  name: string
} & InputProps

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ errorMessage, label, className, name, ...rest }, ref) => {
    const [field, meta] = useField({ name })
    return (
      <InputContainer className={className}>
        {label && <InputLabel>{label}</InputLabel>}
        <Input ref={ref} {...rest} {...field} />
        {(!!errorMessage || (meta.touched && meta.error)) && (
          <ErrorMessage>{errorMessage ?? meta.error}</ErrorMessage>
        )}
      </InputContainer>
    )
  }
)
