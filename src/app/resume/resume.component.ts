import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  education = 'Bachelor’s degree in Computer Science, Kristianstad University (Expected Graduation Date: 06/2023) GPA: 3.88 (out of 4.0)'
  workExperience = [
    {
      title: "Teacher’s Assistant",
      company: "Kristianstad University",
      duration: "2022 – 2023",
    },
    {
      title: 'Full Stack Developer',
      company: 'Haagan Sirtekma Oy',
      duration: '2019 - 2020',
    },
    {
      title: 'Professional Billiards Player',
      company: 'Self Employed',
      duration: '2016 - 2019',
    },
    {
      title: 'Conductor',
      company: 'Finnish Railways',
      duration: '2012 - 2016',
    },
    {
      title: 'Private Security Industry',
      company: 'Multiple',
      duration: '2006 - 2014',
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
