import { Component, ChangeDetectionStrategy, EventEmitter } from '@angular/core'

@Component({
  selector: 'usine',
  template: `
    <article>
      <i class="mdi mdi-factory"></i>
      <i class="mdi mdi-plus-circle" (click)="action('ADD')"></i>
      <i class="mdi mdi-minus-circle" (click)="action('REMOVE')"></i>
      <i
        class="mdi"
        (click)="action('RUN')"
        [ngClass]="{'mdi-play-circle': !running, 'mdi-stop-circle': running}"
      ></i>
    </article>
  `,
  inputs: ['running'],
  outputs: ['onAction'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class UsineComponent {

  public running
  public onAction = new EventEmitter()

  public action = type => {
    this.onAction.emit(type)
  }
}
