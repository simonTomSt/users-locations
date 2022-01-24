import GoogleMapReact from 'google-map-react'
import { H2, MapMarker, Paper, Paragraph } from 'components/atoms'
import { mapStyles } from './mapStyles'

type MapCardProps = {
  title: string
  center: { lat: number; lng: number } | null
}

export const MapCard = ({ title, center }: MapCardProps) => {
  return (
    <Paper>
      <H2>{title}</H2>
      {!!center ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_KEY}` }}
          defaultCenter={center}
          defaultZoom={10}
          options={{ styles: mapStyles }}
        >
          <MapMarker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
      ) : (
        <Paragraph>No searches</Paragraph>
      )}
    </Paper>
  )
}
