import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="alert alert-{{type}} role="alert">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() type = 'primary';

  constructor() { }

  ngOnInit() {
  }

}
