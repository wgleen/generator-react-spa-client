import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextStyled = styled.div`
  white-space: pre-wrap;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.typography.fontFamilyPrimary};
  font-weight: ${(props) =>
    props.theme.typography[props.fontWeigth] ||
    props.theme.typography.fontWeightPrimary};
  line-height: ${(props) =>
    props.lineHeight || props.theme.typography.lineHeight};
  text-align: ${(props) => props.textAlign || props.theme.typography.textAlign};
  ${(props) => props.underline && `text-decoration: ${props.underline}`};
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.gray};
  margin: ${(props) => (props.margin ? `${props.margin}px` : '0')};
`

TextStyled.propTypes = {
  theme: PropTypes.shape({
    typography: PropTypes.shape({
      fontFamily: PropTypes.string,
      fontWeightPrimary: PropTypes.string
    })
  }),
  fontWeigth: PropTypes.string,
  lineHeight: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string
}

const Text = (props) => {
  const { children, fontWeigth, color, margin } = props

  return (
    <TextStyled fontWeigth={fontWeigth} color={color} margin={margin}>
      {children}
    </TextStyled>
  )
}

Text.defaultProps = {
  children: null,
  fontWeigth: null,
  color: null,
  margin: null
}

Text.propTypes = {
  children: PropTypes.string,
  fontWeigth: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string
}

export default Text
