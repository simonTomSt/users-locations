import { SmallSpan } from 'components/atoms'
import tw from 'twin.macro'

type LocationListItemProps = {
  ip: string
  countryName: string
  city: string
}

const Item = tw.div`
    flex
    bg-white
    border-b
    p-2
    border-purple-200
`

export const LocationListItem = ({
  ip,
  countryName,
  city
}: LocationListItemProps) => (
  <Item>
    <SmallSpan className="!font-bold mr-3">{ip}</SmallSpan>
    <SmallSpan className="mr-3">{countryName}</SmallSpan>
    <SmallSpan>{city}</SmallSpan>
  </Item>
)
