import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import * as reducks from '../../../reducks'

const ReduxProvider = (props) => {
  const { children } = props

  return (
    <>
      <Provider store={reducks.store}>{children}</Provider>
    </>
  )
}

ReduxProvider.defaultProps = {
  children: null
}

ReduxProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string
  ])
}

export default ReduxProvider
