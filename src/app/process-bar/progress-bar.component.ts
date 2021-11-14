import { style } from '@angular/animations';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  //same onChanges
  @Input() set progress(val: number) {
    //validation for validation

    console.log(val);
    this._progress = val;
  }
  private _progress = 50;
  get progress() {
    return this._progress;
  }
  @Input() progressColor = 'tomato';
  @Input() backgroundColor = '#ccc';
  // luon luong contructor
  //life cycle angular: onChanges->init->..->destroy

  constructor() {}

  ngOnInit() {}
  //validate
  ngOnChanges() {}
}
