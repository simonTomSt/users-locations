import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button, ButtonProps } from './Button'
import { ElementRole } from 'shared/constants'

const MOCK_DATA = {
  BUTTON_TEXT: 'Button text',
  LOADING_TEXT: 'Loading...'
}

const renderComponent = (props: ButtonProps = {}) =>
  render(<Button {...props}>{MOCK_DATA.BUTTON_TEXT}</Button>)

describe('Button', () => {
  it('should render button with defaults', () => {
    renderComponent()

    expect(screen.getByRole(ElementRole.Button)).toBeInTheDocument()
    expect(screen.getByText(MOCK_DATA.BUTTON_TEXT)).toBeInTheDocument()
  })

  it('should be disabled when disabled true', () => {
    renderComponent({ disabled: true })

    const buttonEl = screen.getByRole(ElementRole.Button)

    expect(buttonEl).toBeDisabled()
  })

  it('should be in loading state when isLoading passed', () => {
    renderComponent({ loading: true, loadingText: MOCK_DATA.LOADING_TEXT })

    const buttonEl = screen.getByText(MOCK_DATA.LOADING_TEXT)

    expect(buttonEl).toBeInTheDocument()
  })

  describe('OnClick', () => {
    it('should trigger onClick', () => {
      const onClick = jest.fn()

      renderComponent({ onClick })
      const buttonEl = screen.getByRole(ElementRole.Button)

      userEvent.click(buttonEl)
      expect(onClick).toHaveBeenCalled()
    })

    it('should not trigger onClick when disabled true', () => {
      const onClick = jest.fn()

      renderComponent({ onClick, disabled: true })
      userEvent.click(
        screen.getByRole(ElementRole.Button),
        {},
        { skipPointerEventsCheck: true }
      )

      expect(onClick).not.toHaveBeenCalled()
    })

    it('should not trigger onClick when in loading state', () => {
      const onClick = jest.fn()
      renderComponent({ loading: true, onClick })
      userEvent.click(
        screen.getByRole(ElementRole.Button),
        {},
        { skipPointerEventsCheck: true }
      )

      expect(onClick).not.toHaveBeenCalled()
    })
  })
})
