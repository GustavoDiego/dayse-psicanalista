import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ApproachComponent } from './components/approach/approach.component';
import { ForWhomComponent } from './components/for-whom/for-whom.component';
import { ReflectionsComponent } from './components/reflections/reflections.component';
import { PernambucoComponent } from './components/pernambuco/pernambuco.component';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ApproachComponent,
    ForWhomComponent,
    ReflectionsComponent,
    PernambucoComponent,
    CredentialsComponent,
    CtaComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'Psicanalista';
}
