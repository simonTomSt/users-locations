import styled from '@emotion/styled'
import { H2, H4, Paper, Paragraph } from 'components/atoms'
import tw from 'twin.macro'

export type LocationDetailsCardProps = {
  title: string
  details: Record<string, string>
}

const DetailItem = styled.div`
  ${tw`
    text-gray-600 
    mb-2
  `}
  break-inside: avoid-column;
`

export const LocationDetailsCard = ({
  title,
  details
}: LocationDetailsCardProps): JSX.Element => (
  <Paper>
    {console.log(details)}
    <H2 className="mb-4">{title}</H2>
    {Object.entries(details).map(([name, value]) => (
      <DetailItem key={name}>
        <H4 className="text-gray-500 mb-0">{name}</H4>
        <Paragraph className="text-gray-400">{value}</Paragraph>
      </DetailItem>
    ))}
  </Paper>
)
