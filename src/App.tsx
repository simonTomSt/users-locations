import React, { useEffect } from 'react'
import { MainLayout } from 'components/templates'
import { useDispatch } from 'react-redux'
import { fetchUserIP } from 'shared/store'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserIP())
  }, [dispatch])

  return <MainLayout>sdsdsds</MainLayout>
}

export default App
