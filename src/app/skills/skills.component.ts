import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from "../animations/animations";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [fadeInAnimation]
})
export class SkillsComponent implements OnInit {
  currentSkill = -1;
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

  ngOnInit() {
  }
}
