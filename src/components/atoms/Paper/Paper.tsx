import tw from 'twin.macro'
import type { ReactNode } from 'react'

const StyledPaper = tw.article`
    bg-white
    shadow-xl
    rounded-lg
    p-6
`

type PaperProps = {
  children: ReactNode
}
export const Paper = ({ children }: PaperProps): JSX.Element => (
  <StyledPaper>{children}</StyledPaper>
)
