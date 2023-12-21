import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormlyWrapperModule } from '@web-labs/formly-wrapper';
import { CardComponent } from '@web-labs/web/shared/ui/card';
import { WebSharedUiHeaderComponent } from '@web-labs/web/shared/ui/header';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    WebSharedUiHeaderComponent,
    CardComponent,
    FormlyWrapperModule,
  ],
  selector: 'labs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-labs';
}
