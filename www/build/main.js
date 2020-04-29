webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin-profile/admin-profile.module": [
		153
	],
	"../pages/dashboard/dashboard.module": [
		154
	],
	"../pages/modal/modal.module": [
		155
	],
	"../pages/no-internet/no-internet.module": [
		157
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfilePageModule", function() { return AdminProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_profile__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminProfilePageModule = /** @class */ (function () {
    function AdminProfilePageModule() {
    }
    AdminProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_profile__["a" /* AdminProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_profile__["a" /* AdminProfilePage */]),
            ],
        })
    ], AdminProfilePageModule);
    return AdminProfilePageModule;
}());

//# sourceMappingURL=admin-profile.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, modalCtrl, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.ionicApp = ionicApp;
        this.isEnabled = false;
    }
    ModalPage.prototype.closeModal = function () {
        var activeModal = this.ionicApp._modalPortal.getActive();
        if (activeModal) {
            activeModal.dismiss();
            return;
        }
    };
    ModalPage.prototype.allowEdit = function () {
        this.isEnabled = true;
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/home/sisk/Desktop/gvwala/src/pages/modal/modal.html"*/'<div class="modal fontChange">\n    <div class="modal-body">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-10 style="font-size: 18px; text-align: center; margin-top: -2px;">\n                    <b>Admin Details</b>\n                </ion-col>\n                <ion-col col-2>\n                    <img (click)="closeModal()" src="assets/svg/close.svg" alt="Close" style="width: 20px; height: 20px; display: block; margin: auto;">\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-grid style="font-size: 14px; margin-bottom: 20px;">\n            <b>\n            <ion-row class="ionRowMargin">\n                <ion-col col-5 class="ionColColor" style="text-align: center;"><div style="margin-top: 10px;">Date</div></ion-col>\n                <ion-col col-7 class="ionColColor">\n                    <ion-input [disabled]="!isEnabled" value="26-04-1996"></ion-input>\n                </ion-col>\n            </ion-row>\n            <ion-row class="ionRowMargin" style="text-align: center;">\n                <ion-col col-5 class="ionColColor"><div style="margin-top: 10px;">Assigned To</div></ion-col>\n                <ion-col col-7 class="ionColColor">\n                    <ion-input type="text" [disabled]="!isEnabled" value="Jyoti Vishwakarma"></ion-input>\n                </ion-col>\n            </ion-row>\n            <ion-row class="ionRowMargin" style="text-align: center;">\n                <ion-col col-5 class="ionColColor"><div style="margin-top: 10px;">Assigned By</div></ion-col>\n                <ion-col col-7 class="ionColColor">\n                    <ion-input type="text" [disabled]="!isEnabled" value="Shraddha Jadhav"></ion-input>\n                </ion-col>\n            </ion-row>\n            <ion-row class="ionRowMargin" style="text-align: center;">\n                <ion-col col-5 class="ionColColor"><div style="margin-top: 10px;">Credit Points</div></ion-col>\n                <ion-col col-7 class="ionColColor">\n                    <ion-input type="text" [disabled]="!isEnabled" value="1000"></ion-input>\n                </ion-col>\n            </ion-row>\n            <ion-row class="ionRowMargin" style="text-align: center;">\n                <ion-col col-5 class="ionColColor"><div style="margin-top: 10px;">Cr./Dr.</div></ion-col>\n                <ion-col col-7 class="ionColColor">\n                    <ion-input type="text" [disabled]="!isEnabled" value="Credit"></ion-input>\n                </ion-col>\n            </ion-row>\n            </b>\n        </ion-grid>\n\n        <div style="font-size: 16px; width: 250px; margin-left: auto; margin-right: auto;">\n            <button (click)="allowEdit()" style="background-color: #B33536; width: 100px; height: 35px; margin-right: 5px; color: white;"><b>Edit</b></button>\n            <button style="width: 100px; height: 35px; background-color: lightslategray; color: white;"><b>Delete</b></button>\n        </div>\n    </div>\n</div>\n<div class="modal-background"></div>'/*ion-inline-end:"/home/sisk/Desktop/gvwala/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoInternetPageModule", function() { return NoInternetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_internet__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoInternetPageModule = /** @class */ (function () {
    function NoInternetPageModule() {
    }
    NoInternetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__no_internet__["a" /* NoInternetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__no_internet__["a" /* NoInternetPage */]),
            ],
        })
    ], NoInternetPageModule);
    return NoInternetPageModule;
}());

//# sourceMappingURL=no-internet.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoInternetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoInternetPage = /** @class */ (function () {
    function NoInternetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoInternetPage.prototype.ngOnInit = function () {
        this.checkInternet();
    };
    NoInternetPage.prototype.checkInternet = function () {
        if (navigator.onLine) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        }
        else {
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }
    };
    NoInternetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-no-internet',template:/*ion-inline-start:"/home/sisk/Desktop/gvwala/src/pages/no-internet/no-internet.html"*/'<ion-content padding>\n  <img src="assets/imgs/wifi-no-internet.png" alt="No-Internet" style="margin: auto; display: block; width: 250px; height: 250px; background-color: white;"><br>\n  <h3 style="text-align: center;"><b>No Internet</b></h3>\n  <p style="text-align: center; font-size: 15px;">Please connect to the internet to view more</p>\n  <button style="display: block; margin: auto;" ion-button round color="dark" (click)="checkInternet()">RETRY</button>\n\n</ion-content>'/*ion-inline-end:"/home/sisk/Desktop/gvwala/src/pages/no-internet/no-internet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NoInternetPage);
    return NoInternetPage;
}());

//# sourceMappingURL=no-internet.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_no_internet_no_internet_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_profile_admin_profile_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_product_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal_module__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin-profile/admin-profile.module#AdminProfilePageModule', name: 'AdminProfilePage', segment: 'admin-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no-internet/no-internet.module#NoInternetPageModule', name: 'NoInternetPage', segment: 'no-internet', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_no_internet_no_internet_module__["NoInternetPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_admin_profile_admin_profile_module__["AdminProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_modal_module__["ModalPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__services_product_service__["a" /* ProductService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_profile_admin_profile__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modal_modal__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_no_internet_no_internet__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, productService, modalCtrl) {
        this.productService = productService;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_no_internet_no_internet__["a" /* NoInternetPage */];
        this.menuList = [];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        this.menuList = this.productService.getTextImageList();
    };
    MyApp.prototype.goToPage = function (index) {
        this.pageText = this.productService.getSpecificDetailText(index);
        if (this.pageText === "Admin Profile") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_admin_profile_admin_profile__["a" /* AdminProfilePage */]);
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_admin_profile_admin_profile__["a" /* AdminProfilePage */]);
        }
        else if (this.pageText === "Dashboard") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */]);
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_dashboard_dashboard__["a" /* DashboardPage */]);
        }
        else {
            console.log(this.pageText);
        }
    };
    MyApp.prototype.showModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_modal_modal__["a" /* ModalPage */]);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sisk/Desktop/gvwala/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-content class="fontChange">\n        <ion-list no-lines>\n            <div (click)="showModal()">\n            <ion-item class="fontChange" style="border-bottom: 2px; border-color: black; border-style: solid;">\n                <ion-icon>\n                    <img src="assets/svg/admin.svg" alt="Admin" style="width: 35px; height: 35px;">\n                </ion-icon>\n                <b style="font-size: 12px; margin-left: 20px;">Admin</b>\n            </ion-item>\n        </div>\n            <ion-item *ngFor="let entry of menuList; let i=index" (click)="goToPage(i)">\n                <ion-icon item-start>\n                    <img src="{{ entry.image }}" alt="{{ entry.text }}" style="width: 35px; height: 35px;">\n                </ion-icon>\n                <b style="font-size: 12px;">{{ entry.text }}</b>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/sisk/Desktop/gvwala/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminProfilePage = /** @class */ (function () {
    function AdminProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tableData = [{
                asgnTo: 'Jyoti Vishwakarma',
                asgnBy: 'Shraddha Jadhav',
                creditPoints: '1000',
                option: 'Credit',
                viewImage: 'assets/svg/eyeGreen.svg'
            },
            {
                asgnTo: 'Jyoti Vishwakarma',
                asgnBy: 'Shraddha Jadhav',
                creditPoints: '1000',
                option: 'Credit',
                viewImage: 'assets/svg/eyeGreen.svg'
            },
            {
                asgnTo: 'Jyoti Vishwakarma',
                asgnBy: 'Shraddha Jadhav',
                creditPoints: '1000',
                option: 'Credit',
                viewImage: 'assets/svg/eyeGreen.svg'
            },
            {
                asgnTo: 'Jyoti Vishwakarma',
                asgnBy: 'Shraddha Jadhav',
                creditPoints: '1000',
                option: 'Credit',
                viewImage: 'assets/svg/eyeGreen.svg'
            },
            {
                asgnTo: 'Jyoti Vishwakarma',
                asgnBy: 'Shraddha Jadhav',
                creditPoints: '1000',
                option: 'Credit',
                viewImage: 'assets/svg/eyeGreen.svg'
            },
            {
                asgnTo: 'Jyoti Vishwakarma',
                asgnBy: 'Shraddha Jadhav',
                creditPoints: '1000',
                option: 'Credit',
                viewImage: 'assets/svg/eyeGreen.svg'
            },
            {
                asgnTo: 'Jyoti Vishwakarma',
                asgnBy: 'Shraddha Jadhav',
                creditPoints: '1000',
                option: 'Credit',
                viewImage: 'assets/svg/eyeGreen.svg'
            }];
    }
    AdminProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-profile',template:/*ion-inline-start:"/home/sisk/Desktop/gvwala/src/pages/admin-profile/admin-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <img src="assets/svg/menu.svg" alt="Menu" style="width: 35px; height: 35px; padding-top: 5px;">\n      </button>\n    </ion-buttons>\n    <ion-title class="fontChange"><b style="font-size: 18px;">Admin Profile</b></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <img src="assets/svg/notification.svg" alt="Bell" style="width: 35px; height: 35px; padding-top: 5px;">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding class="fontChange">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10>\n        <ion-grid>\n          <ion-row style="font-size: 12px; border-radius: 15px; height: 55px;" class="w3-border w3-card-4">\n            <ion-col col-1>\n              <ion-icon name="md-search" style="margin-top: 15px; margin-left: 10px;"></ion-icon>\n            </ion-col>\n            <ion-col col-11>\n              <ion-input placeholder="Search for gift cards" type="text" style="text-align: left;">\n              </ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n      <ion-col col-2>\n        <ion-icon>\n          <img src="assets/svg/add.svg" alt="Add" style="width: 40px; height: 40px; margin-top: 15px;">\n        </ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <table style="font-size: 12px; table-layout: fixed; width: 100%; margin-top: 10px;">\n    <tr style="text-align: center;">\n      <td style="width: 22%; font-size: 12px;">Filter</td>\n      <td style="font-size: 12px; width: 25%;">\n          Sort\n            <img src="assets/svg/sort-az.svg" alt="Sort-AZ" style="width: 16px; height: 16px;">\n      </td>\n      <td style="font-size: 12px; width: 25%;">\n        Sort\n          <img src="assets/svg/sort-za.svg" alt="Sort-ZA" style="width: 16px; height: 16px;">\n    </td>\n      <td></td>\n      <td></td>\n    </tr>\n    <tr style="text-align: center;  background-color: lightgrey;">\n      <th>Assigned To</th>\n      <th>Assigned By</th>\n      <th>Credit Points</th>\n      <th>Cr./Dr.</th>\n      <th>Action</th>\n    </tr>\n    <tr style="font-size: 12px; text-align: center; word-wrap: normal; color: grey;" *ngFor="let data of tableData">\n      <td><b>{{ data.asgnTo }}</b></td>\n      <td><b>{{ data.asgnBy }}</b></td>\n      <td><b>{{ data.creditPoints }}</b></td>\n      <td><b>{{ data.option }}</b></td>\n      <td><img style="width: 14px; height: 14px; display: block; margin: auto;" src="{{ data.viewImage }}" alt="View"></td>\n    </tr>\n  </table>\n\n</ion-content>'/*ion-inline-end:"/home/sisk/Desktop/gvwala/src/pages/admin-profile/admin-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminProfilePage);
    return AdminProfilePage;
}());

//# sourceMappingURL=admin-profile.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_product_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_profile_admin_profile__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, productService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.gridList = [];
    }
    DashboardPage.prototype.ngOnInit = function () {
        this.gridList = this.productService.getTextImageList();
    };
    DashboardPage.prototype.getPageTitle = function (index) {
        this.pageText = this.productService.getSpecificDetailText(index);
        if (this.pageText === "Admin Profile") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__admin_profile_admin_profile__["a" /* AdminProfilePage */]);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__admin_profile_admin_profile__["a" /* AdminProfilePage */]);
        }
        else {
            console.log(this.pageText);
        }
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/sisk/Desktop/gvwala/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  \n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <img src="assets/svg/menu.svg" alt="Menu" style="width: 35px; height: 35px; padding-top: 5px;">\n      </button>\n    </ion-buttons>\n    <ion-title class="fontChange"><b style="font-size: 18px;">Dashboard</b></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <img src="assets/svg/notification.svg" alt="Bell" style="width: 35px; height: 35px; padding-top: 5px;">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content padding class="fontChange" style="margin-bottom: 20px;">\n  <ion-grid>\n    <ion-row style="font-size: 12px; border-radius: 15px; height: 55px;" class="w3-border w3-card-4">\n      <ion-col col-1>\n        <ion-icon name="md-search" style="margin-left: 10px; margin-top: 15px;"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <ion-input placeholder="Search for gift cards" type="text" style="text-align: left;">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid style="margin-bottom: 50px; margin-left: auto; margin-right: auto;">\n    <ion-row>\n      <ion-col col-4 *ngFor="let grid of gridList; let i = index">\n        <div style="border-radius: 10px; height: 90%;" class="w3-card-4" (click)="getPageTitle(i)">\n          <img class="w3-image" style="display: block; margin-top: 20px; margin-bottom: 20px; margin-left: auto; margin-right: auto; padding-top: 20px; width: 65px; height: 65px;" src="{{ grid.image }}" alt="{{ grid.text }}">\n          <p style="font-size: 13px; text-align: center; margin: auto; padding: 10px;">\n            <b>{{ grid.text }}</b>\n          </p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/sisk/Desktop/gvwala/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_product_service__["a" /* ProductService */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductService = /** @class */ (function () {
    function ProductService() {
        this.textImageList = [{
                text: 'Dashboard',
                image: 'assets/svg/dashboard.svg'
            },
            {
                text: 'Admin Profile',
                image: 'assets/svg/user.svg'
            },
            {
                text: 'Organisation Profile',
                image: 'assets/svg/connection.svg'
            },
            {
                text: 'Add Employees',
                image: 'assets/svg/worker.svg'
            },
            {
                text: 'View Employees',
                image: 'assets/svg/eyeRed.svg'
            },
            {
                text: 'Update Wallet',
                image: 'assets/svg/wallet.svg'
            },
            {
                text: 'Product',
                image: 'assets/svg/product.svg'
            },
            {
                text: 'Reward',
                image: 'assets/svg/medal.svg'
            },
            {
                text: 'Digital Certificate',
                image: 'assets/svg/certificate.svg'
            },
            {
                text: 'Wall Of Fame',
                image: 'assets/svg/customer.svg'
            },
            {
                text: 'Poll',
                image: 'assets/svg/poll.svg'
            },
            {
                text: 'Announcement',
                image: 'assets/svg/megaphone.svg'
            }];
    }
    ProductService.prototype.getTextImageList = function () {
        return this.textImageList.slice();
    };
    ProductService.prototype.getSpecificDetailText = function (index) {
        return this.textImageList[index].text;
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product.service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map