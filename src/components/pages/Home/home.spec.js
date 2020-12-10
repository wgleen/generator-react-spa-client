import React from 'react'
import { mount } from 'enzyme'
import Home from './Home'

describe('<Home />', () => {
  it('should render correctly', () => {
    const component = mount(<Home />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should render a text equal to "Welcome to Home page"', () => {
    const component = mount(<Home />)

    expect(component.text()).toEqual('Welcome to Home page')

    component.unmount()
  })
})
