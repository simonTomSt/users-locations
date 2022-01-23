import { Paper, Button } from 'components/atoms'
import { FormField } from 'components/molecules'
import tw from 'twin.macro'

const FormCard = tw(Paper)`
    flex
    items-end
    justify-between
`

export const SearchForm = (): JSX.Element => (
  <FormCard className="flex">
    <FormField
      className="d-none"
      label="Provide IP Address:"
      placeholder="Type ip to search its location"
    />
    <Button loading={false} type="submit">
      Search
    </Button>
  </FormCard>
)
