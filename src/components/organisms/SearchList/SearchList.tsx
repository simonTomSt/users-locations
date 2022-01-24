import { BarsLoader, H2, Paper, Paragraph } from 'components/atoms'
import { LocationListItem } from 'components/molecules'
import { useSelector } from 'react-redux'
import { Virtuoso } from 'react-virtuoso'
import { useStatusState } from 'shared/hooks'
import { selectSearchLocations } from 'shared/store'

export const SearchList = () => {
  const { status, locations } = useSelector(selectSearchLocations)
  const { pending } = useStatusState(status)

  return (
    <Paper className="row-span-3">
      <H2>Your searches</H2>
      {!locations.length ? (
        <Paragraph className="mt-5">No searches</Paragraph>
      ) : pending ? (
        <BarsLoader />
      ) : (
        <Virtuoso
          data={locations}
          style={{ height: 'calc(100% - 2rem)' }}
          itemContent={(index, { ip, country_name, city }) => (
            <LocationListItem
              key={index}
              ip={ip}
              countryName={country_name}
              city={city}
            />
          )}
        />
      )}
    </Paper>
  )
}
