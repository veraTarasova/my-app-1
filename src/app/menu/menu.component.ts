import { Component, OnInit } from '@angular/core';
import { menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: menu[]=[];

  selectedMenuItem: menu;

  constructor(private menuService: MenuService ) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems(): void {
   this.menuService.getMenuItems()
     .subscribe(menuItems => this.menuItems =menuItems.slice(0, 5));
  }

  onSelect(menuItems: menu): void {
  this.selectedMenuItem=menuItems;
  }

}
