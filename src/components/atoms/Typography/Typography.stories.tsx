import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import * as AllTypographies from './index'

const allTypography = () => (
  <table>
    {Object.entries(AllTypographies).map(([name, Typography]) => (
      <tr key={name} className="mb-4 flex justify-between items-center">
        <td>
          <h4 className="mr-40">{name}</h4>
        </td>
        <td>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </td>
      </tr>
    ))}
  </table>
)

export default {
  title: 'Atoms/Typography',
  component: allTypography
} as Meta

export const Typography = () => allTypography()
