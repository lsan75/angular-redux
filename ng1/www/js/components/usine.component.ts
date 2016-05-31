/// <reference path="../../../typings/tsd.d.ts" />

class UsineComponent {
  public bindings
  public template

  constructor() {
    this.bindings = {
      running: '<',
      onAction: '&'
    }
    this.template = `
      <article>
        <i class="mdi mdi-factory"></i>
        <i class="mdi mdi-plus-circle" ng-click="$ctrl.onAction({action: 'ADD'})"></i>
        <i class="mdi mdi-minus-circle" ng-click="$ctrl.onAction({action: 'REMOVE'})"></i>
        <i
          class="mdi"
          ng-click="$ctrl.onAction({action: 'RUN'})"
          ng-class="{'mdi-play-circle': !$ctrl.running, 'mdi-stop-circle': $ctrl.running}"
        ></i>
      </article>
    `
  }
}

export default UsineComponent
