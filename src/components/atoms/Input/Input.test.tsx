import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { Input, InputProps } from './Input'
import { ElementRole } from 'shared/constants'

const MOCK_DATA = {
  LABEL_TEXT: 'Input label',
  PLACEHOLDER_TEXT: 'Input placeholder',
  ERROR_TEXT: 'Input error text'
}

describe('Input', () => {
  const renderComponent = (props: InputProps) => render(<Input {...props} />)

  it('should have placeholder when placeholder passed', () => {
    renderComponent({ placeholder: MOCK_DATA.PLACEHOLDER_TEXT })

    const component = screen.getByPlaceholderText(MOCK_DATA.PLACEHOLDER_TEXT)

    expect(component).toHaveAttribute('placeholder', MOCK_DATA.PLACEHOLDER_TEXT)
  })

  it('should be disabled when disabled true', () => {
    renderComponent({ placeholder: MOCK_DATA.PLACEHOLDER_TEXT, disabled: true })

    const component = screen.getByPlaceholderText(MOCK_DATA.PLACEHOLDER_TEXT)

    expect(component).toBeDisabled()
  })

  it('should  call onChange', () => {
    const onChange = jest.fn()
    renderComponent({ onChange })

    const component = screen.getByRole(ElementRole.Textbox)

    userEvent.type(component, 'test')

    expect(onChange).toHaveBeenCalled()
  })

  it('should not call onChange, when disabled', () => {
    const onChange = jest.fn()
    renderComponent({ onChange, disabled: true })

    const component = screen.getByRole(ElementRole.Textbox)

    userEvent.type(component, 'test')

    expect(onChange).not.toHaveBeenCalled()
  })
})
