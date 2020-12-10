import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import RouterProvider from './RouterProvider'
import routes from '../../../config/routes'
import Routes from './Routes'

describe('<Routes />', () => {
  it('should render correctly', () => {
    const component = mount(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  describe('when the current page is equal to routes.root.path', () => {
    it.skip('should render the Home component', () => {
      const component = mount(
        <MemoryRouter initialEntries={[routes.root.path]} initialIndex={0}>
          <Routes />
        </MemoryRouter>
      )

      expect(component.find('Home').exists()).toBeTrue()

      component.unmount()
    })
  })
})
