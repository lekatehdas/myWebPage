import {Component, HostListener, OnInit} from '@angular/core';
import {fadeInAnimation, blurInAnimation} from "../animations/animations";
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [fadeInAnimation, blurInAnimation]

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
  const projectsElement = document.getElementById('projects');
  if (skillsElement && projectsElement) {
    const skillsRect = skillsElement.getBoundingClientRect();
    const projectsRect = projectsElement.getBoundingClientRect();
    const scrollPosition = this.viewportScroller.getScrollPosition()[1];

    const halfwayPoint = projectsRect.top + (projectsRect.height / 2);

    this.isVisible = (skillsRect.top <= scrollPosition + 100 &&
      skillsRect.bottom > scrollPosition + 100) ||
      (scrollPosition < halfwayPoint && scrollPosition >= projectsRect.top);
  }
}



  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkVisibility();
  }


}
