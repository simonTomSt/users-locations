import styled from '@emotion/styled'
import { ReactComponent as BarsLoaderIcon } from 'assets/icons/bars-loader.svg'
import tw from 'twin.macro'

export const BarsLoader = styled(BarsLoaderIcon)`
  ${tw`
    absolute 
    left-1/2 
    top-1/2 
    w-12
  `}
  transform: translate(-50%, -50%);
`
