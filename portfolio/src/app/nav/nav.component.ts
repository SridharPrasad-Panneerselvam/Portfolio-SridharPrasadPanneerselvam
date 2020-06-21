import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  cururl:string;
  isCollapsed: boolean = true;
  
  constructor(private router: Router) { 
    this.cururl = this.router.url;
  }
  
  ngOnInit(): void {
  }

Home(){
  this.router.navigate[("/home")];
}

  goTo(str) {
    const el = document.getElementById('navbar-toggler')
    if (el.getAttribute('aria-expanded') == 'true') {
      el.click();
    }
    if (window.innerWidth < 992) {
      this.scrollToView(document.getElementById(str), -350)
    } else {
      document.getElementById(str).scrollIntoView({ behavior: "smooth", block: 'start' });
    }
  }

  scrollToView = (element, offset) => {
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;

    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  }
}
