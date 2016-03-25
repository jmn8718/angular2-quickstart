import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from '../services/hero.service.ts';
import { Logger } from '../services/logger.service'
import { DashboardComponent } from '../dashboard.component/dashboard.component.ts';
import { HeroesComponent } from '../heroes.component/heroes.component.ts';
import { HeroDetailComponent } from '../hero-detail.component/hero-detail.component.ts';
import { HighlightComponent } from '../highlight.component';
import { LittleTourComponent } from '../little-tour.component';
import { HeroFormComponent } from '../hero-form/hero-form.component.ts';
import { HeroRealService } from '../toh.component/hero-observable.service.ts';
import { TohComponent } from  '../toh.component/toh.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Highlight']">Highlight</a>
      <a [routerLink]="['LittleTour']">Little Tour</a>
      <a [routerLink]="['HeroForm']">Hero Form</a>
      <a [routerLink]="['Toh']">Toh</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService,
        Logger,
        HeroRealService
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
    },
    {
        path: '/highlight',
        name: 'Highlight',
        component: HighlightComponent
    },
    {
        path: '/little_tour',
        name: 'LittleTour',
        component: LittleTourComponent
    },
    {
        path: '/hero_form',
        name: 'HeroForm',
        component: HeroFormComponent
    },
    {
        path: '/toh',
        name: 'Toh',
        component: TohComponent
    }
])
export class AppComponent {
    title = 'Tour of Heroes';
}