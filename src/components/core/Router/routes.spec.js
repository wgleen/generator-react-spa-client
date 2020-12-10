import React from 'react'
import { render } from '@testing-library/react'
import RouterProvider from './RouterProvider'
import Routes from './Routes'

describe('<Routes />', () => {
  it('should render correctly', () => {
    const component = render(
      <RouterProvider>
        <Routes />
      </RouterProvider>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })
})
