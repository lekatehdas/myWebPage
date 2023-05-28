import {Component, OnInit, Type} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', './projects.mobile.css', './projects.tablet.css']
})
export class ProjectsComponent implements OnInit {
  currentProject = 0;
  animationClass = '';
  timeOut = 400
  projects = [
    {
      picturePath: 'assets/hackathon.png',
      topic: 'Hackathon',
      text: 'Hackathon was an event where I, together with couple other 3rd year students, created coding puzzles for CS students.',
      url: 'https://github.com/KishDelish/hkrhackathon_backend'
    },
    {
      picturePath: 'assets/my_page.png',
      text: 'A portfolio in a form of a webpage. A quick introduction to me and showing some of the works I\'ve done.',
      topic: 'Portfolio',
      url: 'https://github.com/lekatehdas/myWebPage'
    },
    {
      picturePath: 'assets/random_generator.png',
      text: 'I developed an Android app to gather sensor and other user inputted data from android devices.',
      topic: 'Random Data Gatherer',
      url: 'https://github.com/lekatehdas/thesis_project'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  previousProject(): void {
    this.animationClass = 'fade-out';
    setTimeout(() => {
      this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
      this.animationClass = 'fade-in';
      setTimeout(() => this.animationClass = '', this.timeOut);
    }, this.timeOut);
  }

  nextProject(): void {
    this.animationClass = 'fade-out';
    setTimeout(() => {
      this.currentProject = (this.currentProject + 1) % this.projects.length;
      this.animationClass = 'fade-in';
      setTimeout(() => this.animationClass = '', this.timeOut);
    }, this.timeOut);
  }
}
