import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId : module.id,
    selector : 'my-dashboard',
    templateUrl : './templates/dashboard.component.tmpl.html',
    styleUrls : ['./css/dashboard.component.css']
})

export class DashboardComponent implements OnInit{

    heroes : Hero[] = [];
    constructor(private heroService : HeroService){}

    ngOnInit() : void{
        this.heroService.getHeros().then(heroes => this.heroes = heroes.slice(1,5));
    }

}