import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience-card',
  templateUrl: './work-experience-card.component.html',
  styleUrls: ['./work-experience-card.component.css']
})
export class WorkExperienceCardComponent {
  @Input() jobTitle!: string;
  @Input() company!: string;
  @Input() duration!: string;
}
