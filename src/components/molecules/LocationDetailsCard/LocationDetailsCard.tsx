import styled from '@emotion/styled'
import { BarsLoader, H2, H4, Paper, Paragraph } from 'components/atoms'
import tw from 'twin.macro'

export type LocationDetailsCardProps = {
  title: string
  details: Record<string, string> | null
  pending?: boolean
}

const DetailItem = styled.div`
  ${tw`
    text-gray-600 
    mb-3
  `}
  break-inside: avoid-column;
`

export const LocationDetailsCard = ({
  title,
  details,
  pending
}: LocationDetailsCardProps): JSX.Element => (
  <Paper className="min-h-[18rem]">
    <H2 className="mb-4">{title}</H2>
    {pending ? (
      <BarsLoader />
    ) : !!details ? (
      <div
        style={{
          columns: '2 auto',
          height: '100%',
          maxHeight: '15rem',
          columnFill: 'auto'
        }}
      >
        {Object.entries(details).map(([name, value]) => (
          <DetailItem key={name}>
            <H4 className="text-gray-500 mb-0 capitalize">{name}</H4>
            <Paragraph className="text-gray-400">{value}</Paragraph>
          </DetailItem>
        ))}
      </div>
    ) : (
      <Paragraph>No searches</Paragraph>
    )}
  </Paper>
)
