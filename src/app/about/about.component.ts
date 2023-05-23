import { Component, OnInit } from '@angular/core';
import { fadeInFromLeft, fadeInFromRight, fadeInFromRightDelayed } from '../animations/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', "./about.mobile.css", './about.tablet.css'],
  animations: [fadeInFromLeft, fadeInFromRight, fadeInFromRightDelayed]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
