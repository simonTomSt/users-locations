import styled from '@emotion/styled'
import { H2, H4, Paper, Paragraph } from 'components/atoms'
import { ReactComponent as BarsLoader } from 'assets/icons/bars-loader.svg'
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

const Loader = styled(BarsLoader)`
  ${tw`
    absolute 
    left-1/2 
    top-1/2 
    w-12
  `}
  transform: translate(-50%, -50%);
`

export const LocationDetailsCard = ({
  title,
  details,
  pending
}: LocationDetailsCardProps): JSX.Element => (
  <Paper className="min-h-[26rem]">
    <H2 className="mb-4 capitalize">{title}</H2>
    {pending ? (
      <Loader />
    ) : !!details ? (
      Object.entries(details).map(([name, value]) => (
        <DetailItem key={name}>
          <H4 className="text-gray-500 mb-0 capitalize">{name}</H4>
          <Paragraph className="text-gray-400">{value}</Paragraph>
        </DetailItem>
      ))
    ) : (
      <Paragraph>No searches</Paragraph>
    )}
  </Paper>
)
