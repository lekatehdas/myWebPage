import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeLink: string | null = 'about';
  navbarHeight!: number;

  ngOnInit() {
    const element = document.querySelector('.navbar');
    if (element) {
      const styles = window.getComputedStyle(element);
      this.navbarHeight = parseInt(styles.height, 10);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffset = window.pageYOffset + this.navbarHeight;
    const sections = [
      'about',
      'skills',
      'projects',
      'resume',
      'contact'
    ];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = window.pageYOffset + rect.top;
        const elementBottom = window.pageYOffset + rect.bottom;
        if (yOffset >= elementTop && yOffset <= elementBottom) {
          this.activeLink = section;
          break;
        }
      }
    }
  }

  scrollToElement(event: MouseEvent, elementId: string): void {
    event.preventDefault();
    const element = document.getElementById(elementId);
    const yOffset = -this.navbarHeight;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }
}
