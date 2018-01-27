import { Component } from '@angular/core';
import { SharedService, NavbarService } from './services/service.index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Housing-UD';

   constructor (public _shared: SharedService) {}
}
