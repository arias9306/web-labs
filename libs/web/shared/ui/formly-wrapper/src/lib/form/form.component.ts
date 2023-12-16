import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'web-labs-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {}
