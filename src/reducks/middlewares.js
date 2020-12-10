import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'

export const rootMiddlewares = [thunk, multi, promise]
