import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from './alert/alert.module';
import { RenderAlertComponent } from './render-alert/render-alert.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RenderAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
