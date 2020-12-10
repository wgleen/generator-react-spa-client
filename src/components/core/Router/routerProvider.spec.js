import React from 'react'
import { render, screen } from '@testing-library/react'
import RouterProvider from './RouterProvider'

describe('<RouterProvider />', () => {
  it('should render correctly', () => {
    const component = render(<RouterProvider />)

    expect(component).toMatchSnapshot()

    screen.debug(component.container)

    component.unmount()
  })
})
