import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('scrollableElement') scrollableElement!: ElementRef;
  isBlurred = false;
  currentSkill = 0;
  skillsPre = 'Here are skills that I have become familiar with throughout my work life and education'
  skills = [
    {
      title: 'Programming Languages',
      items: [
        {name: 'Python', icon: 'assets/icons/python.svg'},
        {name: 'Typescript', icon: 'assets/icons/typescript.svg'},
        {name: 'JavaScript', icon: 'assets/icons/javascript.svg'},
        {name: 'Java', icon: 'assets/icons/java.svg'},
        {name: 'Kotlin', icon: 'assets/icons/kotlin.svg'}
      ]
    },
    {
      title: 'Web Development',
      items: [
        {name: 'HTML', icon: 'assets/icons/html.svg'},
        {name: 'CSS', icon: 'assets/icons/css3.svg'},
        {name: 'Angular', icon: 'assets/icons/angularjs.svg'},
        {name: 'Node.js', icon: 'assets/icons/nodejs.svg'},
        {name: 'Express.js', icon: 'assets/icons/express-js.svg'},
        {name: 'Django', icon: 'assets/icons/django.svg'}
      ]
    },
    {
      title: 'Databases',
      items: [
        {name: 'MySQL', icon: 'assets/icons/mysql.svg'},
        {name: 'MongoDB', icon: 'assets/icons/mongodb.svg'},
        {name: 'Firebase', icon: 'assets/icons/firebase.svg'},
      ]
    },
    {
      title: 'Big Data and Machine Learning',
      items: [
        {name: 'TensorFlow', icon: 'assets/icons/tensorflow.svg'},
        {name: 'Hadoop', icon: 'assets/icons/hadoop.svg'},
        {name: 'Spark', icon: 'assets/icons/apache-spark.svg'},
        {name: 'Scikit-learn', icon: 'assets/icons/scikit-learn.svg'}
      ]
    },
    {
      title: 'Software Engineering',
      items: [
        {name: 'Agile Methodologies', icon: 'assets/icons/agile.png'},
        {name: 'JIRA', icon: 'assets/icons/jira.svg'},
        {name: 'Version control (GIT)', icon: 'assets/icons/github.svg'},
        {name: 'Testing', icon: 'assets/icons/test-passed.png'},
        {name: 'Design Patterns', icon: 'assets/icons/design.png'},
      ]
    }
  ];

  constructor() {
  }

  ngAfterViewInit() {
    this.scrollableElement.nativeElement.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault();

      if (event.deltaY > 0) {
        this.currentSkill = this.currentSkill < this.skills.length - 1 ? this.currentSkill + 1 : 0;
      } else {
        this.currentSkill = this.currentSkill > 0 ? this.currentSkill - 1 : this.skills.length - 1;
      }
    })
  }

  setCurrentSkill(index: number) {
    this.currentSkill = index;
  }
}
