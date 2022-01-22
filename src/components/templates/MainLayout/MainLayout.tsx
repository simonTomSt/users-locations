import type { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <>{children}</>
)
