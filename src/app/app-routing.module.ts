import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {PortfolioComponent } from './portfolio/portfolio.component';
import {NotFoundComponent } from './not-found/not-found.component';
import {ContactsComponent } from './contacts/contacts.component';
import { DetailItemPortfilioComponent } from './detail-item-portfilio/detail-item-portfilio.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'detail/:id', component: DetailItemPortfilioComponent },
  { path: 'about', component: AboutComponent  },
  { path: 'portfolio', component: PortfolioComponent  },
  { path: 'contacts', component: ContactsComponent  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
