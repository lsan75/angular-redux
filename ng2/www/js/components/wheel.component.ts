import { Component, ChangeDetectionStrategy, EventEmitter } from '@angular/core'

@Component({
  selector: 'wheel',
  template: `
    <i
      class="mdi mdi-memory"
      [ngClass]="{running: data.running}"
      (click)="select()"
    ></i>
  `,
  inputs: ['data'],
  outputs: ['onSelect'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WheelComponent {
  public data
  public onSelect = new EventEmitter()

  select = () => {
    this.onSelect.emit(this.data)
  }
}
