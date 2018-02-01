import { Component, OnInit, Input } from '@angular/core';
import { portfolio } from '../portfolio';
import { PortfolioService }  from '../portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-item-portfilio',
  templateUrl: './detail-item-portfilio.component.html',
  styleUrls: ['./detail-item-portfilio.component.css']
})
export class DetailItemPortfilioComponent implements OnInit {

      @Input() portfolioItems: portfolio;

  constructor(
  private route: ActivatedRoute,
  private portfolioService: PortfolioService,
  private location: Location
) {}

    ngOnInit(): void {
    this.getPortfolioItem();
    }

    getPortfolioItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.portfolioService.getPortfolioItem(id)
      .subscribe(portfolioItems => this.portfolioItems = portfolioItems);
    }

    goBack(): void {
      this.location.back();
}

}
