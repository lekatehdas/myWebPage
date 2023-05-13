import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']

})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('scrollableElement') scrollableElement!: ElementRef;
  currentSkill = 0;
  skillsPre = 'My skills include proficiency in multiple programming languages, as well as experience in web development,\n' +
    '          databases, big data and machine learning technologies, software engineering, testing, and version control. I\'m\n' +
    '          eager to apply these skills to real-world applications and tackle the challenges that come with them. I\'m\n' +
    '          particularly interested in computer security and testing.'
  skills = [
    {
      title: 'Programming Languages',
      items: ['Python', 'Typescript', 'JavaScript', 'Java', 'Kotlin']
    },
    {
      title: 'Web Development',
      items: ['HTML', 'CSS', 'Angular', 'Node.js', 'Express', 'Django']
    },
    {
      title: 'Databases',
      items: ['MySQL', 'MongoDB', 'Firebase', 'Firestore']
    },
    {
      title: 'Big Data and Machine Learning',
      items: ['Scikit-learn', 'TensorFlow', 'Hadoop', 'Spark']
    },
    {
      title: 'Software Engineering',
      items: ['Agile Methodologies', 'Design Patterns', 'Git', 'JIRA', 'Testing', 'Version control (GIT)']
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
    });
  }
}
