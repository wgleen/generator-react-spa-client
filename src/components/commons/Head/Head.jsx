import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import config from '../../../config/index'

const Head = (props) => {
  const { title, description, children } = props
  const { site: siteConfig } = config

  const titleTemplate = `${title || siteConfig.title} - ${siteConfig.name}`

  return (
    <Helmet>
      <title>{titleTemplate}</title>
      <meta
        name="description"
        content={description || siteConfig.description}
      />

      {children}
    </Helmet>
  )
}

Head.defaultProps = {
  title: '',
  description: '',
  children: null
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
}

export default Head
