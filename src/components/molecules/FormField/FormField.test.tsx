import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormField, FormFieldProps } from './FormField'
import { Formik } from 'formik'

const MOCK_DATA = {
  LABEL_TEXT: 'Input label',
  ERROR_TEXT: 'Input error text'
}

describe('FormField', () => {
  const renderComponent = (props: Omit<FormFieldProps, 'name'>) =>
    render(
      <Formik
        initialValues={{ input: '' }}
        onSubmit={() => {
          null
        }}
      >
        <FormField name="input" {...props} />
      </Formik>
    )

  it('should render label', () => {
    renderComponent({ label: MOCK_DATA.LABEL_TEXT })

    expect(screen.getByText(MOCK_DATA.LABEL_TEXT)).toBeInTheDocument()
  })

  it('should render errorMessage when error true', () => {
    renderComponent({ errorMessage: MOCK_DATA.ERROR_TEXT, error: true })

    expect(screen.getByText(MOCK_DATA.ERROR_TEXT)).toBeInTheDocument()
  })
})
