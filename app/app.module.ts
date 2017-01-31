import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './404.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [HeroService],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
