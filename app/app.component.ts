import {Component} from '@angular/core';
import {HeroesComponent} from './heroes.component';

@Component({
  moduleId : module.id,
  selector : 'my-app',
  templateUrl : './templates/app.component.tmpl.html',
  styleUrls : ['./css/app.component.css']
})

export class AppComponent{
  title = "Tour of Heroes!!";
}