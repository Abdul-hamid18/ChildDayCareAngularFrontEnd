import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollmentService } from 'src/app/Services/EnrollmentServices/enrollment.service';
import { Services } from 'src/app/Services/MyServicesService/services';
import { ServicesServiceService } from 'src/app/Services/MyServicesService/services-service.service';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.css']
})
export class EnrollFormComponent implements OnInit {
  services!:Services[]

CreateEnrollment!:FormGroup


  constructor(private createservice:EnrollmentService,
    private servicesService:ServicesServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getServices();

    

    this.CreateEnrollment=new FormGroup({
      ch_Fname:new FormControl(''),
      ch_Lname:new FormControl(''),
      enroll_Date:new FormControl(''),
      ch_Gender:new FormControl(''),
      pr_Fname:new FormControl(''),
      pr_Lname:new FormControl(''),
      phone:new FormControl(''),
      email:new FormControl(''),
      pr_Gender:new FormControl(''),
      category:new FormControl(''),
      address:new FormControl('')


    });
  }
public AddtoEnrollment(){
  return this.createservice.createEnrollmment(this.CreateEnrollment.value).subscribe(data=>{
    console.log(data)
    this.gotoEnrolllist();
  });
}

public gotoEnrolllist(){
  this.router.navigate(['navbar/enrollment/enroll-list']);
}
  submit(){
    console.log(this.CreateEnrollment.value)
    this.AddtoEnrollment();
  }
  public getServices(){
    
    this.servicesService.getServices().subscribe(data=>{
      this.services=data;
      console.log(data);
    });
  }

}
