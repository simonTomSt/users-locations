import { InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import tw from 'twin.macro'

type InputStyleProps = {
  disabled?: boolean
  error?: boolean
}

export type InputProps = InputStyleProps & InputHTMLAttributes<HTMLInputElement>

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
    w-full
  `}
  ${ifProp('error', tw`border-red-400`)}
    
  &::placeholder {
    ${tw`text-gray-400`}
  }

  &:focus {
    ${tw`
      !border-purple-500
      outline-none
      shadow-lg
    `}
  }

  &:disabled {
    ${tw`
      bg-gray-50
      border-gray-200
      text-gray-400
    `}
  }
`
