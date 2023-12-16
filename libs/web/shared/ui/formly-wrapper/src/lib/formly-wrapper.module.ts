import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [ReactiveFormsModule, FormlyModule.forRoot(), FormlyMaterialModule],
  declarations: [FormComponent],
  exports: [FormComponent],
})
export class FormlyWrapperModule {}
