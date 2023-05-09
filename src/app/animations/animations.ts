import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

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
    query('.skill', [
      style({opacity: 0}),
      stagger(100, [animate('500ms', style({opacity: 1}))]),
    ], {optional: true}),
  ]),
]);
