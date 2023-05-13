import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('blurInOut', [
      transition(':enter', [
        style({ filter: 'blur(5px)' }),
        animate('0.5s 500ms ease-in-out', style({ filter: 'blur(0px)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ filter: 'blur(5px)' }))
      ])
    ])
  ]
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('scrollableElement') scrollableElement!: ElementRef;
  isBlurred = false;
  currentSkill = 0;
  skillsPre = 'My skills include proficiency in multiple programming languages, as well as experience in web development,\n' +
    '          databases, big data and machine learning technologies, software engineering, testing, and version control. I\'m\n' +
    '          eager to apply these skills to real-world applications and tackle the challenges that come with them. I\'m\n' +
    '          particularly interested in computer security and testing.'
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
    if (!this.isBlurred) {
      this.isBlurred = true;
      setTimeout(() => {
        if (event.deltaY > 0) {
          this.currentSkill = this.currentSkill < this.skills.length - 1 ? this.currentSkill + 1 : 0;
        } else {
          this.currentSkill = this.currentSkill > 0 ? this.currentSkill - 1 : this.skills.length - 1;
        }
        setTimeout(() => {
          this.isBlurred = false;
        }, 250); // halfway through the animation duration
      }, 250); // halfway through the animation duration
    }
  });
}

}
