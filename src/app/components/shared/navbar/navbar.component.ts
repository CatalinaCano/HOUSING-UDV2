import { Component, OnInit, Injectable } from '@angular/core';
import { NavbarService } from '../../../services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // providers: [NavbarService]
})
export class NavbarComponent implements OnInit {

  constructor( public _navbar: NavbarService ) { }

  ngOnInit() {
  }

}
