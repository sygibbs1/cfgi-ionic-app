import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apply-aid',
  templateUrl: './apply-aid.page.html',
  styleUrls: ['./apply-aid.page.scss'],
})
export class ApplyAidPage implements OnInit {

  private formData: FormGroup


  constructor() { }

  ngOnInit() {

    this.formData = new FormGroup({
      firstName: new FormControl(),
      familyName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      dateOfBirth: new FormControl(),
      whyInternational: new FormControl(),
      degreeLevel: new FormControl(),
      college: new FormControl(),
      major: new FormControl(),
      year: new FormControl(),
      maritalStatus: new FormControl(),
      children: new FormControl(),
      amount: new FormControl(),
      why: new FormControl(),
      immigrationStatus: new FormControl(),
      familyHardship: new FormControl(),
      finDocs: new FormControl(),
    })
  }

  onSubmit() {
    console.log(this.formData.value);
  }

}
