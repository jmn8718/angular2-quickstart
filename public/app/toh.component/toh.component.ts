import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Hero}              from './hero';

// import {HeroListComponent} from './hero-list-observable.component.ts';
// import {HeroRealService} from './hero-observable.service.ts';

import {HeroListComponent} from './hero-list-promise.component.ts';
import {HeroRealService} from './hero-promise.service.ts';
@Component({
    selector: 'my-toh',
    template: `
  <h1>Tour of Heroes</h1>
  <hero-list></hero-list>
  `,
    directives:[HeroListComponent],
    providers: [
        HTTP_PROVIDERS,
        HeroRealService,
    ]
})
export class TohComponent { }
