import {Injectable} from 'angular2/core';
import {Hero}       from '../hero/hero';
import {HEROES}     from './mock-heroes';
import {Logger}     from '../services/logger.service';

@Injectable()
export class HeroService {
    constructor(private _logger: Logger) {  }
    
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}