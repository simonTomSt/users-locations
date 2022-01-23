import { HTMLAttributes } from 'react'
import { ReactComponent as SpinnerIcon } from 'assets/icons'
import { ifProp } from 'styled-tools'
import tw from 'twin.macro'
import styled from '@emotion/styled'

export const ButtonLoading = styled.span`
  ${tw`
     flex
     items-center
     justify-center
   `}
  & > svg {
    ${tw`mr-2`}
  }
`
export const StyledButton = styled.button<{ $loading: boolean }>`
  ${tw`
     py-2
     px-5  
     border-none
     rounded-lg
     bg-purple-600
     text-white
     flex
     items-center
     justify-center
     cursor-pointer
     shadow-md
     transition-colors
     duration-300
     hover:bg-purple-700
     disabled:bg-gray-300
     disabled:pointer-events-none
   `}
  ${ifProp('$loading', tw`pointer-events-none py-0 !bg-purple-600`)}
`

export type ButtonProps = {
  loading?: boolean
  loadingText?: string
  disabled?: boolean
} & HTMLAttributes<HTMLButtonElement>

export const Button = ({
  loading = false,
  loadingText = 'Processing...',
  children,
  disabled,
  ...rest
}: ButtonProps): JSX.Element => (
  <StyledButton $loading={loading} disabled={disabled || loading} {...rest}>
    {!loading ? (
      children
    ) : (
      <ButtonLoading>
        <SpinnerIcon width={20} />
        {loadingText}
      </ButtonLoading>
    )}
  </StyledButton>
)
