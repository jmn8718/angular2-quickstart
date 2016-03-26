import {Flyer} from './heroes';
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
    transform(allHeroes:Flyer[]) {
        return allHeroes.filter(hero => hero.canFly);
    }
}
/////// Identical except for the pure flag
@Pipe({
    name: 'flyingHeroes',
    pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}