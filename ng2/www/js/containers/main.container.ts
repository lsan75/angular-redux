import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgRedux } from 'ng2-redux'

// Actions
import UsineActions from '../actions/usine.actions'

// Containers
import UsineComponent from '../components/usine.component'
import WheelComponent from '../components/wheel.component'

@Component({
  selector: 'main-container',
  template: `

    <section>

      <usine
        (onAction)="action($event)"
        [running]="usine.running"
      ></usine>

      <wheel
        *ngFor="let wheel of usine.wheels"
        [data]="wheel"
        (onSelect)="select($event)"
      ></wheel>

    </section>

  `,
  directives: [UsineComponent, WheelComponent],
  providers: [UsineActions]
})

export default class MainContainer implements OnInit, OnDestroy {
  private disconnect
  public usine

  constructor(
    private ngRedux: NgRedux<any>,
    private usineActions: UsineActions
  ) {}

  ngOnInit() {
    this.disconnect = this.ngRedux.connect(this.mapStateToThis, () => {})(this)
    this.ngRedux.dispatch(this.usineActions.initialize())
  }

  ngOnDestroy() {
    this.disconnect()
  }

  public select = item => {
    this.ngRedux.dispatch(this.usineActions.select(item))
  }

  public action = event => {
    this.ngRedux.dispatch(this.usineActions.action(event))
  }

  private mapStateToThis = state => {
    return {
      usine: state.usineReducer
    }
  }
}
