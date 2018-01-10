import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InplaceInputComponent } from './inplace-input/inplace-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InplaceInputComponent],
  exports: [
    InplaceInputComponent
  ]
})
export class InplaceInputModule { }
