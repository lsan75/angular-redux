/// <reference path="../../typings/tsd.d.ts" />

import rootReducer from './reducers/index'
import * as createLogger from 'redux-logger'
import thunk from 'redux-thunk'

function config($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(rootReducer, [thunk, createLogger()])
}

config.$inject = ['$ngReduxProvider']
export default config
