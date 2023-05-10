import { Component, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() picturePath!: string;
  @Input() text!: string;
  @Input() url!: string;
  @Input() topic!: string;

  isHovered = false;

  @HostBinding('style.transform') scale = 'scale(1)';

  constructor(private router: Router) {}

  zoomIn(): void {
    this.scale = 'scale(1.05)';
    this.isHovered = true;
  }

  zoomOut(): void {
    this.scale = 'scale(1)';
    this.isHovered = false;
  }

  navigateToProject(): void {
    window.open(this.url, '_blank');
  }
}
