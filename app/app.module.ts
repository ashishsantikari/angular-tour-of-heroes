import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './404.component';
import { HeroService } from './hero.service';
import {HeroSearchService} from './hero-search.service';
import {HeroSearchComponent} from './hero-search.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule],
  providers: [HeroService, HeroSearchService],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, PageNotFoundComponent, HeroSearchComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
