import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebSharedUiHeaderComponent } from '@web-labs/web/shared/ui/header';

@Component({
  standalone: true,
  imports: [RouterModule, WebSharedUiHeaderComponent],
  selector: 'labs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-labs';
}
