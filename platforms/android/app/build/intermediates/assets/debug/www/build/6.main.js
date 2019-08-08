webpackJsonp([6],{

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login-page.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, storage, formBuilder, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loginData = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(6)])],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        //hide menu when on the login page, regardless of the screen resolution
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        //use this.loginData.value to authenticate the user
        this.authService.login(this.loginData.value)
            .then(function () { return _this.redirectToHome(); })
            .catch(function (e) { return console.log("login error", e); });
    };
    LoginPage.prototype.redirectToHome = function () {
        this.navCtrl.setRoot('ProfilePage');
        this.menuCtrl.enable(true);
    };
    /**
     * Opens a paage
     *
     * @param page string Page name
     */
    LoginPage.prototype.openPage = function (page) {
        this.navCtrl.push(page);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login-page',template:/*ion-inline-start:"D:\Pawan\Project\ionic3-seed-jwt\src\pages\login-page\login-page.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'page.login\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row justify-content-around>\n\n      <ion-col col-sm-6 col-md-6 col-lg-4 col-xl-3  align-self-center>\n\n        <form [formGroup]="loginData" (ngSubmit)="login()"  *ngIf="!showRoleSelection">\n\n          <ion-item>\n\n            <ion-label floating>{{ \'label.email\' | translate }}:</ion-label>\n\n            <ion-input type="email" formControlName="email"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>{{ \'label.password\' | translate }}:</ion-label>\n\n            <ion-input type="password" formControlName="password"></ion-input>\n\n          </ion-item>\n\n\n\n          <button margin-top ion-button type="submit" [disabled]="!loginData.valid">{{ \'button.login\' | translate }}</button>\n\n\n\n        </form>\n\n    \n\n        <ion-row padding-top>\n\n          <ion-col>\n\n            <button ion-button clear block (click)="openPage(\'RegisterPage\')">{{ \'button.new_registration\' | translate }}</button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button clear block (click)="openPage(\'ForgotPage\')">{{ \'button.forgotten_password\' | translate }}</button>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n      </ion-col>\n\n\n\n    </ion-row>\n\n    \n\n    \n\n    \n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Pawan\Project\ionic3-seed-jwt\src\pages\login-page\login-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */]])
], LoginPage);

//# sourceMappingURL=login-page.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map