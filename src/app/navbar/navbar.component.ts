import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar.mobile.css']
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
    const yOffset = window.pageYOffset;
    const activeOffset = 100; // adjust this value to change the point at which a section becomes active

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
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const elementBottom = elementTop + element.offsetHeight;
        if (yOffset >= elementTop - this.navbarHeight - activeOffset && yOffset < elementBottom - this.navbarHeight - activeOffset) {
          this.activeLink = section;
          break;
        }
      }
    }
  }

  scrollToElement(event: MouseEvent, elementId: string): void {
    event.preventDefault();
    const element = document.getElementById(elementId);
    const yOffset = this.navbarHeight * 2;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      console.log(`yOffset: ${yOffset}, y: ${y}`);
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }
}
