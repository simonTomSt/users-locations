import { MapCard } from 'components/molecules'
import { useSelector } from 'react-redux'
import { useStatusState } from 'shared/hooks'
import {
  selectLastLocationCoordinates,
  selectSearchLocationStatus
} from 'shared/store'

export const LastSearchMap = (): JSX.Element => {
  const center = useSelector(selectLastLocationCoordinates)
  const status = useSelector(selectSearchLocationStatus)
  const { pending } = useStatusState(status)

  return <MapCard title="Last search" center={center} pending={pending} />
}
