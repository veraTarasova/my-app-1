import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PortfolioService } from './portfolio.service';
import { MenuService } from './menu.service';
import { DetailItemPortfilioComponent } from './detail-item-portfilio/detail-item-portfilio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PortfolioComponent,
    AboutComponent,
    HomeComponent,
    DetailItemPortfilioComponent,
    ContactsComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyCMMj8WtwLZ08yFnloqXmu52zHKmO04XyI'
    })
  ],
  providers: [PortfolioService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
