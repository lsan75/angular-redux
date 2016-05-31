/// <reference path="../../../typings/tsd.d.ts" />

class WheelComponent {
  public bindings
  public template

  constructor() {
    this.bindings = {
      data: '<',
      onSelect: '&'
    }
    this.template = `
      <i
        class="mdi mdi-memory"
        ng-class="{running: $ctrl.data.running}"
        ng-click="$ctrl.onSelect({item: $ctrl.data})"
      ></i>
    `
  }
}

export default WheelComponent
