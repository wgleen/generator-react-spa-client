import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

export const theme = {
  typography: {
    fontFamilyPrimary: 'Open Sans',
    fontWeightPrimary: 300,
    lineHeight: 'normal',
    textAlign: 'left'
  },
  colors: {
    primaryDarkest: '#860000',
    primaryDark: '#b90000',
    primary: '#ec0000',
    primaryLight: '#ff8686',
    primaryLightest: '#ffd2d2',
    secondaryDarkest: '#247a86',
    secondaryDark: '#2e9faf',
    secondary: '#43bccd',
    secondaryLight: '#94d9e2',
    secondaryLightest: '#d0eef2',
    grayDarkest: '#0d0d0d',
    grayDark: '#4d4d4d',
    gray: '#737373',
    grayLight: '#b3b3b3',
    grayLightest: '#e5e5e5',
    red: '#ff3225',
    yellow: '#e6e328',
    green: '#3cab3a',
    blue: '#2e7baf'
  }
}

const ThemeProvider = (props) => {
  const { children } = props

  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
}

ThemeProvider.defaultProps = {
  children: null
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
}

export default ThemeProvider
