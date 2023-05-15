import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css', './skill-card.mobile.css']
})
export class SkillCardComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() icon: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
