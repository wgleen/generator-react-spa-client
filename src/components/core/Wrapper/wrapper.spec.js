import React from 'react'
import { mount } from 'enzyme'
import Wrapper from './Wrapper'

describe('<Wrapper />', () => {
  it('should render correctly', () => {
    const component = mount(<Wrapper />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should render ReduxProvider provider', () => {
    const component = mount(<Wrapper />)

    expect(component.find('ReduxProvider').exists()).toBeTrue()

    component.unmount()
  })

  it('should render ThemeProvider provider', () => {
    const component = mount(<Wrapper />)

    expect(component.find('ThemeProvider').exists()).toBeTrue()

    component.unmount()
  })

  it('should render RouterProvider provider containing the children prop given', () => {
    const children = <>Text test</>

    const component = mount(<Wrapper>{children}</Wrapper>)

    expect(component.find('RouterProvider').text()).toStrictEqual('Text test')

    component.unmount()
  })
})
