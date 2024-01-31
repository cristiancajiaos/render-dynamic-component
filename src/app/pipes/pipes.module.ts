import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeStrPipe } from './sanitize-str.pipe';



@NgModule({
  declarations: [SanitizeStrPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SanitizeStrPipe
  ]
})
export class PipesModule { }
