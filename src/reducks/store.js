import { configureStore } from '@reduxjs/toolkit'
import * as reducers from './reducers'
import * as middlewares from './middlewares'

const store = configureStore({
  reducer: reducers.rootReducer,
  middlewares: middlewares.rootMiddlewares
})

export default store
