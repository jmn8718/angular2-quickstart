import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from '../services/hero.service.ts';
import { Logger } from '../services/logger.service'
import { DashboardComponent } from '../dashboard.component/dashboard.component.ts';
import { HeroesComponent } from '../hero/heroes.component/heroes.component.ts';
import { HeroDetailComponent } from '../hero/hero-detail.component/hero-detail.component.ts';
import { HighlightComponent } from '../highlight.component';
import { LittleTourComponent } from '../little-tour.component';
import { HeroFormComponent } from '../hero/hero-form/hero-form.component.ts';
import { HeroRealService } from '../toh.component/hero-observable.service.ts';
import { TohComponent } from  '../toh.component/toh.component';
import { WikiComponent } from '../wiki/wiki.component';
import { WikiSmartComponent } from '../wiki/wiki-smart.component';

import { HeroesService } from '../hero-editor/heroes.service';
import { HeroesListComponent } from '../hero-editor/hero-list.component';
import { HeroBirthdayComponent } from '../hero/hero-birthday.component/hero-birthday1.component';
import { HeroBirthday2Component } from '../hero/hero-birthday.component/hero-birthday2.component';
import { PowerBoosterComponent } from '../power-booster/power-booster.component';
import { PowerBoostCalculatorComponent } from '../power-booster/power-boost-calculator.component';
import { FlyingHeroesComponent, FlyingHeroesImpureComponent } from '../hero/flying-heroes.component/flying-heroes.component';
import { HeroAsyncMessageComponent } from '../hero/hero-async.component/hero-async.component';

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
      <a [routerLink]="['HeroEditor']">Hero Editor</a>
      <a [routerLink]="['HeroBirthday']">Hero Birthday</a>
      <a [routerLink]="['HeroBirthday2']">Hero Birthday2</a>
      <a [routerLink]="['FlyingHeroes']">Flying heroes</a>
      <a [routerLink]="['FlyingHeroesImpure']">Flying heroes impure</a>
      <a [routerLink]="['HeroAsync']">Hero Async</a>
      <a [routerLink]="['Toh']">Toh</a>
      <a [routerLink]="['Wiki']">Wiki</a>
      <a [routerLink]="['WikiSmart']">WikiSmart</a>
      <a [routerLink]="['PowerBooster']">PowerBooster</a>
      <a [routerLink]="['PowerBoosterCalculator']">PowerBoosterCalculator</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app/app.component/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService,
        HeroesService,
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
        path: '/hero_editor',
        name: 'HeroEditor',
        component: HeroesListComponent
    },
    {
        path: '/hero_birthday',
        name: 'HeroBirthday',
        component: HeroBirthdayComponent
    },
    {
        path: '/hero_birthday2',
        name: 'HeroBirthday2',
        component: HeroBirthday2Component
    },
    {
        path: '/flying_heroes',
        name: 'FlyingHeroes',
        component: FlyingHeroesComponent
    },
    {
        path: '/flying_heroes_impure',
        name: 'FlyingHeroesImpure',
        component: FlyingHeroesImpureComponent
    },
    {
        path: '/hero_async',
        name: 'HeroAsync',
        component: HeroAsyncMessageComponent
    },
    {
        path: '/toh',
        name: 'Toh',
        component: TohComponent
    },
    {
        path: '/wiki',
        name: 'Wiki',
        component: WikiComponent
    },
    {
        path: '/wikismart',
        name: 'WikiSmart',
        component: WikiSmartComponent
    },
    {
        path: '/power_booster',
        name: 'PowerBooster',
        component: PowerBoosterComponent
    },
    {
        path: '/power_booster_calculator',
        name: 'PowerBoosterCalculator',
        component: PowerBoostCalculatorComponent
    }
])
export class AppComponent {
    title = 'Tour of Heroes';
}