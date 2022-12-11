import { Component, OnInit } from '@angular/core';
interface MenuItem {
  ruta: string;
  texto: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  menu: MenuItem[] = [
    { ruta: '/employees/all', texto: 'Employees' },
    { ruta: '/employees/byId', texto: 'Employees By ID' },


  ];


}
