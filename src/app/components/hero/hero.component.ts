import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  whatsappLink = 'https://wa.me/5581996656998?text=Ol%C3%A1!%20Gostaria%20de%20entender%20como%20funcionam%20as%20sess%C3%B5es%20de%20psican%C3%A1lise%20com%20voc%C3%AA';
}
