import {Component} from 'angular2/core';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';

@Component({
    selector: 'power-booster',
    template: `
    <h2>Power Booster</h2>
    <p>2^10 -> {{2 | exponentialStrength: 10}}</p>
    <p>
      Super power boost: {{2 | exponentialStrength: 10}}
    </p>
  `,
    pipes: [ExponentialStrengthPipe]
})
export class PowerBoosterComponent { }
