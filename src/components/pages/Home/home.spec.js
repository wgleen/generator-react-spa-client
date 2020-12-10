import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

describe('<Home />', () => {
  it('should render correctly', () => {
    const component = render(<Home />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should render a text equal to "Welcome to Home page"', () => {
    const component = render(<Home />)

    expect(component.container).toHaveTextContent('Welcome to Home page')

    component.unmount()
  })
})
