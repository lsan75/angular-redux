/// <reference path="../../../typings/tsd.d.ts" />

import MainContainer from './main.container'

export default angular.module('containers.module', [])
  .component('mainContainer', new MainContainer())
