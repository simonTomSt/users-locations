import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import tw from 'twin.macro'

type MainLayoutProps = {
  children: ReactNode
}

const Main = styled.main`
  ${tw`
  p-8
  mx-auto
  max-w-[75rem]
  xl:px-0
  grid
  grid-cols-3 
  gap-4
  grid-rows-3 
  grid-flow-col
`}
  grid-template-rows: 2fr 1fr 2fr;
`

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <Main>{children}</Main>
)
