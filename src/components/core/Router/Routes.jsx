import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../../../config/routes'

const Home = lazy(() => import('../../pages/Home/Home'))

const Routes = () => (
  <Suspense fallback="Loading">
    <Switch>
      <Route exact path={routes.root.path} component={Home} />
    </Switch>
  </Suspense>
)

export default Routes
