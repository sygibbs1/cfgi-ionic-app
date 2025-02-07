(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_donate_donate_module_ts"],{

/***/ 8620:
/*!*************************************************!*\
  !*** ./src/app/donate/donate-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePageRoutingModule": () => (/* binding */ DonatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donate.page */ 216);




const routes = [
    {
        path: '',
        component: _donate_page__WEBPACK_IMPORTED_MODULE_0__.DonatePage
    }
];
let DonatePageRoutingModule = class DonatePageRoutingModule {
};
DonatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DonatePageRoutingModule);



/***/ }),

/***/ 3589:
/*!*****************************************!*\
  !*** ./src/app/donate/donate.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePageModule": () => (/* binding */ DonatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _donate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donate-routing.module */ 8620);
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donate.page */ 216);







let DonatePageModule = class DonatePageModule {
};
DonatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _donate_routing_module__WEBPACK_IMPORTED_MODULE_0__.DonatePageRoutingModule
        ],
        declarations: [_donate_page__WEBPACK_IMPORTED_MODULE_1__.DonatePage]
    })
], DonatePageModule);



/***/ }),

/***/ 216:
/*!***************************************!*\
  !*** ./src/app/donate/donate.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePage": () => (/* binding */ DonatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_donate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./donate.page.html */ 8051);
/* harmony import */ var _donate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donate.page.scss */ 4686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DonatePage = class DonatePage {
    constructor() { }
    ngOnInit() {
    }
};
DonatePage.ctorParameters = () => [];
DonatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-donate',
        template: _raw_loader_donate_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_donate_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DonatePage);



/***/ }),

/***/ 4686:
/*!*****************************************!*\
  !*** ./src/app/donate/donate.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".welcome-card {\n  max-width: 50vw;\n  margin-left: auto;\n  margin-right: auto;\n}\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n.welcome-card ion-card-header {\n  max-width: 30vw;\n  margin: auto;\n}\n.welcome-card ion-card-content {\n  max-width: 30vw;\n  margin: auto;\n}\n#left_arrows {\n  position: absolute;\n  right: 0%;\n  left: 25%;\n  height: 2%;\n  width: 75%;\n  top: 10%;\n  bottom: 88%;\n}\n#right_arrows {\n  position: absolute;\n  left: 0%;\n  right: 25%;\n  width: 75%;\n  height: 2%;\n  top: 15%;\n  bottom: 83%;\n}\n#inspired_title {\n  position: absolute;\n  width: 60%;\n  height: 7%;\n  left: 10%;\n  right: 30%;\n  top: 23%;\n  bottom: 70%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  font-size: 6.5vmin;\n  line-height: 5.5vmin;\n  color: #FF6E00;\n}\n#donate_title {\n  position: absolute;\n  width: 50%;\n  height: 10%;\n  left: 10%;\n  right: 40%;\n  top: 27%;\n  bottom: 63%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 13.5vmin;\n  line-height: 17vmin;\n  color: #3F3356;\n}\n#donate_img {\n  position: absolute;\n  width: 38%;\n  left: 56.51%;\n  right: 5.49%;\n  top: 26%;\n}\n#donate_description {\n  position: absolute;\n  width: 75%;\n  height: 39%;\n  left: 10%;\n  right: 15%;\n  top: 50%;\n  bottom: 21%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n  font-size: 4.7vmin;\n  line-height: 5.5vmin;\n  color: #3F3356;\n}\n#donate_button {\n  position: absolute;\n  width: 44%;\n  height: 7%;\n  left: 28%;\n  right: 28%;\n  top: 79%;\n  bottom: 14%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  background: #4C67F6;\n  border-radius: 6px;\n}\n#donate_footer_text {\n  position: absolute;\n  width: 65%;\n  height: 3%;\n  right: 23%;\n  left: 12%;\n  top: 93%;\n  bottom: 2%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 2.7vmin;\n  line-height: 4vmin;\n  text-align: center;\n  text-transform: uppercase;\n  color: rgba(255, 110, 0, 0.8);\n}\n#sun_img {\n  position: absolute;\n  position: absolute;\n  width: 10%;\n  height: 5%;\n  right: 15%;\n  left: 75%;\n  top: 93%;\n  bottom: 2%;\n  color: rgba(255, 110, 0, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBRU47QUFBSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRU47QUFBSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRU47QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUVBLGNBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFUSw4RUFBQTtFQUNSLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFIRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFUSwrRUFBQTtFQUNSLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsY0FBQTtBQUxGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBUkY7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRVEsK0VBQUE7RUFDUixxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLDZCQUFBO0FBVkY7QUFhQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSw2QkFBQTtBQVhGIiwiZmlsZSI6ImRvbmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGlvbi1pbWcge1xuICAgICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICBtYXgtd2lkdGg6IDMwdnc7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuXG4jbGVmdF9hcnJvd3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6MCU7XG4gIGxlZnQ6MjUlO1xuICBoZWlnaHQ6IDIlO1xuICB3aWR0aDo3NSU7XG4gIHRvcDoxMCU7XG4gIGJvdHRvbTo4OCU7XG59XG5cbiNyaWdodF9hcnJvd3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMCU7XG4gIHJpZ2h0OjI1JTtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAyJTtcbiAgdG9wOiAxNSU7XG4gIGJvdHRvbTo4MyU7XG59XG5cbiNpbnNwaXJlZF90aXRsZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDclO1xuICBsZWZ0OiAxMCU7XG4gIHJpZ2h0OiAzMCU7XG4gIHRvcDogMjMlO1xuICBib3R0b206IDcwJTtcblxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA2LjV2bWluO1xuICBsaW5lLWhlaWdodDogNS41dm1pbjtcblxuICBjb2xvcjogI0ZGNkUwMDtcbn1cblxuI2RvbmF0ZV90aXRsZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgbGVmdDogMTAlO1xuICByaWdodDogNDAlO1xuICB0b3A6IDI3JTtcbiAgYm90dG9tOiA2MyU7XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMy41dm1pbjtcbiAgbGluZS1oZWlnaHQ6IDE3dm1pbjtcblxuICBjb2xvcjogIzNGMzM1Njtcbn1cblxuI2RvbmF0ZV9pbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM4JTtcbiAgbGVmdDogNTYuNTElO1xuICByaWdodDogNS40OSU7XG4gIHRvcDogMjYlO1xufVxuXG4jZG9uYXRlX2Rlc2NyaXB0aW9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMzklO1xuICBsZWZ0OiAxMCU7XG4gIHJpZ2h0OiAxNSU7XG4gIHRvcDogNTAlO1xuICBib3R0b206IDIxJTtcblxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDQuN3ZtaW47XG4gIGxpbmUtaGVpZ2h0OiA1LjV2bWluO1xuXG4gIGNvbG9yOiAjM0YzMzU2O1xufVxuXG4jZG9uYXRlX2J1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDQlO1xuICBoZWlnaHQ6IDclO1xuICBsZWZ0OiAyOCU7XG4gIHJpZ2h0OiAyOCU7XG4gIHRvcDogNzklO1xuICBib3R0b206IDE0JTtcblxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNHZtaW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBjb2xvcjogI0ZGRkZGRjtcblxuICBiYWNrZ3JvdW5kOiAjNEM2N0Y2O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbiNkb25hdGVfZm9vdGVyX3RleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2NSU7XG4gIGhlaWdodDogMyU7XG4gIHJpZ2h0OiAyMyU7XG4gIGxlZnQ6IDEyJTtcbiAgdG9wOiA5MyU7XG4gIGJvdHRvbTogMiU7XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIuN3ZtaW47XG4gIGxpbmUtaGVpZ2h0OiA0dm1pbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGNvbG9yOiByZ2JhKDI1NSwgMTEwLCAwLCAwLjgpO1xufVxuXG4jc3VuX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDUlO1xuICByaWdodDogMTUlO1xuICBsZWZ0OiA3NSU7XG4gIHRvcDogOTMlO1xuICBib3R0b206IDIlO1xuXG4gIGNvbG9yOiByZ2JhKDI1NSwgMTEwLCAwLCAwLjgpO1xufSJdfQ== */");

/***/ }),

/***/ 8051:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content style=\"overflow:hidden\">\n  <ion-grid>\n    <ion-row>\n      <img src=\"./assets/arrow-left.png\" id=\"left_arrows\" />\n    </ion-row>\n    <ion-row>\n      <img src=\"./assets/arrow-right.png\" id=\"right_arrows\" />\n    </ion-row>\n    <ion-row>\n      <ion-text id=\"inspired_title\">\n        Inspired to Give\n      </ion-text>\n    </ion-row>\n    <ion-row>\n      <ion-text id=\"donate_title\">\n        Donate <br> Now\n      </ion-text>\n      <img src=\"./assets/donation-box.png\" id=\"donate_img\"/>\n    </ion-row>\n    <ion-row>\n      <ion-text id=\"donate_description\">\n        With your donation, <br>we can continue to support <br>\n        international students with <br>financial assistance, \n        legal help, <br>and job opportunities, so that they can <br>stay and thrive in the United <br>States.\n      </ion-text>\n    </ion-row>\n    <ion-row>\n      <ion-button id=\"donate_button\" href=\"https://www.paypal.com/donate?hosted_button_id=SXQDLBKH55C42\">\n        Donate\n      </ion-button>\n    </ion-row>\n    <ion-row>\n      <ion-text id=\"donate_footer_text\">\n        HELP INTERNATIONAL STUDENTS <br>REACH FOR THE AMERICAN DREAM\n      </ion-text>\n      <ion-icon id=\"sun_img\" name=\"sunny-outline\"></ion-icon>\n    </ion-row>\n  </ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_donate_donate_module_ts.js.map