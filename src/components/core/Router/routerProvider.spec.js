import React from 'react'
import { mount } from 'enzyme'
import RouterProvider from './RouterProvider'

describe('<RouterProvider />', () => {
  it('should render correctly', () => {
    const component = mount(<RouterProvider />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should render the children prop', () => {
    const children = <>text children</>
    const component = mount(<RouterProvider>{children}</RouterProvider>)

    expect(component.text()).toMatch('text children')

    component.unmount()
  })
})
