import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import config from '../../../config'
import Routes from './Routes'

describe('<Routes />', () => {
  it('should render correctly', () => {
    const component = mount(
      <MemoryRouter initialEntries={[{ key: 'test' }]}>
        <Routes />
      </MemoryRouter>
    )

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  describe('when the current page is equal to config.routes.root.path', () => {
    it.skip('should render the Home component', () => {
      const component = mount(
        <MemoryRouter
          initialEntries={[config.routes.root.path]}
          initialIndex={0}
        >
          <Routes />
        </MemoryRouter>
      )

      expect(component.find('Home').exists()).toBeTrue()

      component.unmount()
    })
  })
})
