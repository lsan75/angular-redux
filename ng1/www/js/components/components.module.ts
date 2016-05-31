/// <reference path="../../../typings/tsd.d.ts" />

import UsineComponent from './usine.component'
import WheelComponent from './wheel.component'

export default angular.module('components.module', [])
  .component('usine', new UsineComponent())
  .component('wheel', new WheelComponent())
