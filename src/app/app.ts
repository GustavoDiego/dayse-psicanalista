import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ReflectionsComponent } from './components/reflections/reflections.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ReflectionsComponent,
    CtaComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'Dayse Silva';
  whatsappLink = 'https://wa.me/5581996656998?text=Ol%C3%A1!%20Gostaria%20de%20entender%20como%20funcionam%20as%20sess%C3%B5es%20de%20psican%C3%A1lise%20com%20voc%C3%AA';
}
