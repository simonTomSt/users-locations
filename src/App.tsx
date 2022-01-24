import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserIP } from 'shared/store'
import { MainLayout } from 'components/templates'
import {
  LastSearchDetails,
  LastSearchMap,
  SearchForm,
  SearchList
} from 'components/organisms'

export const App = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchUserIP())
  // }, [dispatch])

  return (
    <MainLayout>
      <SearchList />
      <LastSearchMap />
      <LastSearchDetails />
      <SearchForm />
    </MainLayout>
  )
}

export default App
