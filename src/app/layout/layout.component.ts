import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormControl } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  control = new FormControl('<app-alert></app-alert>');

  constructor(
    private injector: Injector
  ) { }

  ngOnInit() {
    const element = createCustomElement(AlertComponent, {injector: this.injector});
    
  }

}
