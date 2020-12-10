import React from 'react'
import * as reducks from '../../../reducks'
import ReduxProvider from '../Redux/ReduxProvider'
import Router from '../Router/Router'

const App = () => (
  <>
    <ReduxProvider store={reducks.store}>
      <Router />
    </ReduxProvider>
  </>
)

export default App
