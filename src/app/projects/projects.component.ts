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
      text: 'Hackathon was an event where I, together with couple other 3rd year student,  created coding puzzles for computer science students. ',
      url: 'https://github.com/KishDelish/hkrhackathon_backend'
    },
    {
      picturePath: 'assets/my_page.png',
      text: 'Your project 2 description',
      topic: 'Hackathon',
      url: 'https://project2.example.com'
    },
    {
      picturePath: 'path/to/your/image3.jpg',
      text: 'Your project 3 description',
      topic: 'Hackathon',
      url: 'https://project3.example.com'
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
