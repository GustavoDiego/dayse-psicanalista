import { Component } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-credentials',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './credentials.component.html',
  styleUrl: './credentials.component.scss'
})
export class CredentialsComponent {
  credentials = [
    {
      year: '2007',
      title: 'Início da trajetória em psicanálise',
      institution: 'Consolidação de uma escuta que alia experiência de vida e rigor técnico'
    },
    {
      year: 'Formação',
      title: 'Associação Brasileira de Estudos Psicanalíticos do Estado de Pernambuco (ABEPE-Recife)',
      institution: 'Base teórica e técnica para acompanhar o sujeito no desvelar de suas verdades inconscientes'
    },
    {
      year: 'Atuação',
      title: 'Percurso ético e sensível',
      institution: 'Foco em transformar a repetição do sofrimento em possibilidade de autoria da própria história'
    }
  ];
}
