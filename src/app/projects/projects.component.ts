import {Component, OnInit, Type} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  currentProject = 0;
  projects = [
    {
      picturePath: 'assets/hackathon.png',
      topic: 'Hackathon',
      text: 'Hackathon was an event where I, together with couple other 3rd year student, created coding puzzles for computer science students.',
      url: 'https://github.com/KishDelish/hkrhackathon_backend'
    },
    {
      picturePath: 'assets/my_page.png',
      text: 'A portfolio in a form of a webpage. A quick introduction to me and showing some of the works I\'ve done.',
      topic: 'Portfolio',
      url: 'https://github.com/lekatehdas/myWebPage'
    },
    {
      picturePath: 'path/to/your/image3.jpg',
      text: 'I developed an Android app to gather sensor data from android devices.',
      topic: 'Random Generator',
      url: 'https://github.com/lekatehdas/thesis_project'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  previousProject(): void {
    this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
  }

  nextProject(): void {
    this.currentProject = (this.currentProject + 1) % this.projects.length;
  }

}
