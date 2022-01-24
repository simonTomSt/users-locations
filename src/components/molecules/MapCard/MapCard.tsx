import GoogleMapReact from 'google-map-react'
import { BarsLoader, H2, MapMarker, Paper, Paragraph } from 'components/atoms'
import { mapStyles } from './mapStyles'
import styled from '@emotion/styled'

type MapCardProps = {
  title: string
  center: { lat: number; lng: number } | null
  pending?: boolean
}

const MapContainer = styled.div`
  height: 17.5rem;
`

export const MapCard = ({ title, center, pending }: MapCardProps) => {
  return (
    <Paper>
      <H2>{title}</H2>
      {pending ? (
        <BarsLoader />
      ) : !!center ? (
        <MapContainer>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: `${process.env.REACT_APP_GOOGLE_MAPS_KEY}`
            }}
            defaultCenter={center}
            defaultZoom={10}
            options={{ styles: mapStyles }}
          >
            <MapMarker lat={center.lat} lng={center.lng} />
          </GoogleMapReact>
        </MapContainer>
      ) : (
        <Paragraph>No searches</Paragraph>
      )}
    </Paper>
  )
}
