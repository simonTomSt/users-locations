import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserIP } from 'shared/store'
import { MainLayout } from 'components/templates'
import { SearchForm } from 'components/organisms'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserIP())
  }, [dispatch])

  return (
    <MainLayout>
      <SearchForm />
    </MainLayout>
  )
}

export default App
