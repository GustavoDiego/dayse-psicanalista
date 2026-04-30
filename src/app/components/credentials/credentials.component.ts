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
      year: '2024',
      title: 'Especialização em Psicanálise Clínica',
      institution: 'Instituto de Psicanálise'
    },
    {
      year: '2022',
      title: 'Formação em Psicologia Clínica',
      institution: 'Universidade Federal de Pernambuco'
    },
    {
      year: '2021',
      title: 'Curso de Extensão em Escuta Analítica',
      institution: 'Sociedade Psicanalítica'
    },
    {
      year: '2020',
      title: 'Graduação em Psicologia',
      institution: 'Universidade Federal de Pernambuco'
    }
  ];
}
