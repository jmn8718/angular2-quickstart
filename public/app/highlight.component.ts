import { Component } from 'angular2/core';
import { HighlightDirective } from './highlight.directive';
@Component({
    selector: 'my-highlight',
    templateUrl: 'app/highlight.component.html',
    directives: [HighlightDirective]
})
export class HighlightComponent { }