import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.page.html',
  styleUrls: ['./variables.page.scss'],
})
export class VariablesPage implements OnInit {
  lawyers = [
    {
      "fname": 'Matthew W.',
      "lname": 'Blaisdell',
      "linkedin": "https://www.linkedin.com/in/matthew-blaisdell-esq",
      "avvo": "https://www.avvo.com/attorneys/11232-ny-matthew-blaisdell-3817651.html",
      "otherlink": "Blaisdelllaw.com",
      "about": "Matthew Blaisdell, Esquire, is a general immigration practice with a focus on providing ongoing consulting services to students, visitors, and others seeking to identify an immigration strategy that best suits their goals. In addition to his practice, Matthew is deeply involved in advocacy related to professional ethics and consumer protection.",
      "expertise": ['Family Green Cards', 'Employment Green Cards', 'Students', 'Work Permits'],
      "languages": ['English'],
      "location": "Brooklyn, NY",
      "hours": "M: 8:00 am – 3:00 pm (EST), Tu: 10:00 am – 5:00 pm (EST), W:  8:00 am – 3:00 pm  (EST),Th:  11:00 am – 3:00 pm (EST), Fr:  8:00 am – 3:00 pm (EST)",
      "phone":"(347) 994-0177",
      "calendly": "https://matthewblaisdell.s3.us-west-1.amazonaws.com/mattbladswell+copy.html",
      "image": '../assets/MatthewW.jpg',
      "key":'1'
   },
    {
      "fname": 'Seth',
      "lname": 'Finberg',
      "linkedin": "https://www.linkedin.com/in/seth-finberg-47071920a/",
      "avvo": "",
      "otherlink": "",
      "about": "Seth Finberg grew up in Ft. Lauderdale and attended the University of Georgia School of Law.  He practiced Criminal Defense in Metro Atlanta before returning to South Florida to open an Immigration Law practice.  Seth is an Eagle Scout, enjoys playing the guitar, and coaches high school football along with men's/women's soccer.",
      "expertise": ['Asylum', 'Employment Authorization Documents (EAD)', 'F-1 Visas', 'TPS Applications'],
      "languages": ['English'],
      "location": "Fort Lauderdale, FL",
      "hours": "Thurs: 6:00-7:30 pm (ET)",
      "phone":"(954) 235-2277",
      "calendly": "https://sethfinberg.s3-us-west-1.amazonaws.com/sethfinberg.html",
      "image": '../assets/seth.jpeg',
      "key":'2'
  },
  {
    "fname": 'Lawyer', /// First Name (Required)
    "lname": 'Person', /// Last Name (Required)
    "linkedin": "", /// Linkedin Profile (Optional)
    "avvo": "", /// Avvo Profile (Optional)
    "website": "", /// Personal Website (Optional)
    "about": "About Section", /// About Section (Required)
    "expertise": ["lawyering"], /// Expertise area array (Required)
    "languages": ['languages'], /// Language array (Required)
    "location": "City, State", /// City, State (Required)
    "hours": "day: 0:00-0:00 am (TimeZone)", /// Hours (Optional)
    "phone":"(800)867-5309", /// Phone Number (Required)
    "calendly": "", /// Calendly Link for Scheduling (Optional)
    "image": '../assets/attorneydefault.png', ///Path or link to image for profile (Optional)
    "key":'3' /// Indexing Key (Required)
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
