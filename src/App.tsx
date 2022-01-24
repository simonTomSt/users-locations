import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserIP } from 'shared/store'
import { MainLayout } from 'components/templates'
import {
  LastSearchDetails,
  LastSearchMap,
  SearchForm,
  SearchList,
  UserLocationDetails,
  UserMapCard
} from 'components/organisms'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserIP())
  }, [dispatch])

  return (
    <MainLayout>
      <SearchList />
      <UserMapCard />
      <SearchForm />
      <LastSearchMap />
      <UserLocationDetails />
      <LastSearchDetails />
    </MainLayout>
  )
}

export default App
