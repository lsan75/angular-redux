/// <reference path="../../typings/tsd.d.ts" />

import ngRedux from 'ng-redux'

/*
 *  App Modules
 */
import actions from './actions/actions.module'
import components from './components/components.module'
import config from './config'
import containers from './containers/containers.module'

angular.module('usineApp', [
  actions.name,
  components.name,
  containers.name,
  ngRedux
])
.config(config)

angular.bootstrap(document.documentElement, ['usineApp'])
