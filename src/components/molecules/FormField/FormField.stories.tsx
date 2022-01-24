import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormField } from './FormField'
import { Formik } from 'formik'

export default {
  title: 'Molecules/FormField',
  component: FormField,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof FormField>

const Template: ComponentStory<typeof FormField> = args => (
  <Formik
    initialValues={{ input: '' }}
    onSubmit={() => {
      null
    }}
  >
    <FormField {...args} />
  </Formik>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Form field',
  name: 'input'
}

export const Error = Template.bind({})
Error.args = {
  label: 'Form field with error',
  error: true,
  name: 'input',
  errorMessage: 'Error message'
}
