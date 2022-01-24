import { render, screen } from '@testing-library/react'
import { LocationDetailsCard } from './LocationDetailsCard'

const MOCK_DATA = {
  DETAILS: {
    city: 'Wielun'
  },
  TITLE: 'Title'
}

describe('LocationDetailsCard', () => {
  it('should render with defaults', () => {
    render(
      <LocationDetailsCard
        title={MOCK_DATA.TITLE}
        details={MOCK_DATA.DETAILS}
      />
    )

    expect(screen.getByText(MOCK_DATA.TITLE)).toBeInTheDocument()
    expect(screen.getByText(MOCK_DATA.DETAILS.city)).toBeInTheDocument()
  })
})
