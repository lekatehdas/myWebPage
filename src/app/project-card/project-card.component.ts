import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [
    trigger('zoom', [
      state('in', style({ transform: 'scale(1)' })),
      state('out', style({ transform: 'scale(1.025)' })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ]),
    trigger('colorChange', [
      state('in', style({ color: '#fff' })),
      state('out', style({ color: 'var(--contrast)' })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ]),
    trigger('textMove', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(10px)' })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ])
  ]
})
export class ProjectCardComponent {
  @Input() picturePath!: string;
  @Input() text!: string;
  @Input() url!: string;
  @Input() topic!: string;

  zoom = 'in';

  constructor(private router: Router) {}

  zoomIn(): void {
    this.zoom = 'out';
  }

  zoomOut(): void {
    this.zoom = 'in';
  }

  navigateToProject(): void {
    window.open(this.url, '_blank');
  }
}
