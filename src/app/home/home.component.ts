import { Component, OnInit } from '@angular/core';
import { portfolio } from '../portfolio';
import { PortfolioService } from '../portfolio.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    portfolioItems: portfolio[]=[];

    selectedPortfolioItems:portfolio;

  constructor(private portfolioService: PortfolioService ) { }

  ngOnInit() {
    this.getPortfolioItems();
  }

  getPortfolioItems(): void {
   this.portfolioService.getPortfolioItems()
     .subscribe(portfolioItems => this.portfolioItems = portfolioItems.slice(1, 4));
 }

 onSelect(portfolioItems: portfolio): void {
   this.selectedPortfolioItems = portfolioItems;
 }



}
