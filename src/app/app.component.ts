import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playTime';

  selectedValue = 'label';
  otherValues = [
    'label1', 'label2', 'label3'
  ];
}
