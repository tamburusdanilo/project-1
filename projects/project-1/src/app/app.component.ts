import { UtilsService } from './shared/utils.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public utils: UtilsService) {

  }
  title = 'consultoria-andre-matheus';
}
