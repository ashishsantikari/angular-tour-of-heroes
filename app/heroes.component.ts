import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './app/templates/heroes.component.tmpl.html',
  styleUrls: ['./app/css/heros.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit(): void {
    this.getHeros();
  }

  title = 'Tour of Heroes';
  heros: Hero[];

  getHeros(): void {
    this.heroService.getHeros().then(result => this.heros = result);
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) { return; }
    this.heroService.create(heroName).then((hero) => {
      this.heros.push(hero);
      this.selectedHero = null;
    });
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id).then(() => {
      this.heros = this.heros.filter(h => h != hero);
      if (this.selectedHero === hero) { this.selectedHero = null };
    });
  }
}
