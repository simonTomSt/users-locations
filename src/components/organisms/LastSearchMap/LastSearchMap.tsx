import { MapCard } from 'components/molecules'
import { useSelector } from 'react-redux'
import { selectLastLocationCoordinates } from 'shared/store'

export const LastSearchMap = (): JSX.Element => {
  const center = useSelector(selectLastLocationCoordinates)

  return <MapCard title="Last search" center={center} />
}
