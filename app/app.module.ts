import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {PageNotFoundComponent} from './404.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
  {
    path : 'heroes',
    component : HeroesComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : '',
    redirectTo : 'dashboard',
    pathMatch : 'full'
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
])],
  declarations: [ AppComponent , HeroDetailComponent, HeroesComponent, DashboardComponent, PageNotFoundComponent],
  bootstrap:    [ AppComponent]
})

export class AppModule { }
