import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  input
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  delay = input<number>(0, { alias: 'appFadeInDelay' });
  direction = input<'up' | 'left' | 'right' | 'scale'>('up', { alias: 'appFadeInDirection' });

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement as HTMLElement;

    // Add base class
    element.classList.add('fade-in');

    // Add direction class
    const dir = this.direction();
    if (dir === 'left') element.classList.add('fade-in--left');
    if (dir === 'right') element.classList.add('fade-in--right');
    if (dir === 'scale') element.classList.add('fade-in--scale');

    // Add delay class
    const d = this.delay();
    if (d > 0 && d <= 6) {
      element.classList.add(`fade-in-delay-${d}`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
