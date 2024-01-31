import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormControl } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-render-alert',
  templateUrl: './render-alert.component.html',
  styleUrls: ['./render-alert.component.scss']
})
export class RenderAlertComponent implements OnInit {

  control = new FormControl('<app-alert></app-alert>');

  constructor(
    private injector: Injector
  ) { }

  ngOnInit() {
    const element = createCustomElement(AlertComponent, {injector: this.injector});
    customElements.define('app-alert', element);
  }

}
