import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    getHeros(): Promise<Hero[]> {
        //return Promise.resolve(HEROES);
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(HEROES), 3000);
        });
    }

}