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
      text: 'A neurose é o esconderijo da dor inconsciente. A psicanálise abre a porta para libertar o seu eu reprimido. A repressão é um chip implantado para que você viva um falso self, criado na infância para adaptação de um ambiente hostil e insuficiente, resultando em submissão às demandas externas, sentimentos de vazio e falta de autenticidade na vida adulta. Para os pais ou tutores, a repressão é considerada zelo e proteção. Freud nunca foi a favor da falta de limite; para ele, o ponto central é o princípio da realidade. É no princípio da realidade onde o papel dos pais é ajudar a criança a transitar do princípio do prazer - "quero tudo agora" - para o princípio da realidade - "preciso esperar ou agir de outra forma". A repressão excessiva gera neurose e sofrimento psíquico, mas a falta total de limites impediria a formação do ego e do superego, tornando a convivência impossível.',
      title: 'Sobre a repressão'
    },
    {
      text: 'Os pais favorecem as crianças quando conseguem ser firmes para que elas saiam da fantasia da onipotência, mas suaves o bastante para que elas não precisem se esconder na neurose para suportar a realidade.',
      title: 'Sobre limites e acolhimento'
    }
  ];
}
