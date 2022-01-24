import { LocationDetailsCard } from 'components/molecules'
import { useSelector } from 'react-redux'
import { useStatusState } from 'shared/hooks'
import {
  selectLastSearchLocationDetails,
  selectSearchLocationStatus
} from 'shared/store'

export const LastSearchDetails = (): JSX.Element => {
  const details = useSelector(selectLastSearchLocationDetails)
  const status = useSelector(selectSearchLocationStatus)
  const { pending } = useStatusState(status)

  return (
    <LocationDetailsCard
      title="Last Search"
      details={details}
      pending={pending}
    />
  )
}
