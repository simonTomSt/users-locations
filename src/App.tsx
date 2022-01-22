import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserIP } from 'shared/store'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserIP())
  }, [dispatch])

  return <div>sdsdsds</div>
}

export default App
