import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('<App />', () => {
  it('should render correctly', () => {
    const component = mount(<App />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })
})
