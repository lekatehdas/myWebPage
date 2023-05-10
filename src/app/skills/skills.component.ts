import {Component, HostListener, OnInit} from '@angular/core';
import {fadeInAnimation} from "../animations/animations";
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [fadeInAnimation]
})
export class SkillsComponent implements OnInit {
  currentSkill = -1;
  isVisible = false;

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

  constructor(private viewportScroller: ViewportScroller) {
  }

  ngOnInit() {
  }

  checkVisibility(): void {
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      const rect = skillsElement.getBoundingClientRect();
      this.isVisible = rect.top <= this.viewportScroller.getScrollPosition()[1] + 100 &&
        rect.bottom > this.viewportScroller.getScrollPosition()[1] + 100;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkVisibility();
  }


}
