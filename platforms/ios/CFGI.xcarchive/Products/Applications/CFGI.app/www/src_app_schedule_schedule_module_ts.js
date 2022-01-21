(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_schedule_schedule_module_ts"],{

/***/ 2774:
/*!*****************************************************!*\
  !*** ./src/app/schedule/schedule-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageRoutingModule": () => (/* binding */ SchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.page */ 3217);




const routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_0__.SchedulePage
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchedulePageRoutingModule);



/***/ }),

/***/ 7911:
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageModule": () => (/* binding */ SchedulePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 4981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-routing.module */ 2774);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.page */ 3217);








let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_1__.SchedulePageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_2__.SchedulePage]
    })
], SchedulePageModule);



/***/ }),

/***/ 3217:
/*!*******************************************!*\
  !*** ./src/app/schedule/schedule.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePage": () => (/* binding */ SchedulePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./schedule.page.html */ 2780);
/* harmony import */ var _schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page.scss */ 2044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 9526);





//Attorney Data; An array of 'attorney info objects'
//To add an attorney, add to 'users' array[] with the given attorney info as an object{} as shown below.
//[Note]: You must provide a 'key', a sequential number. 
//[Note]: You also must fill-in all information e.g., name, linkedin, avvo, otherlink, about, expertise, languages, location, ect..
let SchedulePage = class SchedulePage {
    constructor(iab) {
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes', //Windows only    
        };
        this.hideAvvo = true;
        this.hideLinkedin = true;
        this.hideSchedule = true;
        //Attorney Data; An array of 'attorney info objects'
        //To add an attorney, add to 'users' array[] with the given attorney info as an object{} as shown below.
        //[Note]: You must provide a 'key', a sequential number. 
        //[Note]: You also must fill-in all information e.g., name, linkedin, avvo, otherlink, about, expertise, languages, location, ect..
        this.lawyers = [
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
                "phone": "(347) 994-0177",
                "calendly": "https://matthewblaisdell.s3.us-west-1.amazonaws.com/mattbladswell+copy.html",
                "image": '../assets/MatthewW.jpg',
                "key": '1'
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
                "phone": "(954) 235-2277",
                "calendly": "https://sethfinberg.s3-us-west-1.amazonaws.com/sethfinberg.html",
                "image": '../assets/seth.jpeg',
                "key": '2'
            },
            {
                "fname": 'Lawyer',
                "lname": 'Person',
                "linkedin": "",
                "avvo": "",
                "website": "",
                "about": "About Section",
                "expertise": ["lawyering"],
                "languages": ['languages'],
                "location": "City, State",
                "hours": "day: 0:00-0:00 am (TimeZone)",
                "phone": "(800)867-5309",
                "calendly": "",
                "image": '../assets/attorneydefault.png',
                "key": '2' /// Indexing Key (Required)
            }
        ];
    }
    openWithSystemBrowser(url) {
        let target = "_system";
        this.iab.create(url, target, this.options);
    }
    openWithInAppBrowser(url) {
        let target = "_blank";
        this.iab.create(url, target, this.options);
    }
    openWithCordovaBrowser(url) {
        let target = "_self";
        this.iab.create(url, target, this.options);
    }
    ngOnInit() {
    }
};
SchedulePage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
SchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-schedule',
        template: _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchedulePage);



/***/ }),

/***/ 2044:
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#back_button {\n  position: absolute;\n  top: 2%;\n  color: black;\n}\n\n#legal_text {\n  position: absolute;\n  width: 80%;\n  left: 10%;\n  top: 15%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 7vmin;\n  line-height: 6vmin;\n  text-align: left;\n  color: #FF6E00;\n}\n\n#find_text {\n  position: absolute;\n  width: 80%;\n  left: 10%;\n  top: 20%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 5.5vmin;\n  line-height: 6.5vmin;\n  color: #3F3356;\n}\n\n#waves_img {\n  scale: 1;\n  position: absolute;\n  width: 90%;\n  top: 15%;\n  left: -2%;\n  transform: rotate(0deg);\n}\n\n#filter_row {\n  position: absolute;\n  width: 100%;\n  top: 15%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n  font-size: 1vmin;\n}\n\n#search_location {\n  position: relative;\n  width: 75%;\n  left: 3%;\n  align-items: left;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color:#000000;\n  --placeholder-font-style: italic;\n  --icon-color:#000000;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n  border: 1px solid #4C67F6;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n\n#filter_button {\n  scale: 1.2;\n  position: relative;\n  top: -10%;\n  left: 75%;\n  padding-left: 2%;\n}\n\n#search_row {\n  position: absolute;\n  width: 100%;\n  top: 30%;\n}\n\n#search_field {\n  position: absolute;\n  left: 3%;\n  right: 8%;\n  width: 75%;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color:#000000;\n  --placeholder-font-style: italic;\n  --icon-color:#000000;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n}\n\n#search_button {\n  position: absolute;\n  left: 22%;\n  right: 22%;\n  width: 56%;\n  height: 7%;\n  top: 60%;\n  bottom: 23%;\n  background: #4C67F6;\n  border-radius: 6px;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  line-height: 5vmin;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n#results {\n  position: absolute;\n  width: 100%;\n  top: 40%;\n}\n\n#result_card {\n  left: 1%;\n  width: 85%;\n  min-height: 300px;\n}\n\n#left {\n  position: relative;\n  width: 30%;\n  vertical-align: top;\n}\n\n#lawyer_avi {\n  position: relative;\n  width: 100%;\n}\n\n#right {\n  position: relative;\n  width: 40%;\n  left: 5%;\n  vertical-align: top;\n}\n\n#lawyer_title {\n  position: relative;\n  width: 100%;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 7vmin;\n  line-height: 8vmin;\n  color: #3F3356;\n}\n\n#about {\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 2.5vmin;\n  line-height: 3vmin;\n}\n\n#link {\n  width: 100%;\n  color: #1f274d;\n  border: 1px solid #1f274d;\n  border-radius: 10px;\n}\n\n#icon {\n  width: 50px;\n}\n\n#location {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 4vmin;\n  line-height: 4vmin;\n}\n\n#languages {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3vmin;\n  line-height: 3vmin;\n}\n\n#contact {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3vmin;\n  line-height: 3vmin;\n  width: 100%;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n#hours {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 2vmin;\n  width: 100%;\n}\n\n#schedule_button {\n  width: 100%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  line-height: 4vmin;\n  --background: #1f6b30 ;\n}\n\n#no_calendly {\n  width: 100%;\n  text-align: center;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 3vmin;\n  line-height: 3vmin;\n}\n/*# sourceMappingURL=data:application/json;base64,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LGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVpKOztBQWVBO0VBQ1ksb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBWko7O0FBZUE7RUFDSSxXQUFBO0VBQ1Esb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBWko7O0FBZUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWkoiLCJmaWxlIjoic2NoZWR1bGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tfYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjIlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNsZWdhbF90ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgdG9wOjE1JTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA3dm1pbjtcbiAgICBsaW5lLWhlaWdodDogNnZtaW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgIGNvbG9yOiAjRkY2RTAwO1xufVxuXG4jZmluZF90ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgdG9wOjIwJTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogNS41dm1pbjtcbiAgICBsaW5lLWhlaWdodDogNi41dm1pbjtcblxuICAgIGNvbG9yOiAjM0YzMzU2O1xufVxuXG4jd2F2ZXNfaW1nIHtcbiAgICBzY2FsZToxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDo5MCU7XG4gICAgdG9wOiAxNSU7XG4gICAgbGVmdDogLTIlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG4jZmlsdGVyX3JvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMTUlO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxdm1pbjtcbn1cblxuI3NlYXJjaF9sb2NhdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbGVmdDozJTtcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcblxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvciA6IzAwMDAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAtLWljb24tY29sb3IgOiMwMDAwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OjUwJTtcbiAgICAtLWlvbi1pY29uOiAjMDAwMDAwO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRDNjdGNjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNmaWx0ZXJfYnV0dG9uIHtcbiAgICBzY2FsZTogMS4yO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xMCU7XG4gICAgbGVmdDogNzUlO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbiNzZWFyY2hfcm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0b3A6IDMwJTtcbn1cblxuI3NlYXJjaF9maWVsZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6MyU7XG4gICAgcmlnaHQ6OCU7XG4gICAgd2lkdGg6IDc1JTtcblxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvciA6IzAwMDAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAtLWljb24tY29sb3IgOiMwMDAwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OjUwJTtcbiAgICAtLWlvbi1pY29uOiAjMDAwMDAwO1xufVxuXG4jc2VhcmNoX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIyJTtcbiAgICByaWdodDogMjIlO1xuICAgIHdpZHRoOiA1NiU7XG4gICAgaGVpZ2h0OiA3JTtcbiAgICB0b3A6IDYwJTtcbiAgICBib3R0b206IDIzJTtcblxuICAgIGJhY2tncm91bmQ6ICM0QzY3RjY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDR2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA1dm1pbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3Jlc3VsdHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6NDAlO1xufVxuXG4jcmVzdWx0X2NhcmQge1xuICAgIGxlZnQ6IDElO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbiNsZWZ0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4jbGF3eWVyX2F2aSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGxlZnQ6IDUlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgXG59XG4jbGF3eWVyX3RpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA3dm1pbjtcbiAgICBsaW5lLWhlaWdodDogOHZtaW47XG5cbiAgICBjb2xvcjogIzNGMzM1Njtcbn1cblxuI2Fib3V0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMi41dm1pbjtcbiAgICBsaW5lLWhlaWdodDogM3ZtaW47XG59XG5cbiNsaW5rIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjojMWYyNzRkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZjI3NGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2ljb24ge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4jbG9jYXRpb24ge1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDR2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA0dm1pbjtcbn1cblxuI2xhbmd1YWdlcyB7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogM3ZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDN2bWluO1xufVxuXG4jY29udGFjdCB7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogM3ZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDN2bWluO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNob3VycyB7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMnZtaW47XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNzY2hlZHVsZV9idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0dm1pbjtcbiAgICBsaW5lLWhlaWdodDogNHZtaW47XG4gICAgLS1iYWNrZ3JvdW5kOiAjMWY2YjMwIDtcbn1cblxuI25vX2NhbGVuZGx5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDN2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAzdm1pbjtcbn0iXX0= */");

/***/ }),

/***/ 2780:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n    <!-- Back Button -->\n    <ion-row>\n      <ion-button fill=clear [routerLink]=\"['/tablinks/legal']\" id=\"back_button\">\n        <img src=\"./assets/back_button.png\"/>\n      </ion-button>\n    </ion-row>\n\n    <!-- \n    <ion-row id=\"waves_img\">\n      <img src=\"../assets/legalwave.png\" />\n    </ion-row>\n    -->\n\n    <!-- Text at top that says \"Legal\" -->\n    <ion-row id=\"legal_text\">\n      <ion-text>\n        LEGAL\n      </ion-text>\n    </ion-row>\n\n    <!-- Text at top that says \"Find a CFGI Attorney For a Consultation\" -->\n    <ion-row id=\"find_text\">\n      <ion-text>\n        Find a CFGI Attorney For a Consulation\n      </ion-text>\n    </ion-row>\n\n    <!-- Row containing Search Bar -->\n    <ion-row id=\"search_row\">\n      <ion-searchbar id=\"search_field\"\n           id=\"search_field\"\n           placeholder=\"Search for Lawyers\"\n           [(ngModel)]=\"searchTerm\"\n           showCancelButton=\"focus\"\n           animated>\n      </ion-searchbar>\n      <ion-button fill=clear id=\"filter_button\">\n        <ion-icon width=\"100%\" name=\"filter-outline\"></ion-icon>\n      </ion-button>\n    </ion-row>\n    \n    <!-- List of cards displayed as results -->\n    <ion-row id=\"results\">\n      <ion-list>\n        <!-- Create an ion item for each lawyer in the lawyers array -->\n        <ion-item *ngFor=\"let lawyer of lawyers | filter:searchTerm\">\n          <ion-card id=\"result_card\"> \n            <ion-card-content>\n              <table>\n                <!-- Top row of Table: Lawyer image on left and name, location and language on right -->\n                <tr>\n                  <td id=\"left\"><img id=\"lawyer_avi\" src= {{lawyer.image}}></td>\n                  <td id=\"right\"><ion-text id=\"lawyer_title\">{{lawyer.fname}}</ion-text>\n                    <ion-text id=\"lawyer_title\">{{lawyer.lname}}</ion-text>\n                    <ion-text id=\"location\"> {{lawyer.location}}<br> </ion-text>\n                    <ion-text id=\"languages\"> {{lawyer.languages}} </ion-text>\n                  </td>\n                </tr>\n                <!-- 2nd Row of Table: Contact information on left and Lawyer information on right -->\n                <tr>\n                  <td id=\"left\">\n                    <!-- Show button for Linkedin Profile if given -->\n                    <ion-button *ngIf=\"lawyer.linkedin\" fill=\"clear\" id=\"link\" href= {{lawyer.linkedin}}><img id=\"icon\" src=\"../assets/linkedin.png\"></ion-button>\n                    <!-- Show button for Avvo Profile if given -->\n                    <ion-button *ngIf=\"lawyer.avvo\" fill=\"clear\" id=\"link\" href= {{lawyer.avvo}}> <img id=\"icon\" src=\"../assets/avvo.png\"></ion-button>\n                    <!-- Lawyer's phone number -->\n                    <ion-text id=\"contact\"><br><br><ion-icon size=\"small\" name=\"call\"></ion-icon>&nbsp;&nbsp;{{lawyer.phone}}<br></ion-text>\n                    <!-- Show hours if given -->\n                    <ion-text *ngIf=\"lawyer.hours\" id=\"hours\"> Hours: {{lawyer.hours}}</ion-text>\n                  </td>\n                  <td id=\"right\">\n                    <!-- Lawyer about section -->\n                    <ion-text id=\"about\" >{{lawyer.about}}<br><br></ion-text>\n                    <!-- Lawyer expertise section -->\n                    <ion-text id=\"about\" > Expertise: {{lawyer.expertise}}</ion-text>\n                  </td>\n                </tr>\n                </table>\n            </ion-card-content>\n            <!-- Button to schedule with lawyer via Calendly, if Calendly link is provided -->\n            <ion-card-content  *ngIf=\"lawyer.calendly\">\n              <!-- In App Browser help: https://www.techiediaries.com/inappbrowser-ionic-v3/ -->\n              <ion-button (click)=\"openWithCordovaBrowser(lawyer.calendly)\" id=\"schedule_button\" > Schedule with {{lawyer.fname}}</ion-button>\n            </ion-card-content>\n\n            <!-- If no Calendly link is provided, button is replaced with text telling the user \n            to schedule their appointment by contacting the lawyer-->\n            <ion-card-content  id=\"no_calendly\"  *ngIf =\"lawyer.calendly === ''\">\n              <ion-text > Please contact {{lawyer.fname}} directly to check availability.</ion-text>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-list>\n    </ion-row>");

/***/ })

}]);
//# sourceMappingURL=src_app_schedule_schedule_module_ts.js.map