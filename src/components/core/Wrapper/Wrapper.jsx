import React from 'react'
import PropTypes from 'prop-types'
import ReduxProvider from '../Redux/ReduxProvider'
import ThemeProvider from '../Theme/ThemeProvider'
import RouterProvider from '../Router/RouterProvider'

const Wrapper = (props) => {
  const { children } = props

  return (
    <>
      <ReduxProvider>
        <ThemeProvider>
          <RouterProvider>{children}</RouterProvider>
        </ThemeProvider>
      </ReduxProvider>
    </>
  )
}

Wrapper.defaultProps = {
  children: null
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
}

export default Wrapper
