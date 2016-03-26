import {Component}              from 'angular2/core';
import {FlyingHeroesPipe,
    FlyingHeroesImpurePipe } from './flying-heroes.pipe';
import {HEROES}                 from './heroes';

@Component({
    selector: 'flying-heroes',
    templateUrl: './app/hero/flying-heroes.component/flying-heroes.component.html',
    styles: ['#flyers, #all {font-style: italic}'],
    pipes: [FlyingHeroesPipe]
})
export class FlyingHeroesComponent {
    heroes:any[] = [];
    canFly = true;
    mutate = true;
    title = 'Flying Heroes (pure pipe)';

    constructor() { this.reset(); }

    addHero(name:string) {
        name = name.trim();
        if (!name) { return; }
        let hero = {name, canFly: this.canFly};
        if (this.mutate) {
            // Pure pipe won't update display because heroes array reference is unchanged
            // Impure pipe will display
            this.heroes.push(hero)
        } else {
            // Pipe updates display because heroes array is a new object
            this.heroes = this.heroes.concat(hero);
        }
    }

    reset() { this.heroes = HEROES.slice(); }
}

////// Identical except for impure pipe //////
@Component({
    selector: 'flying-heroes-impure',
    templateUrl: './app/hero/flying-heroes.component/flying-heroes.component.html',
    styles: ['.flyers, .all {font-style: italic}'],
    pipes: [FlyingHeroesImpurePipe]
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
    title = 'Flying Heroes (impure pipe)';
}