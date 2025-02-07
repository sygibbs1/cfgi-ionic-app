(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_donate_donate_module_ts"],{

/***/ 38620:
/*!*************************************************!*\
  !*** ./src/app/donate/donate-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePageRoutingModule": () => (/* binding */ DonatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donate.page */ 70216);




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

/***/ 53589:
/*!*****************************************!*\
  !*** ./src/app/donate/donate.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePageModule": () => (/* binding */ DonatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-lottie */ 52800);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _donate_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donate-routing.module */ 38620);
/* harmony import */ var _donate_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate.page */ 70216);








let DonatePageModule = class DonatePageModule {
};
DonatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ng_lottie__WEBPACK_IMPORTED_MODULE_0__.LottieAnimationViewModule,
            _donate_routing_module__WEBPACK_IMPORTED_MODULE_1__.DonatePageRoutingModule
        ],
        declarations: [_donate_page__WEBPACK_IMPORTED_MODULE_2__.DonatePage]
    })
], DonatePageModule);



/***/ }),

/***/ 70216:
/*!***************************************!*\
  !*** ./src/app/donate/donate.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonatePage": () => (/* binding */ DonatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_donate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./donate.page.html */ 98051);
/* harmony import */ var _donate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donate.page.scss */ 24686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




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

/***/ 24686:
/*!*****************************************!*\
  !*** ./src/app/donate/donate.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".welcome-card {\n  max-width: 50vw;\n  margin-left: auto;\n  margin-right: auto;\n}\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n.welcome-card ion-card-header {\n  max-width: 30vw;\n  margin: auto;\n}\n.welcome-card ion-card-content {\n  max-width: 30vw;\n  margin: auto;\n}\n#left_arrows {\n  position: absolute;\n  right: 0%;\n  scale: 6;\n  left: 25%;\n  height: 10%;\n  width: 75%;\n  top: 13%;\n  bottom: 88%;\n}\n#right_arrows {\n  position: absolute;\n  left: 0%;\n  scale: 6;\n  right: 25%;\n  width: 75%;\n  height: 10%;\n  top: 18%;\n  bottom: 83%;\n}\n#inspired_title {\n  position: absolute;\n  width: 60%;\n  height: 7%;\n  left: 10%;\n  right: 30%;\n  top: 23%;\n  bottom: 70%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  font-size: 6.5vmin;\n  line-height: 5.5vmin;\n  color: #FF6E00;\n}\n#donate_title {\n  position: absolute;\n  width: 50%;\n  height: 10%;\n  left: 10%;\n  right: 40%;\n  top: 27%;\n  bottom: 63%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 13.5vmin;\n  line-height: 17vmin;\n  color: #3F3356;\n}\n#donate_img {\n  position: absolute;\n  width: 38%;\n  scale: 1;\n  left: 53.51%;\n  right: 8.49%;\n  top: 23%;\n}\n#donate_description {\n  position: absolute;\n  width: 75%;\n  height: 39%;\n  left: 10%;\n  right: 15%;\n  top: 50%;\n  bottom: 21%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n  font-size: 4.7vmin;\n  line-height: 5.5vmin;\n  color: #3F3356;\n}\n#donate_button {\n  position: absolute;\n  width: 44%;\n  height: 7%;\n  left: 28%;\n  right: 28%;\n  top: 79%;\n  bottom: 14%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  text-align: center;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  background: #4C67F6;\n  border-radius: 6px;\n}\n#donate_footer_text {\n  position: absolute;\n  width: 65%;\n  height: 3%;\n  right: 23%;\n  left: 12%;\n  top: 93%;\n  bottom: 2%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 2.7vmin;\n  line-height: 4vmin;\n  text-align: center;\n  text-transform: uppercase;\n  color: rgba(255, 110, 0, 0.8);\n}\n#sun_img {\n  position: absolute;\n  position: absolute;\n  width: 10%;\n  height: 5%;\n  right: 15%;\n  left: 75%;\n  top: 93%;\n  bottom: 2%;\n  color: rgba(255, 110, 0, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBRU47QUFBSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRU47QUFBSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRU47QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsY0FBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVRLDhFQUFBO0VBQ1IsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFIRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFUSwrRUFBQTtFQUNSLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsY0FBQTtBQUxGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBUkY7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRVEsK0VBQUE7RUFDUixxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLDZCQUFBO0FBVkY7QUFhQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSw2QkFBQTtBQVhGIiwiZmlsZSI6ImRvbmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwdnc7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGlvbi1pbWcge1xuICAgICAgbWF4LWhlaWdodDogMzV2aDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICBtYXgtd2lkdGg6IDMwdnc7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgbWF4LXdpZHRoOiAzMHZ3O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuXG4jbGVmdF9hcnJvd3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6MCU7XG4gIHNjYWxlOiA2O1xuICBsZWZ0OjI1JTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOjc1JTtcbiAgdG9wOjEzJTtcbiAgYm90dG9tOjg4JTtcbn1cblxuI3JpZ2h0X2Fycm93c3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwJTtcbiAgc2NhbGU6IDY7XG4gIHJpZ2h0OjI1JTtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHRvcDogMTglO1xuICBib3R0b206ODMlO1xufVxuXG4jaW5zcGlyZWRfdGl0bGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA3JTtcbiAgbGVmdDogMTAlO1xuICByaWdodDogMzAlO1xuICB0b3A6IDIzJTtcbiAgYm90dG9tOiA3MCU7XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNi41dm1pbjtcbiAgbGluZS1oZWlnaHQ6IDUuNXZtaW47XG5cbiAgY29sb3I6ICNGRjZFMDA7XG59XG5cbiNkb25hdGVfdGl0bGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGxlZnQ6IDEwJTtcbiAgcmlnaHQ6IDQwJTtcbiAgdG9wOiAyNyU7XG4gIGJvdHRvbTogNjMlO1xuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTMuNXZtaW47XG4gIGxpbmUtaGVpZ2h0OiAxN3ZtaW47XG5cbiAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNkb25hdGVfaW1ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzOCU7XG4gIHNjYWxlOiAxO1xuICBsZWZ0OiA1My41MSU7XG4gIHJpZ2h0OiA4LjQ5JTtcbiAgdG9wOiAyMyU7XG59XG5cbiNkb25hdGVfZGVzY3JpcHRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAzOSU7XG4gIGxlZnQ6IDEwJTtcbiAgcmlnaHQ6IDE1JTtcbiAgdG9wOiA1MCU7XG4gIGJvdHRvbTogMjElO1xuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNC43dm1pbjtcbiAgbGluZS1oZWlnaHQ6IDUuNXZtaW47XG5cbiAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNkb25hdGVfYnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0NCU7XG4gIGhlaWdodDogNyU7XG4gIGxlZnQ6IDI4JTtcbiAgcmlnaHQ6IDI4JTtcbiAgdG9wOiA3OSU7XG4gIGJvdHRvbTogMTQlO1xuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0dm1pbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGNvbG9yOiAjRkZGRkZGO1xuXG4gIGJhY2tncm91bmQ6ICM0QzY3RjY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuI2RvbmF0ZV9mb290ZXJfdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAzJTtcbiAgcmlnaHQ6IDIzJTtcbiAgbGVmdDogMTIlO1xuICB0b3A6IDkzJTtcbiAgYm90dG9tOiAyJTtcblxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMi43dm1pbjtcbiAgbGluZS1oZWlnaHQ6IDR2bWluO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgY29sb3I6IHJnYmEoMjU1LCAxMTAsIDAsIDAuOCk7XG59XG5cbiNzdW5faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogNSU7XG4gIHJpZ2h0OiAxNSU7XG4gIGxlZnQ6IDc1JTtcbiAgdG9wOiA5MyU7XG4gIGJvdHRvbTogMiU7XG5cbiAgY29sb3I6IHJnYmEoMjU1LCAxMTAsIDAsIDAuOCk7XG59Il19 */");

/***/ }),

/***/ 98051:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content style=\"overflow:hidden\">\n  <ion-grid>\n    <ion-row>\n      <img src=\"./assets/arrow-left.svg\" id=\"left_arrows\" />\n    </ion-row>\n    <ion-row>\n      <img src=\"./assets/arrow-right.svg\" id=\"right_arrows\" />\n    </ion-row>\n    <ion-row>\n      <ion-text id=\"inspired_title\">\n        Inspired to Give\n      </ion-text>\n    </ion-row>\n    <ion-row>\n      <ion-text id=\"donate_title\">\n        Donate <br> Now\n      </ion-text>\n      <script src=\"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js\"></script>\n      <lottie-player src=\"https://assets7.lottiefiles.com/packages/lf20_m3jxbvag.json\"  id=\"donate_img\" background=\"transparent\"  speed=\"1\"  renderer=\"svg\" style=\"width: 200px; height: 200px;\"  loop autoplay></lottie-player>\n      <!--<img src=\"./assets/donation-box.svg\" id=\"donate_img\"/>-->\n    </ion-row>\n    <ion-row>\n      <ion-text id=\"donate_description\">\n        With your donation, <br>we can continue to support <br>\n        international students with <br>financial assistance, \n        legal help, <br>and job opportunities, so that they can stay and thrive in the United States.\n      </ion-text>\n    </ion-row>\n    <ion-row>\n      <ion-button id=\"donate_button\" href=\"https://www.paypal.com/donate?hosted_button_id=SXQDLBKH55C42\">\n        Donate\n      </ion-button>\n    </ion-row>\n    <ion-row>\n      <ion-text id=\"donate_footer_text\">\n        HELP INTERNATIONAL STUDENTS <br>REACH FOR THE AMERICAN DREAM\n      </ion-text>\n      <ion-icon id=\"sun_img\" name=\"sunny-outline\"></ion-icon>\n    </ion-row>\n  </ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_donate_donate_module_ts.js.map