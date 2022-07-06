import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Signup!:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.Signup = new FormGroup({
      uname: new FormControl(''),
      psw: new FormControl(''),
      psw_confirm: new FormControl('')

    });
  }
  submit(){
    console.log(this.Signup.value);
  }

}
