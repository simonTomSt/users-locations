import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LocationListItem } from './LocationListItem'

const EXAMPLE_DATA = {
  ip: '192.168.1',
  countryName: 'USA',
  city: 'Los Angeles'
}

export default {
  title: 'Molecules/LocationListItem',
  component: LocationListItem,
  args: { ...EXAMPLE_DATA }
} as ComponentMeta<typeof LocationListItem>

const Template: ComponentStory<typeof LocationListItem> = args => (
  <LocationListItem {...args} />
)

export const Default = Template.bind({})
Default.args = {}
