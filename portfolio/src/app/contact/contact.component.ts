import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var $;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

  name;
  contact = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  expan: boolean;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    this._http.post('https://formspree.io/xnqgpqzk', this.contact.value)
      .subscribe(res => {
        if (res['ok']) {
          this.expan = true;
          let modal = document.getElementById("success");
          this.name = this.contact.value.name;
          this.contact = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            message: new FormControl('', Validators.required),
          });
          modal.style.display = "block";
          window.onclick = function (event) {
              if (event.target == modal) {
             modal.style.display = "none";
      }
    }

        }
        else
         {
          let modal = document.getElementById("retry");
          modal.style.display = "block";
          window.onclick = function (event) {
              if (event.target == modal) {
             modal.style.display = "none";
           }
           }

         }
      })
  }

  spanClick(){
    let modal = document.getElementById("success");
    modal.style.display = "none";
  }

  span(){
    let modal = document.getElementById("retry");
    modal.style.display = "none";
  }


}
