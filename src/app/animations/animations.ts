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

export const fadeInAnimation = trigger('fadeIn', [
  transition('* => *', [
    query('[animate-me]', [
      style({ opacity: 0 }),
      stagger(500, [animate('2000ms', style({ opacity: 1 }))]),
    ], { optional: true }),
  ]),
]);

export const blurInAnimation = trigger('blurIn', [
  state('blur', style({ filter: 'blur(2px)' })),
  state('focus', style({ filter: 'blur(0)' })),
  transition('blur => focus', animate('1000ms ease-out')),
  transition('focus => blur', animate('1000ms ease-in')),
]);

