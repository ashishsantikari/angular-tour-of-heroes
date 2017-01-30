import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app/templates/app.component.tmpl.html',
  styleUrls: ['./app/css/app.component.css'],
  providers : [HeroService]
})
export class HeroesComponent implements OnInit{

  constructor(private heroService : HeroService){
  }

  ngOnInit() : void {
    this.getHeros();
  }

  title = 'Tour of Heroes';
  heros: Hero[];  

  getHeros() : void {
    this.heroService.getHeros().then(result => this.heros = result);
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
