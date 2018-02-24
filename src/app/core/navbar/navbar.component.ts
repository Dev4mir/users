import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  constructor() { }
  addBgC: boolean;

  @HostListener("window:scroll", [])

  onScroll(): void {
    /* Add background to navbar when scrolling */
    if (window.scrollY > 10) {
      this.addBgC = true;
    } else {
      this.addBgC = false;
    }
  }

  ngOnInit() {
  }

}
