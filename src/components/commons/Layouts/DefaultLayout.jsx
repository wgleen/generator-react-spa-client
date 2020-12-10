import React from 'react'
import PropTypes from 'prop-types'

const DefaultLayout = (props) => {
  const { children } = props

  return (
    <div>
      <section>{children}</section>
    </div>
  )
}

DefaultLayout.defaultProps = {
  children: null
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default DefaultLayout
