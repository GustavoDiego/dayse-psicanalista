import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
    selector: 'app-introduction',
    standalone: true,
    imports: [FadeInDirective],
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.scss'
})
export class IntroductionComponent { }
