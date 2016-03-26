import {Component} from 'angular2/core'

@Component({
    selector: 'hero-birthday',
    template: `
        <p>The hero's birthday is {{ birthday | date }}</p>
        <p>The chained hero's birthday is {{  birthday | date:'fullDate' | uppercase }}</p>
        <p>The chained hero's birthday is {{ ( birthday | date:'fullDate' ) | uppercase }}</p>
    `
})
export class HeroBirthdayComponent {
    birthday = new Date(1987,1,8); // April 15, 1988
}
