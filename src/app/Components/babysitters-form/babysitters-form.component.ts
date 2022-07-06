import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BabysitterService } from 'src/app/Services/BabysitterServices/babysitter.service';

@Component({
  selector: 'app-babysitters-form',
  templateUrl: './babysitters-form.component.html',
  styleUrls: ['./babysitters-form.component.css']
})
export class BabysittersFormComponent implements OnInit {

  CreateBabysitter!:FormGroup

  constructor(private createservice:BabysitterService,private router:Router) { }

  ngOnInit(): void {

    this.CreateBabysitter=new FormGroup({
      f_Name:new FormControl(''),
      l_Name:new FormControl(''),
      gender:new FormControl(''),
      address:new FormControl(''),
      phone:new FormControl(''),
      age:new FormControl('')

    });
  }

  public AddtoBabysitter(){
    return this.createservice.createBabysitter(this.CreateBabysitter.value).subscribe(data=>{
      console.log(data)
      this.gotoBabysitterlist();
    });
  }

  public gotoBabysitterlist(){
    this.router.navigate(['navbar/babysitters/babysitters-list']);
  }

  submit(){
    console.log(this.CreateBabysitter.value)
    this.AddtoBabysitter();
  }

}
