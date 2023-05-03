import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  showFooter: boolean = false;
  lastElementPosition: number = 0;

  // Add event listener to detect changes in window position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    window.requestAnimationFrame(() => {
      // when the user has reached the end of the page
      this.lastElementPosition = document.body.scrollHeight - window.innerHeight;
      
      // If the current vertical scroll position of the browser window is greater 
      // than the last position of elements on the page, it means that the user has scrolled the page down and reached the end of the page
      if (window.scrollY > this.lastElementPosition) {
        this.showFooter = true;
      } else {
        this.showFooter = false;
      }
    });
  }

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', [])
  onWindowResize() {
    // runs every time a browser window resize event occurs. What it does is recalculate the position of the last element on the page
    this.lastElementPosition = document.body.scrollHeight - window.innerHeight;
    if (window.scrollY > this.lastElementPosition) {
      this.showFooter = true;
    } else {
      this.showFooter = false;
    }
  }
}
