import { LocationMarkerIcon } from '@heroicons/react/solid'
import { theme } from 'twin.macro'

type MapMarkerProps = {
  lat: number
  lng: number
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MapMarker = (props: MapMarkerProps) => (
  <LocationMarkerIcon
    width={40}
    height={40}
    color={theme('colors.purple.700')}
  />
)
