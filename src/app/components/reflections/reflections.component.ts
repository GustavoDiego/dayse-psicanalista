import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-reflections',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './reflections.component.html',
  styleUrl: './reflections.component.scss'
})
export class ReflectionsComponent {
  reflections = [
    {
      text: 'O inconsciente não é um lugar escuro a ser temido — é um território vasto de possibilidades, onde mora tudo aquilo que ainda não tivemos coragem de nomear.',
      title: 'Sobre o inconsciente'
    },
    {
      text: 'Escutar-se é um ato revolucionário. Numa cultura que nos ensina a silenciar a dor, escolher falar sobre ela é o primeiro passo para a liberdade.',
      title: 'Sobre a escuta'
    },
    {
      text: 'A análise não é consertar o que está quebrado. É descobrir que, mesmo nas fraturas, há beleza — e que é justamente por elas que a luz entra.',
      title: 'Sobre o processo'
    }
  ];
}
