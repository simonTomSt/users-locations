import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Paper } from './Paper'

export default {
  title: 'Atoms/Paper',
  component: Paper,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Paper>

const Template: ComponentStory<typeof Paper> = args => (
  <Paper {...args}>Paper component</Paper>
)

export const Default = Template.bind({})
Default.args = {}
