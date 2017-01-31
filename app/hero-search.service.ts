import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './Hero';



@Injectable()
export class HeroSearchService {
    constructor(private http: Http) { }
    search(term: String): Observable<Hero[]> {
        return this.http.get(`app/heroes/?name=${term}`)
            .map(res => res.json().data as Hero[]);
    }
}
