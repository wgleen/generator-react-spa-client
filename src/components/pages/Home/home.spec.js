import React from 'react'
import { mount } from 'enzyme'
import Wrapper from '../../core/Wrapper/Wrapper'
import Home from './Home'

describe('<Home />', () => {
  it('should render correctly', () => {
    const component = mount(
      <Wrapper>
        <Home />
      </Wrapper>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should render a Head component with title prop equal to "Home Page"', () => {
    const component = mount(
      <Wrapper>
        <Home />
      </Wrapper>
    )

    expect(component.find('Head').prop('title')).toStrictEqual('Home Page')
  })

  it('should render a Head component with description prop equal to "Welcome to Home page"', () => {
    const component = mount(
      <Wrapper>
        <Home />
      </Wrapper>
    )

    expect(component.find('Head').prop('description')).toStrictEqual(
      'Welcome to Home page'
    )
  })

  it('should render a Text component with content equal to "Welcome to Home page"', () => {
    const component = mount(
      <Wrapper>
        <Home />
      </Wrapper>
    )

    expect(component.find('Text').text()).toEqual('Welcome to Home page')

    component.unmount()
  })
})
