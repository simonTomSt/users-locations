import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Input'
}
