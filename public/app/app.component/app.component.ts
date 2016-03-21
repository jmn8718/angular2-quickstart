import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from './../services/hero.service.ts';
import { DashboardComponent } from './../dashboard.component/dashboard.component.ts';
import { HeroesComponent } from './../heroes.component/heroes.component.ts';
import { HeroDetailComponent } from './../hero-detail.component/hero-detail.component.ts';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])
export class AppComponent {
    title = 'Tour of Heroes';
}