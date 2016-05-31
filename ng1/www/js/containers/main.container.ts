/// <reference path="../../../typings/tsd.d.ts" />

class MainContainer {
  public controller
  public template
  constructor() {
    this.controller = MainController
    this.template = `
      <section>

        <usine
          on-action="$ctrl.action(action)"
          running="$ctrl.running"
        ></usine>

        <wheel
          ng-repeat="wheel in $ctrl.wheels"
          data="wheel"
          on-select="$ctrl.select(item)"
        ></wheel>

      </section>

    `
  }
}

class MainController {
  private disconnect
  public wheels = []
  public running

  constructor(
    private $ngRedux,
    private UsineActions
  ) {}

  $onInit() {
    this.disconnect = this.$ngRedux.connect(this.mapStateToThis)(this)
    this.$ngRedux.dispatch(this.UsineActions.initialize())
  }

  $onDestroy() {
    this.disconnect()
  }

  public select = item => {
    this.$ngRedux.dispatch(<any>this.UsineActions.select(item))
  }

  public action = action => {
    this.$ngRedux.dispatch(<any>this.UsineActions.action(action))
  }

  private mapStateToThis = state => {
    return {
      running: state.usineReducer.running,
      wheels: state.usineReducer.wheels
    }
  }

}

MainController.$inject = ['$ngRedux', 'UsineActions']
export default MainContainer
