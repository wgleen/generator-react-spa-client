import React from 'react'
import * as reducks from '../../../reducks'
import ReduxProvider from '../Redux/ReduxProvider'
import ThemeProvider from '../Theme/ThemeProvider'
import Router from '../Router/Router'

const App = () => (
  <>
    <ReduxProvider store={reducks.store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </ReduxProvider>
  </>
)

export default App
