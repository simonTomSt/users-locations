import React from 'react'
import { useEffect } from 'react'
import { api } from 'shared/api'
import tw from 'twin.macro'

const Main = tw.main`
  text-red-200
`

export const App = () => {
  useEffect(() => {
    api.get('/52.31.106.220')
  }, [])
  return <Main>sdsdsds</Main>
}

export default App
