import {trigger, transition, style, animate, query, stagger, state} from '@angular/animations';

export const fadeInFromLeft = trigger('fadeInFromLeft', [
  transition(':enter', [
    style({opacity: 0, transform: 'translateX(-100%)'}),
    animate('1500ms ease-out', style({opacity: 1, transform: 'translateX(0)'}))
  ])
]);

export const fadeInFromRight = trigger('fadeInFromRight', [
  transition(':enter', [
    style({opacity: 0, transform: 'translateX(100%)'}),
    animate('1500ms ease-out', style({opacity: 1, transform: 'translateX(0)'}))
  ])
]);

export const fadeInFromRightDelayed = trigger('fadeInFromRightDelayed', [
  transition(':enter', [
    style({opacity: 0, transform: 'translateX(100%)'}),
    animate('1500ms 400ms ease-out', style({opacity: 1, transform: 'translateX(0)'}))
  ])
]);
