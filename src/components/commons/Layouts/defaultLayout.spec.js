import React from 'react'
import { mount } from 'enzyme'
import DefaultLayout from './DefaultLayout'

describe('<DefaultLayout />', () => {
  it('should render correctly', () => {
    const component = mount(<DefaultLayout />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should render the children prop given', () => {
    const children = 'Text children'

    const component = mount(<DefaultLayout>{children}</DefaultLayout>)

    expect(component.text()).toEqual(children)

    component.unmount()
  })
})
