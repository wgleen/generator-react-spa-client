import React from 'react'
import { mount } from 'enzyme'
import { Helmet } from 'react-helmet'
import config from '../../../config/index'
import Head from './Head'

describe('<Head />', () => {
  it('should render correctly', () => {
    const component = mount(<Head />)

    expect(component).toMatchSnapshot()

    component.unmount()
  })

  it('should render the children prop given as html tag', () => {
    const component = mount(
      <Head>
        <meta name="author" content="John Doe" />
      </Head>
    )

    const helmet = Helmet.peek()

    const metaDescription = helmet.metaTags.find(
      (meta) => meta.name === 'author'
    )

    expect(metaDescription.content).toEqual('John Doe')

    component.unmount()
  })

  describe('when title prop is defined', () => {
    const title = 'Page Title'

    it('should render a title element with content equal to title prop given and siteConfig.name', () => {
      const component = mount(<Head title={title} />)

      const helmet = Helmet.peek()

      expect(helmet.title).toEqual(`${title} - ${config.site.name}`)

      component.unmount()
    })
  })

  describe('when title prop is not defined', () => {
    const title = undefined

    it('should render a title element with content equal to siteConfig.title and siteConfig.name', () => {
      const component = mount(<Head title={title} />)

      const helmet = Helmet.peek()

      expect(helmet.title).toEqual(`${config.site.title} - ${config.site.name}`)

      component.unmount()
    })
  })

  describe('when description prop is defined', () => {
    const description = 'Page description'

    it('should render a meta element name prop equal to "description" and content prop equal to description prop given', () => {
      const component = mount(<Head description={description} />)

      const helmet = Helmet.peek()

      const metaDescription = helmet.metaTags.find(
        (meta) => meta.name === 'description'
      )

      expect(metaDescription.content).toEqual(description)

      component.unmount()
    })
  })

  describe('when description prop is not defined', () => {
    const description = undefined

    it('should render a meta element name prop equal to "description" and content prop equal to description prop given', () => {
      const component = mount(<Head description={description} />)

      const helmet = Helmet.peek()

      const metaDescription = helmet.metaTags.find(
        (meta) => meta.name === 'description'
      )

      expect(metaDescription.content).toEqual(config.site.description)

      component.unmount()
    })
  })
})
