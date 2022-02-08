import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from '../API.service';
@Component({
  selector: 'app-apply-aid',
  templateUrl: './apply-aid.page.html',
  styleUrls: ['./apply-aid.page.scss'],
})

export class ApplyAidPage implements OnInit {

  private formData: FormGroup
  

  constructor(
    public formBuilder: FormBuilder,
    private apiService: APIService,
  ) {this.onSubmit()}

  ngOnInit() {

    this.formData = this.formBuilder.group({
      fName: new FormControl(),
      lName: new FormControl(),
      Email: new FormControl(),
      Phone: new FormControl(),
      DateOfBirth: new FormControl(),
      WhyInternational: new FormControl(),
      DegreeLevel: new FormControl(),
      College: new FormControl(),
      Major: new FormControl(),
      Year: new FormControl(),
      MaritalStatus: new FormControl(),
      Children: new FormControl(),
      Amount: new FormControl(),
      //Why: new FormControl(),
      ImmigrationStatus: new FormControl(),
      FamilyHardship: new FormControl(),
      FinDocs: new FormControl(),
    })
  }
  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.formData.get('dob').setValue(date, {
       onlyself: true
    })
  } 

  onSubmit() {
      this.apiService.CreateTodo({       
        firstName: this.formData[1],
        lastName: this.formData[2],
        DOB: this.formData[3],
        email: this.formData[4],
        phone: this.formData[5],
        whyIdentify: this.formData[6],
        college: this.formData[7],
        degree: this.formData[8],
        fieldOfStudy: this.formData[9],
        gradYear: this.formData[10],
        maritalStatus: this.formData[11],
        numChildren: this.formData[12],
        immigrationStatus: this.formData[13],
        amount: this.formData[14],
        familySituation: this.formData[15],
        document: this.formData[16],
      });
    console.log(this.formData.value);
  }

}
