import { render, screen } from '@testing-library/react'
import { Paper } from './Paper'

const TEST_TEXT = 'Paper content'

describe('Paper', () => {
  it('should render child component', () => {
    render(<Paper>{TEST_TEXT}</Paper>)

    expect(screen.getByText(TEST_TEXT)).toBeInTheDocument()
  })
})
