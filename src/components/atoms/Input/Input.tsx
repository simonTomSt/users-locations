import { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import tw from 'twin.macro'

type InputStyleProps = {
  disabled?: boolean
  error?: boolean
}

export type InputProps = InputStyleProps & HTMLAttributes<HTMLInputElement>

export const Input = styled.input<InputStyleProps>`
  ${tw`
    border-2
    border-solid
    border-gray-300
    py-2
    px-3
    rounded
    transition-colors
    duration-300
    focus:!border-purple-500
    focus:outline-none
    focus:shadow-lg
    `}
  ${ifProp('error', tw`border-red-400`)}
    
  &::placeholder {
    ${tw`text-gray-400`}
  }

  &:disabled {
    ${tw`
      bg-gray-50
      border-gray-200
      text-gray-400
    `}
  }
`
