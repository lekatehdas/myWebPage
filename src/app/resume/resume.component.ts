import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css', './resume.mobile.css', './resume.tablet.css']
})
export class ResumeComponent implements OnInit {
  education = {
    text: 'Bachelor’s degree in Computer Science, Kristianstad University (Expected Graduation Date: 06/2023)',
    gpa: 'GPA: 3.88 (out of 4.0)'
  }
  workExperience = [
    {
      title: "Bachelor’s degree in Computer Science",
      company: "Kristianstad University",
      duration: "2020 – 2023, GPA: 3.88 (out of 4.0)",
      icon: 'assets/icons/teaching.png'
    },
    {
      title: "Teaching Assistant",
      company: "Kristianstad University",
      duration: "2022 – 2023",
      icon: 'assets/icons/whiteboard.png'
    },
    {
      title: 'Full Stack Developer',
      company: 'Haagan Sirtekma Oy',
      duration: '2019 - 2020',
      icon: 'assets/icons/programmer.png'
    },
    {
      title: 'Professional Billiards Player',
      company: 'Self Employed',
      duration: '2016 - 2019',
      icon: 'assets/icons/billiards.png'
    },
    {
      title: 'Conductor',
      company: 'Finnish Railways',
      duration: '2012 - 2016',
      icon: 'assets/icons/train.png'
    },
    {
      title: 'Private Security Industry',
      company: 'Multiple Companies',
      duration: '2006 - 2014',
      icon: 'assets/icons/security.png'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
