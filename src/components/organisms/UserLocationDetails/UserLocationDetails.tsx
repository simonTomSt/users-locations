import { LocationDetailsCard } from 'components/molecules'
import { useSelector } from 'react-redux'
import { useStatusState } from 'shared/hooks'
import {
  selectCurrentUserLocationDetails,
  selectCurrentUserLocationStatus
} from 'shared/store'

export const UserLocationDetails = (): JSX.Element => {
  const details = useSelector(selectCurrentUserLocationDetails)
  const status = useSelector(selectCurrentUserLocationStatus)
  const { pending } = useStatusState(status)

  return (
    <LocationDetailsCard
      title="Your location details"
      details={details}
      pending={pending}
    />
  )
}
