import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { portfolio } from './portfolio';
import { ItemPortfolio } from './mock-portfolio';

@Injectable()
export class PortfolioService {

  constructor() { }

  getPortfolioItems(): Observable<portfolio[]> {
      // Todo: send the message _after_ fetching the heroes
        return of(ItemPortfolio);
    }

    getPortfolioItem(id: number): Observable<portfolio> {

      return of(ItemPortfolio.find(portfolio => portfolio.id === id));
    }
}
