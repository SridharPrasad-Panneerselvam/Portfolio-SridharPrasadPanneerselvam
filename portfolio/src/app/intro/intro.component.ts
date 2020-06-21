import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  url = "./assets/SridharPrasadPanneerselvam_Resume.pdf";
  filename = "SridharPrasadPanneerselvam_Resume.pdf";
  constructor() { }

  ngOnInit(): void {
  }

}
