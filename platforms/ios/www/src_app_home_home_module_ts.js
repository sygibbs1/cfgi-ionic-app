(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ 7360);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_7__.SwiperModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 5548);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sophie_modal_sophie_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sophie-modal/sophie-modal.page */ 9411);
/* harmony import */ var _david_modal_david_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../david-modal/david-modal.page */ 7685);








let HomePage = class HomePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.swiperConfig = {
            autoplay: { delay: 0 },
            speed: 2000,
        };
        this.swiperConfig2 = {
            centeredSlides: true,
            slidesPerView: 1.5,
            zoom: true,
            grabCursor: true,
            pagination: true
        };
        this.immigrants = [
            {
                "name": "ALBERT EINSTEIN",
                "country": "GERMANY",
                "about": "One of the most recognized and well-known scientists of the century. \
      His theories solved centuries-old-problems in physics and rocked even \
      non-physicists' view of the world. E= mc2",
                "photo": "./assets/albertEinstein.png"
            },
            {
                "name": "CHIEN-SHIUNG WU",
                "country": "CHINA",
                "about": "Chinese-American nuclear physicist Chien-Shiung Wu, also known as 'the First Lady of Physics,' contributed to the Manhattan Project and made history with an experiment that disproved the hypothetical law of conservation of parity.",
                "photo": "./assets/chien-shiungWu.png"
            },
            {
                "name": "NIKOLA TESLA",
                "country": "SERBIA",
                "about": "Futurist who illuminated the earth electrically bright due to his immense contributions in designing the very back-bone of every modern electric supply of today – the alternating current.",
                "photo": "./assets/nikolaTesla.png"
            },
            {
                "name": "CECILIA PAYNE",
                "country": "ENGLAND",
                "about": "Cecilia Payne discovered that stars are made largely of the two lightest chemical elements – hydrogen and helium. She was the most eminent female astronomer of her time, the first to be appointed full professor at Harvard University, and the first to chair a department.",
                "photo": "./assets/ceciliaPayne.png"
            },
            {
                "name": "BOB MARLEY",
                "country": "JAMAICA",
                "about": "Considered one of the pioneers of reggae music. Bob was a freedom fighter he used his Pen instead of gun. He fought for freedom, peace, and equal rights. Marley received The United Nations Peace Medal. Marley’s “One Love” was proclaimed as Song of the Millennium.",
                "photo": "./assets/bobMarley.png"
            },
            {
                "name": "GERTY CORI",
                "country": "CZECH",
                "about": "Carbohydrate research not only led to the development of treatments for diabetes, it also made them winners of the 1947 Nobel Prize in physiology or medicine, and Gerty the first American woman Nobel laureate in science.",
                "photo": "./assets/gertyCori.png"
            },
            {
                "name": "JOSEPH PULITZER",
                "country": "HUNGARY",
                "about": "Best known for the Pulitzer Prizes, which were established in 1917. He was American newspaper editor and publisher who helped to establish the pattern of the modern newspaper. In his time he was one of the most powerful journalists in the United States.",
                "photo": "./assets/josephPulitzer.png"
            },
            {
                "name": "MARIA MAYNER",
                "country": "GERMANY",
                "about": "German-born American theoretical physicist, and Nobel laureate in Physics for proposing the nuclear shell model of the atomic nucleus. She was the second woman to win a Nobel Prize in physics, the first being Marie Curie.",
                "photo": "./assets/mariaMayner.png"
            },
            {
                "name": "HEDY LAMARR",
                "country": "AUSTRIA",
                "about": "Frequency hopping a way of jumping around on radio frequencies in order to avoid a third party jamming your signal. Avid inventor and the person behind advances advances in communication technology that led to today’s Wi-Fi, GPS, and Bluetooth.",
                "photo": "./assets/hedyLamarr.png"
            },
        ];
        this.companies = [
            {
                "name": "Alcorn",
                "icon": "./assets/Alcorn.png",
            },
            {
                "name": "Pranos",
                "icon": "./assets/pranos.png",
            },
            {
                "name": "Fyusion",
                "icon": "./assets/fyusion.png",
            },
            {
                "name": "Welcoming America",
                "icon": "./assets/welcoming_amrica.png",
            },
        ];
    }
    sophieModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _sophie_modal_sophie_modal_page__WEBPACK_IMPORTED_MODULE_3__.SophieModalPage,
                componentProps: {
                    'name': 'The Winter Soldier'
                }
            });
            modal.onDidDismiss().then((modalDataResponse) => {
                if (modalDataResponse !== null) {
                    this.modalDataResponse = modalDataResponse.data;
                    console.log('Modal Sent Data : ' + modalDataResponse.data);
                }
            });
            return yield modal.present();
        });
    }
    davidModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _david_modal_david_modal_page__WEBPACK_IMPORTED_MODULE_4__.DavidModalPage,
                componentProps: {
                    'name': 'The Winter Soldier'
                }
            });
            modal.onDidDismiss().then((modalDataResponse) => {
                if (modalDataResponse !== null) {
                    this.modalDataResponse = modalDataResponse.data;
                    console.log('Modal Sent Data : ' + modalDataResponse.data);
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        swiper__WEBPACK_IMPORTED_MODULE_2__.default.use([swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay]);
        swiper__WEBPACK_IMPORTED_MODULE_2__.default.use([swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination]);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-slides {\n  --bullet-background: #A9A9A9;\n  --bullet-background-active: #F18C7F;\n}\n\nion-content {\n  --ion-background-color: #FFFFFF;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-title {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  color: #F18C7F;\n  font-size: 1.2rem;\n}\n\nion-card {\n  box-shadow: none !important;\n}\n\nion-card-title {\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: 400;\n  font-size: 32px;\n  color: #333333;\n}\n\nion-card-content {\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  color: #333333;\n}\n\nion-row {\n  width: 100%;\n  height: 20px;\n  text-align: center;\n}\n\nion-item {\n  --padding-start: 0px;\n  --inner-padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  --background: none;\n  --border-style: \"none\";\n}\n\n#container {\n  text-align: center;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n.displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#row1 {\n  height: 5%;\n}\n\n#squareSlides {\n  width: 100hw;\n  padding-bottom: 5%;\n}\n\n#built_in_America {\n  scale: 1.1;\n}\n\n#slide_Version2 {\n  scale: 1.1;\n}\n\n#about_us_title {\n  width: 100%;\n  left: 50%;\n  float: right;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 1.3em;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: #F18C7F;\n  text-align: center;\n}\n\n#about_us_decor {\n  float: right;\n}\n\n#partners_row {\n  padding-top: 5%;\n  width: 100%;\n  height: 5%;\n  text-align: left;\n}\n\n#partners_text {\n  width: 100%;\n  left: 15%;\n  position: relative;\n  float: right;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  color: #F18C7F;\n  font-size: 1.2em;\n  letter-spacing: 0.2em;\n}\n\n#whos_helping_Row {\n  padding: 5%;\n  width: 100%;\n  height: 5%;\n  text-align: left;\n}\n\n#whos_helping_text {\n  width: 100%;\n  padding-top: 3%;\n  left: 10%;\n  position: relative;\n  float: right;\n  font-family: Righteous;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 2.3em;\n  line-height: 40px;\n  text-align: left;\n  /* Gray 1 */\n  color: #333333;\n}\n\n#partners_card {\n  top: 10%;\n  width: 100%;\n  height: 40vh;\n}\n\n#meet_row {\n  padding-top: 5%;\n  width: 100%;\n  text-align: right;\n}\n\n#meet_text {\n  width: 100%;\n  top: 30%;\n  right: 20%;\n  position: relative;\n  float: right;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  color: #F18C7F;\n  font-size: 1.5em;\n  letter-spacing: 0.2em;\n}\n\n#founders_row {\n  padding: 5%;\n  width: 100%;\n  text-align: right;\n}\n\n#founders_decor {\n  position: relative;\n  max-height: 7px;\n  width: 33%;\n  right: -1%;\n  top: 2em;\n  float: right;\n}\n\n#founders_text {\n  width: 100%;\n  padding-top: 7%;\n  left: 39%;\n  font-family: Righteous;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 32px;\n  line-height: 40px;\n  text-align: right;\n  /* Gray 1 */\n  color: #333333;\n}\n\n#founders_card {\n  top: 10%;\n  width: 100%;\n  height: 60vh;\n}\n\n#sophie_img {\n  scale: 1.5;\n  position: relative;\n  width: 100%;\n  border-radius: 100%;\n  border: 0.2em solid #FF6059;\n}\n\n#david_img {\n  scale: 1.5;\n  position: relative;\n  width: 100%;\n  border-radius: 100%;\n  border: 0.2em solid #FF6059;\n}\n\n#sopie_text {\n  position: relative;\n  width: 30%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 1.2em;\n  line-height: 1.5em;\n  /* or 200% */\n  text-align: center;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: #FF6059;\n}\n\n#david_text {\n  position: relative;\n  width: 40%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 1.2em;\n  line-height: 1.5em;\n  /* or 200% */\n  text-align: center;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: #FF564F;\n  padding-top: 100%;\n}\n\n#wavy_lines {\n  position: relative;\n  float: left;\n  left: -3%;\n}\n\n#famous_immigrants_title {\n  width: 50%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  color: #FF564F;\n  font-size: 1.2em;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n#in_history_title {\n  position: absolute;\n  width: 100%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  color: #FFFFFF;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: #333333;\n  font-size: 2em;\n  text-transform: uppercase;\n}\n\n#in_history2_title {\n  position: absolute;\n  width: 100%;\n  top: 10%;\n  left: 1%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 2em;\n  line-height: 40px;\n  text-transform: uppercase;\n  color: #333333;\n}\n\n#famous_immigrants_description {\n  width: 90%;\n  padding-top: 10%;\n  padding-bottom: 10%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 600;\n  font-style: italic;\n  color: #ffffff;\n  font-size: 12px;\n}\n\n#immigrant_title {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  color: #FF564F;\n  font-size: 4.6vmin;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\n#immigrant_subtitle {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 500;\n  color: #333333;\n  font-size: 3vmin;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 8px;\n}\n\n#immigrant_content {\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  color: #333333;\n  font-size: 3vmin;\n}\n\n#alignCenter {\n  text-align: center;\n}\n\n#border5 {\n  border: 5px;\n}\n\n#width100 {\n  width: 100%;\n  height: 550px;\n}\n\n#immagrantSlideDeck {\n  height: 75%;\n  text-align: auto;\n  padding-bottom: 10%;\n}\n\n#height90vh {\n  height: 90vh;\n}\n\n#height75 {\n  height: 75px;\n}\n\n#height20 {\n  height: 20px;\n}\n\n#height50 {\n  height: 50px;\n}\n\n#famousImmigrantPicture {\n  width: 100vh;\n  bottom: -40%;\n  scale: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,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LGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXJCRjs7QUF3QkE7RUFDVSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBckJGOztBQXdCQTtFQUNVLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBckJGOztBQXdCQTtFQUNVLCtFQUFBO0VBQ1IscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBckJGOztBQXdCQTtFQUNFLGtCQUFBO0FBckJGOztBQXdCQTtFQUNFLFdBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsWUFBQTtBQXJCRjs7QUF3QkE7RUFDRSxZQUFBO0FBckJGOztBQXdCQTtFQUNFLFlBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsWUFBQTtBQXJCRjs7QUF3QkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFyQkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogI0E5QTlBOTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNGMThDN0Y7XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn19XG5cbmlvbi10aXRsZSB7XG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0YxOEM3RjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG5pb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogXCJub25lXCI7XG59XG5cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbi5kaXNwbGF5ZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICNmZmZmZmY7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNyb3cxe1xuICBoZWlnaHQ6IDUlO1xufVxuXG4jc3F1YXJlU2xpZGVzIHtcbiAgd2lkdGg6MTAwaHc7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cblxuI2J1aWx0X2luX0FtZXJpY2F7XG4gIHNjYWxlOjEuMTtcbn1cblxuI3NsaWRlX1ZlcnNpb24yIHtcbiAgc2NhbGU6MS4xO1xufVxuXG4jYWJvdXRfdXNfdGl0bGV7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4zZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjRjE4QzdGO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuI2Fib3V0X3VzX2RlY29ye1xuICBmbG9hdDpyaWdodDtcbn1cblxuI3BhcnRuZXJzX3Jvd3tcbiAgcGFkZGluZy10b3A6IDUlO1xuICB3aWR0aDogMTAwJTsgXG4gIGhlaWdodDo1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3BhcnRuZXJzX3RleHR7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0YxOEM3RjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4yZW07XG59XG5cbiN3aG9zX2hlbHBpbmdfUm93e1xuICBwYWRkaW5nOiA1JTsgXG4gIHdpZHRoOiAxMDAlOyBcbiAgaGVpZ2h0OjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jd2hvc19oZWxwaW5nX3RleHR7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIGxlZnQ6IDEwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG5cbiAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIuM2VtOztcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgLyogR3JheSAxICovXG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4jcGFydG5lcnNfY2FyZHtcbiAgdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwdmg7XG59XG5cbiNtZWV0X3Jvd3tcbiAgcGFkZGluZy10b3A6IDUlO1xuICB3aWR0aDogMTAwJTsgXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jbWVldF90ZXh0e1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAzMCU7XG4gIHJpZ2h0OiAyMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0YxOEM3RjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4yZW07XG59XG5cbiNmb3VuZGVyc19yb3d7XG4gIHBhZGRpbmc6IDUlOyBcbiAgd2lkdGg6IDEwMCU7IFxuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI2ZvdW5kZXJzX2RlY29ye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDdweDtcbiAgd2lkdGg6MzMlO1xuICByaWdodDogLTElO1xuICB0b3A6IDJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jZm91bmRlcnNfdGV4dHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA3JTtcbiAgbGVmdDogMzklO1xuXG4gIGZvbnQtZmFtaWx5OiBSaWdodGVvdXM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgLyogR3JheSAxICovXG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4jZm91bmRlcnNfY2FyZHtcbiAgdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwdmg7XG59XG5cbiNzb3BoaWVfaW1ne1xuICBzY2FsZToxLjU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLy9maWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0MHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogLjJlbSBzb2xpZCAjRkY2MDU5O1xufVxuXG4jZGF2aWRfaW1ne1xuICBzY2FsZToxLjU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLy9maWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0MHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogLjJlbSBzb2xpZCAjRkY2MDU5O1xufVxuXG4jc29waWVfdGV4dHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHdpZHRoOiAzMCU7XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIC8qIG9yIDIwMCUgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGNvbG9yOiAjRkY2MDU5O1xufVxuXG4jZGF2aWRfdGV4dHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHdpZHRoOiA0MCU7XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIC8qIG9yIDIwMCUgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGNvbG9yOiAjRkY1NjRGO1xuXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xufVxuXG4jd2F2eV9saW5lc3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgbGVmdDotMyU7XG59XG5cbiNmYW1vdXNfaW1taWdyYW50c190aXRsZXtcbiAgd2lkdGg6IDUwJTtcblxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNGRjU2NEY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2luX2hpc3RvcnlfdGl0bGV7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDoxMDAlO1xuICBcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNpbl9oaXN0b3J5Ml90aXRsZXtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjEwMCU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAxJTtcblxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SaWdodGVvdXMmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDJlbTtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4jZmFtb3VzX2ltbWlncmFudHNfZGVzY3JpcHRpb257XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmctdG9wOjEwJTtcbiAgcGFkZGluZy1ib3R0b206MTAlO1xuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbiNpbW1pZ3JhbnRfdGl0bGV7XG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0ZGNTY0RjtcbiAgZm9udC1zaXplOiA0LjZ2bWluO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4jaW1taWdyYW50X3N1YnRpdGxle1xuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogM3ZtaW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuI2ltbWlncmFudF9jb250ZW50e1xuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOml0YWxpYztcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogM3ZtaW47XG59XG5cbiNhbGlnbkNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYm9yZGVyNXtcbiAgYm9yZGVyOiA1cHg7XG59XG5cbiN3aWR0aDEwMHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTUwcHg7XG59XG5cbiNpbW1hZ3JhbnRTbGlkZURlY2t7XG4gIGhlaWdodDogNzUlOyBcbiAgdGV4dC1hbGlnbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuI2hlaWdodDkwdmh7XG4gIGhlaWdodDo5MHZoO1xufVxuXG4jaGVpZ2h0NzV7XG4gIGhlaWdodDogNzVweDtcbn1cblxuI2hlaWdodDIwe1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbiNoZWlnaHQ1MHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jZmFtb3VzSW1taWdyYW50UGljdHVyZXtcbiAgd2lkdGg6MTAwdmg7XG4gIGJvdHRvbTotNDAlO1xuICBzY2FsZTogMS4yO1xufVxuIl19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\n  <!-- List containes all home page items, making it easy to add components in the future -->\n  <ion-list>\n    <!-- Insert row to bring page content below the header -->\n    <ion-item>\n      <ion-row id=\"row1\"></ion-row>\n    </ion-item>\n\n    <!-- What's New Slide Deck -->\n    <ion-slides shape = \"square\" id=\"squareSlides\" [options]=\"{slidesPerView: 1, zoom: true, grabCursor: true}\" pager>\n      <ion-slide id = \"built_in_America\">\n        <ion-col>\n          <ion-card>\n            <img src=\"./assets/builtInAmerica.png\" />\n          </ion-card>\n        </ion-col>\n      </ion-slide>\n  \n      <ion-slide id = \"slide_Version2\">\n        <ion-col>\n          <ion-card>\n            <img src=\"./assets/immigrationStories.png\" />\n          </ion-card>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- About Us Section Title -->\n    <img  style=\"padding-top:10%\" id= \"about_us_decor\" src=\"./assets/yellowLine.png\" />\n    <ion-row>\n      <ion-text id = \"about_us_title\">\n        ABOUT US\n      </ion-text>\n    </ion-row>\n      \n\n    <!-- What we Do card-->\n    <ion-card id = \"alignCenter\">\n      <ion-card-header>\n        <ion-card-title>WHAT WE DO</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        International students are struggling with \n        all the recent uncertainty around policy \n        changes and the threat of deportation, \n        many don't know where to turn.\n      </ion-card-content>\n      <ion-card-content>\n        We are a non-profit organization that provides \n        a list of companies that hire foriegn nationals. \n        We offer qualifying students need-based financial \n        assistance, an online networking community in \n        addition to volunteering opportunities to gain \n        work experience.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item>\n      <ion-row id=\"height75\">\n        <ion-col>\n          <img id = \"wavy_lines\" src=\"./assets/wavyLines.png\" />\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-list>\n    <!-- Famous Immigrants Section: -->\n    <!-- Information transferred from the website @ cfgi.world -->\n    <ion-row style=\"padding-top:5%\">\n      <ion-col>\n        <img id=\"famousImmigrantPicture\" src=\"./assets/sunrise_shape.png\" />\n      </ion-col>\n    </ion-row>\n    \n    <ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-text id = \"famous_immigrants_title\">\n            Famous Immigrants\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row id=\"height50\">\n        <div style=\"text-align:center\">\n          <ion-text id = \"in_history2_title\">\n            IN U.S. HISTORY\n          </ion-text>\n          <ion-text id = \"in_history_title\">\n            IN U.S. HISTORY\n          </ion-text>\n        </div>\n      </ion-row>\n    </ion-item>\n    <ion-row style=\"padding-top: 5%\">\n      <ion-col>\n        <div>\n          <ion-text id = \"famous_immigrants_description\">\n            In the past, we have always drawn strength from the brightest and most dedicated people coming here and reaching for the American dream. Many of the world's most productive scientists and engineers are foreign-born, so the United States is always at the forefront of global innovation.  Here are some you may already know:\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n\n  <ion-row style=\"padding-top: 25%\" id=\"immagrantSlideDeck\">\n    <swiper [config]=\"swiperConfig2\" id=\"height90vh\">\n      <ng-template *ngFor=\"let immigrant of immigrants\" swiperSlide id=\"border5\">\n        <ion-col >\n          <ion-card id=\"width100\">\n            <img src={{immigrant.photo}} />\n            <ion-card-header>\n              <ion-card-title id = \"immigrant_title\">{{immigrant.name}}</ion-card-title>\n              <ion-card-subtitle id = \"immigrant_subtitle\">{{immigrant.country}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content id = \"immigrant_content\">\n              {{immigrant.about}}\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-template>\n      <div class=\"swiper-pagination\"></div>\n    </swiper>\n  </ion-row>\n      \n  <!-- Whos helping title-->\n  <ion-row id=\"partners_row\">\n    <ion-text id= \"partners_text\">PARTNERS</ion-text>\n  </ion-row>\n  <ion-row id=\"whos_helping_row\">\n    <ion-text id= \"whos_helping_text\">Who's helping</ion-text>\n  </ion-row>\n  \n  <ion-item>\n    <ion-card id=\"partners_card\">\n      <ion-card-content>\n        Take a look at the companies that are supporting diversity in recruitment. They believe everyone should have an equal opportunity to succeed.<br><br>Does your company want to be on this list?\n      </ion-card-content>\n      <swiper [config]=\"swiperConfig\" [loop]=\"true\">\n        <ng-template *ngFor=\"let company of companies\" swiperSlide>\n          <div class=\"slide-container\"><img src=\"{{company.icon}}\"></div>\n        </ng-template>\n      </swiper>\n    </ion-card>\n  </ion-item>\n\n  <!-- Meet the founders title-->\n  <ion-row id=\"meet_row\">\n    <ion-text id= \"meet_text\">MEET</ion-text>\n  </ion-row>\n  <img id= \"founders_decor\" src=\"./assets/yellowLine.png\" />\n  <ion-row id=\"founders_row\">\n    <ion-text id= \"founders_text\">The Founders</ion-text>\n  </ion-row>\n\n  <!-- Founders card -->\n  <ion-item>\n    <ion-card id=\"founders_card\">\n      <ion-row style=\"height:100%\">\n        <ion-col style=\"height:100%; padding-top:5%; padding-left:5%\">\n          <ion-card-content style=\"padding-bottom:30%\">\n            <img (click)=\"davidModal()\" id=\"david_img\" src=\"./assets/David.png\"/>\n            <p *ngIf=\"modalDataResponse\">{{modalDataResponse}}</p>\n          </ion-card-content>\n          <ion-text id=\"david_text\">\n            David<br>Vargas\n          </ion-text>\n        </ion-col>\n        <ion-col style=\"height:100%; padding-top:40%; padding-right:5%\">\n          <ion-card-content style=\"padding-bottom:30%\">\n            <img (click)=\"sophieModal()\" id=\"sophie_img\" src=\"./assets/Sophie.png\"/>\n            <p *ngIf=\"modalDataResponse\">{{modalDataResponse}}</p>\n          </ion-card-content>\n          <ion-text id=\"sopie_text\">\n            Sophie<br>Alcorn\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-item>\n  </ion-list>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map