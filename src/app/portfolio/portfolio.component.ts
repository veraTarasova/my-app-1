import { Component, OnInit } from '@angular/core';
import { portfolio } from '../portfolio';
import { ItemPortfolio } from '../mock-portfolio';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioItems=ItemPortfolio;

  constructor() {}

  ngOnInit() {
  }

}
