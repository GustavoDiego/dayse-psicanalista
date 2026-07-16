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
      text: 'A neurose é o esconderijo da dor inconsciente. A psicanálise abre a porta para libertar o seu eu reprimido.',
      title: 'Sobre a repressão',
      showTitle: false
    },
    {
      text: 'A repressão é um chip implantado para que você viva um falso self, criado na infância para adaptação de um ambiente hostil e insuficiente.',
      title: 'Sobre a repressão',
      showTitle: false
    },
    {
      text: 'Isso resulta em submissão às demandas externas, sentimentos de vazio e falta de autenticidade na vida adulta.',
      title: 'Sobre a repressão',
      showTitle: false
    },
    {
      text: 'Para pais ou tutores, a repressão é considerada zelo e proteção. Mas Freud ensina: o ponto central é o Princípio da Realidade.',
      title: 'Sobre limites e acolhimento',
      showTitle: false
    },
    {
      text: 'O papel dos pais é ajudar a criança a transitar do Princípio do Prazer (quero tudo agora) em o Princípio da Realidade (preciso esperar).',
      title: 'Sobre limites e acolhimento',
      showTitle: false
    },
    {
      text: 'A repressão excessiva gera neurose, mas a falta de limites impediria a formação do Ego, tornando a convivência impossível.',
      title: 'Sobre limites e acolhimento',
      showTitle: false
    }
  ];
}
