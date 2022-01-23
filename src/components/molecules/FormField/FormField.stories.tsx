import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormField } from './FormField'

export default {
  title: 'Molecules/FormField',
  component: FormField,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof FormField>

const Template: ComponentStory<typeof FormField> = args => (
  <FormField {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Form field'
}
