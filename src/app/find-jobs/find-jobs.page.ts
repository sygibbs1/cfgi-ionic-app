import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-jobs',
  templateUrl: './find-jobs.page.html',
  styleUrls: ['./find-jobs.page.scss'],
})
export class FindJobsPage implements OnInit {

  searchTerm: string;
  jobs = [
    {
      "thumbnail": "logo",
      "title": "CFGI",
      "city": "San Fransisco",
      "state": "CA",
      "zipcode": "95621",
      "jobType": "lawyer",
      "postDate": "11/16/2021"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
