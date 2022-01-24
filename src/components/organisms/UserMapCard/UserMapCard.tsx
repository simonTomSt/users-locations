import { MapCard } from 'components/molecules'
import { useSelector } from 'react-redux'
import { useStatusState } from 'shared/hooks'
import {
  selectCurrentUserLocationCoordinates,
  selectCurrentUserLocationStatus
} from 'shared/store'

export const UserMapCard = (): JSX.Element => {
  const center = useSelector(selectCurrentUserLocationCoordinates)
  const status = useSelector(selectCurrentUserLocationStatus)
  const { pending } = useStatusState(status)

  return <MapCard title="Your position" center={center} pending={pending} />
}
