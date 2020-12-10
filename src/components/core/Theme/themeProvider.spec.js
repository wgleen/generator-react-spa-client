import React from 'react'
import { mount } from 'enzyme'
import ThemeProvider from './ThemeProvider'

describe('<ThemeProvider />', () => {
  it('should render correctly', () => {
    const component = mount(<ThemeProvider />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })
})
