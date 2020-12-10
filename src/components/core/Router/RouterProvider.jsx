import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'

const RouterProvider = (props) => {
  const { children } = props

  return <Router>{children}</Router>
}

RouterProvider.defaultProps = {
  children: null
}

RouterProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string
  ])
}

export default RouterProvider
