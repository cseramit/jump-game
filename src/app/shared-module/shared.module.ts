import { NgModule } from '@angular/core';
import { BoolOnlyDirective } from './boolean.directive';
import { NumbersOnlyDirective } from './number.directive';

@NgModule({
  declarations: [
    BoolOnlyDirective,
    NumbersOnlyDirective
  ],
  exports: [
    BoolOnlyDirective,
    NumbersOnlyDirective
  ]
})
export class SharedModule { }
