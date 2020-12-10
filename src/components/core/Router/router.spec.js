import React from 'react'
import { render, screen } from '@testing-library/react'
import Router from './Router'

describe('<Router />', () => {
  it('should render correctly', () => {
    const component = render(<Router />)

    expect(component).toMatchSnapshot()

    screen.debug(component.container)

    component.unmount()
  })
})
