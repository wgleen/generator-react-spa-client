import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import * as reducks from '../../../reducks'
import ReduxProvider from './ReduxProvider'

describe('<ReduxProvider />', () => {
  it('should render the Provider from react-redux with store prop equal to reducks.store', () => {
    const component = mount(<ReduxProvider />)

    expect(component.find(Provider).prop('store')).toStrictEqual(reducks.store)

    component.unmount()
  })

  it('should render the Provider from react-redux with children equal to children prop given', () => {
    const children = <>Text children</>

    const component = mount(<ReduxProvider>{children}</ReduxProvider>)

    expect(component.find(Provider).text()).toStrictEqual('Text children')

    component.unmount()
  })
})
