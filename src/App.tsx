import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserIP } from 'shared/store'
import { MainLayout } from 'components/templates'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserIP())
  }, [dispatch])

  return <MainLayout>sdsdsds</MainLayout>
}

export default App
