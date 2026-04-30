import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-for-whom',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './for-whom.component.html',
  styleUrl: './for-whom.component.scss'
})
export class ForWhomComponent {
  items = [
    {
      icon: 'M12 2a10 10 0 110 20 10 10 0 010-20zm0 4a4 4 0 100 8 4 4 0 000-8z',
      title: 'Ansiedade e angústia',
      text: 'Quando a inquietação não tem nome e o corpo fala o que a mente silencia.'
    },
    {
      icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
      title: 'Relacionamentos e afetos',
      text: 'Dificuldades em vínculos, repetições amorosas e padrões que se perpetuam.'
    },
    {
      icon: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0',
      title: 'Crises e luto',
      text: 'Momentos de ruptura que pedem elaboração: perdas, mudanças, recomeços.'
    },
    {
      icon: 'M12 3v18m-9-9h18',
      title: 'Autoconhecimento',
      text: 'Para quem deseja se conhecer mais profundamente e viver de forma mais autêntica.'
    },
    {
      icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z',
      title: 'Bloqueios criativos',
      text: 'Quando algo trava e impede o fluxo criativo, profissional ou existencial.'
    },
    {
      icon: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
      title: 'Insônia e inquietações',
      text: 'Noites em que a mente não descansa e os pensamentos parecem não ter fim.'
    }
  ];
}
