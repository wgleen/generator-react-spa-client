import React from 'react'
import { mount } from 'enzyme'
import Router from './Router'

describe('<Router />', () => {
  it('should render correctly', () => {
    const component = mount(<Router />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should render the RouterProvider component containing the Routes component', () => {
    const component = mount(<Router />)

    expect(component.find('RouterProvider').find('Routes').exists()).toBeTrue()

    component.unmount()
  })
})
