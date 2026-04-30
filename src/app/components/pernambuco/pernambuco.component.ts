import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-pernambuco',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './pernambuco.component.html',
  styleUrl: './pernambuco.component.scss'
})
export class PernambucoComponent {}
