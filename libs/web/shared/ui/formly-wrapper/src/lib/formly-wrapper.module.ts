import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  imports: [ReactiveFormsModule, FormlyModule.forRoot(), FormlyMaterialModule],
})
export class FormlyWrapperModule {}
