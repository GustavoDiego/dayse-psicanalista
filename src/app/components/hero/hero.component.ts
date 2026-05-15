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
  whatsappLink = 'https://wa.me/5581996656998?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.';
}
