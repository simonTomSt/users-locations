import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LocationDetailsCard } from './LocationDetailsCard'

const EXAMPLE_DATA = {
  capital: 'Washington D.C.',
  zip: '90013',
  city: 'Los Angeles'
}
export default {
  title: 'Molecules/LocationDetailsCard',
  component: LocationDetailsCard,
  args: { details: EXAMPLE_DATA },
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LocationDetailsCard>

const Template: ComponentStory<typeof LocationDetailsCard> = args => (
  <LocationDetailsCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Location Details'
}
