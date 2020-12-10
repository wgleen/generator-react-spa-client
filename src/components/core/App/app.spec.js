import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render correctly', () => {
    expect(render(<App />)).toMatchSnapshot()
  })

  it('should render a text equal to "Hello World"', () => {
    render(<App />)

    expect(screen.getByText('Hello World')).toBeDefined()
  })
})
