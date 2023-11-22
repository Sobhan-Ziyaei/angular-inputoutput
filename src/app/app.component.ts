import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-inputoutput';
  ratings: number[] = [3.5, 3, 4.5, 1.5, 2];
}
