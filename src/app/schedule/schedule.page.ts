import { Component, OnInit } from '@angular/core';


//Attorney Data; An array of 'attorney info objects'
//To add an attorney, add to 'users' array[] with the given attorney info as an object{} as shown below.
//[Note]: You must provide a 'key', a sequential number. 
//[Note]: You also must fill-in all information e.g., name, linkedin, avvo, otherlink, about, expertise, languages, location, ect..
const users = [
  {
    name: 'Matthew W. Blaisdell',
    linkedin: "https://www.linkedin.com/in/matthew-blaisdell-esq",
    avvo: "https://www.avvo.com/attorneys/11232-ny-matthew-blaisdell-3817651.html",
    otherlink: "Blaisdelllaw.com",
    about: "Matthew Blaisdell, Esquire, is a general immigration practice with a focus on providing ongoing consulting services to students, visitors, and others seeking to identify an immigration strategy that best suits their goals. In addition to his practice, Matthew is deeply involved in advocacy related to professional ethics and consumer protection.",
    expertise: ['Family Green Cards', 'Employment Green Cards', 'Students', 'Work Permits'],
    languages: ['English'],
    location: "159 20th Street, Ste 1B, Brooklyn, NY 11232",
    hours: "M: 8:00 am – 3:00 pm (EST)\nTu: 10:00 am – 5:00 pm (EST)\nW:  8:00 am – 3:00 pm  (EST)\nTh:  11:00 am – 3:00 pm (EST)\nFr:  8:00 am – 3:00 pm (EST)",
    phone:"(347) 994-0177",
    calendly: ":/https/matthewblaisdell.s3.us-west-1.amazonaws.com/mattbladswell+copy.html",
    image: '../assets/img/attorneydefault.png',
    key:'1'
 },
  {
    name: 'Seth Finberg',
    linkedin: "https://www.linkedin.com/in/seth-finberg-47071920a/",
    avvo: "",
    otherlink: "",
    about: "Seth Finberg grew up in Ft. Lauderdale and attended the University of Georgia School of Law.  He practiced Criminal Defense in Metro Atlanta before returning to South Florida to open an Immigration Law practice.  Seth is an Eagle Scout, enjoys playing the guitar, and coaches high school football along with men's/women's soccer.",
    expertise: ['Asylum', 'Employment Authorization Documents (EAD)', 'F-1 Visas', 'TPS Applications'],
    languages: ['English'],
    location: "Georgia, United States",
    hours: "Thurs: 6:00-7:30 pm (ET)",
    phone:"(954) 235-2277",
    calendly: "https://sethfinberg.s3-us-west-1.amazonaws.com/sethfinberg.html",
    image: '../assets/img/attorneydefault.png',
    key:'2'
}
 ]
 ////

 
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
