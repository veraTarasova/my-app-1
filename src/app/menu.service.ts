import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { menu } from './menu';
import { ItemMenu } from './mock-menu';


@Injectable()
export class MenuService {

  constructor() { }
  getMenuItems(): Observable<menu[]> {
      return of(ItemMenu);
    }

    getMenuItem(id: number): Observable<menu> {

      return of(ItemMenu.find(menu => menu.id === id));
    }
}
