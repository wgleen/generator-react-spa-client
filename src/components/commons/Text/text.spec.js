import React from 'react'
import { mount } from 'enzyme'
import ThemeProvider from '../../core/Theme/ThemeProvider'
import Text from './Text'

describe('<Text />', () => {
  it('should render correctly', () => {
    const component = mount(
      <ThemeProvider>
        <Text />
      </ThemeProvider>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })
})
