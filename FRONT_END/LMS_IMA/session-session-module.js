(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-session-module"],{

/***/ "2p35":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/session/forgot-password/forgot-password-component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gene-forgot gene-session pad-y-xl\">\r\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n      <div fxLayout=\"column\"  fxFlex.xl=\"450px\" fxFlex.lg=\"450px\" fxFlex.md=\"450px\" fxFlex.sm=\"450px\"  fxFlex.xs=\"100\" class=\"gene-forget-pass\">\r\n         <mat-card>\r\n            <div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n               <div class=\"login-logo\">\r\n               <img src=\"assets/img/logo.png\" width=\"180\" height=\"57\">\r\n               </div>\r\n            </div>\r\n            <form #form=\"ngForm\" (ngSubmit)=\"send(form.value)\">\r\n               <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\r\n                     <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n                  </mat-form-field>\r\n                  <button color=\"primary\" mat-raised-button [disabled]=\"!form.valid\" class=\"primary-bg\">{{'RECOVER PASSWORD'|translate}}</button>\r\n                  <p style=\"text-align: center;\"><a [routerLink]=\"['/session/login']\">{{'Back to login'|translate}}</a></p>\r\n               </div>\r\n            </form>\r\n            </div>\r\n         </mat-card>\r\n      </div>\r\n   </div>\r\n</div>");

/***/ }),

/***/ "5ld8":
/*!****************************************************************!*\
  !*** ./src/app/session/lockscreenV2/lockscreenV2.component.ts ***!
  \****************************************************************/
/*! exports provided: LockScreenV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenV2Component", function() { return LockScreenV2Component; });
/* harmony import */ var _raw_loader_lockscreenV2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./lockscreenV2-component.html */ "gaDR");
/* harmony import */ var _lockscreenV2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lockscreenV2-component.scss */ "Zd1o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LockScreenV2Component = /** @class */ (function () {
    function LockScreenV2Component(router, translate) {
        this.router = router;
        this.translate = translate;
    }
    // when submit button click, router navigates to a home page.
    LockScreenV2Component.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    LockScreenV2Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    LockScreenV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-lockscreen',
            template: _raw_loader_lockscreenV2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [_lockscreenV2_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], LockScreenV2Component);
    return LockScreenV2Component;
}());



/***/ }),

/***/ "7dfE":
/*!*******************************************!*\
  !*** ./src/app/session/session.module.ts ***!
  \*******************************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "voE3");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.component */ "wNce");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "SoY3");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "BF9I");
/* harmony import */ var _lockscreenV2_lockscreenV2_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lockscreenV2/lockscreenV2.component */ "5ld8");
/* harmony import */ var _forgot_passwordV2_forgot_passwordV2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forgot-passwordV2/forgot-passwordV2.component */ "feaf");
/* harmony import */ var _registerV2_registerV2_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./registerV2/registerV2.component */ "HOGO");
/* harmony import */ var _loginV2_loginV2_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./loginV2/loginV2.component */ "DrNT");
/* harmony import */ var _session_routing__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./session.routing */ "Fnv1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















;





var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"],
                _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_19__["LockScreenComponent"],
                _loginV2_loginV2_component__WEBPACK_IMPORTED_MODULE_23__["LoginV2Component"],
                _registerV2_registerV2_component__WEBPACK_IMPORTED_MODULE_22__["RegisterV2Component"],
                _lockscreenV2_lockscreenV2_component__WEBPACK_IMPORTED_MODULE_20__["LockScreenV2Component"],
                _forgot_passwordV2_forgot_passwordV2_component__WEBPACK_IMPORTED_MODULE_21__["ForgotPasswordV2Component"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_session_routing__WEBPACK_IMPORTED_MODULE_24__["SessionRoutes"]),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_13__["SlickCarouselModule"]
            ],
            providers: []
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "BF9I":
/*!************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen.component.ts ***!
  \************************************************************/
/*! exports provided: LockScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenComponent", function() { return LockScreenComponent; });
/* harmony import */ var _raw_loader_lockscreen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./lockscreen-component.html */ "BYD2");
/* harmony import */ var _lockscreen_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lockscreen-component.scss */ "bdjn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LockScreenComponent = /** @class */ (function () {
    function LockScreenComponent(router, translate) {
        this.router = router;
        this.translate = translate;
    }
    // when submit button click, router navigates to a home page.
    LockScreenComponent.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    LockScreenComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    LockScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-lockscreen',
            template: _raw_loader_lockscreen_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [_lockscreen_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], LockScreenComponent);
    return LockScreenComponent;
}());



/***/ }),

/***/ "BYD2":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/session/lockscreen/lockscreen-component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gene-user-section gene-session gene-lockscreen pad-y-xl\">\r\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n      <div fxLayout=\"column\" fxFlex.xl=\"540px\" fxFlex.lg=\"540px\" fxFlex.md=\"540px\" fxFlex.sm=\"540px\"  fxFlex.xs=\"100\">\r\n         <mat-card>\r\n            <mat-card-content>\r\n               <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <h2 class=\"text-center  mrgn-b-lg warn-text\">Session Expired !</h2>\r\n                  <div class=\"login-logo text-center\">\r\n                     <img class=\"img-circle\" src=\"assets/img/user-1.jpg\" alt=\"user\" title=\"user\"/>\r\n                  </div>\r\n                     <h4 class=\"text-center\">John Doe</h4>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"space-around\">\r\n                     <div>\r\n                     <mat-form-field class=\"full-wid mrgn-b-sm\">\r\n                        <input matInput placeholder=\"Username\" name=\"username\" required [(ngModel)]=\"username\">\r\n                     </mat-form-field>\r\n                     </div>\r\n                     <div style=\"text-align: center;\"> <button class=\"primary-bg\" mat-raised-button type=\"submit\" [disabled]=\"!form.valid\">Unlock</button></div>\r\n                  </div>\r\n               </form>\r\n            </mat-card-content>\r\n         </mat-card>\r\n      </div>\r\n   </div>\r\n</div>");

/***/ }),

/***/ "EeLk":
/*!**********************************************************!*\
  !*** ./src/app/session/register/register-component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gene-registration-form .login-logo img {\n  margin-bottom: 1.5rem;\n}\n.gene-registration-form button {\n  margin-bottom: 1rem;\n}");

/***/ }),

/***/ "Fnv1":
/*!********************************************!*\
  !*** ./src/app/session/session.routing.ts ***!
  \********************************************/
/*! exports provided: SessionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRoutes", function() { return SessionRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "voE3");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "wNce");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "SoY3");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "BF9I");
/* harmony import */ var _lockscreenV2_lockscreenV2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lockscreenV2/lockscreenV2.component */ "5ld8");
/* harmony import */ var _forgot_passwordV2_forgot_passwordV2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-passwordV2/forgot-passwordV2.component */ "feaf");
/* harmony import */ var _registerV2_registerV2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerV2/registerV2.component */ "HOGO");
/* harmony import */ var _loginV2_loginV2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loginV2/loginV2.component */ "DrNT");








var SessionRoutes = [
    {
        path: '',
        redirectTo: 'loginV2',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
            },
            {
                path: 'forgot-password',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
            },
            {
                path: 'lockscreen',
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__["LockScreenComponent"]
            },
            {
                path: 'loginV2',
                component: _loginV2_loginV2_component__WEBPACK_IMPORTED_MODULE_7__["LoginV2Component"]
            },
            {
                path: 'registerV2',
                component: _registerV2_registerV2_component__WEBPACK_IMPORTED_MODULE_6__["RegisterV2Component"]
            },
            {
                path: 'forgot-passwordV2',
                component: _forgot_passwordV2_forgot_passwordV2_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordV2Component"]
            },
            {
                path: 'lockscreenV2',
                component: _lockscreenV2_lockscreenV2_component__WEBPACK_IMPORTED_MODULE_4__["LockScreenV2Component"]
            }
        ]
    }
];


/***/ }),

/***/ "HOGO":
/*!************************************************************!*\
  !*** ./src/app/session/registerV2/registerV2.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterV2Component", function() { return RegisterV2Component; });
/* harmony import */ var _raw_loader_registerV2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./registerV2-component.html */ "bFoe");
/* harmony import */ var _registerV2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerV2-component.scss */ "p3CF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterV2Component = /** @class */ (function () {
    function RegisterV2Component(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 1000, "dots": false, "arrows": false };
        this.sessionSlider = [
            {
                image: "assets/img/login-slider1.jpg",
                name: "Francisco Abbott",
                designation: "CEO-Gene",
                content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            },
            {
                image: "assets/img/login-slider2.jpg",
                name: "Samona Brown",
                designation: "Designer",
                content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            },
            {
                image: "assets/img/login-slider3.jpg",
                name: "Anna Smith",
                designation: "Managing Director",
                content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            }
        ];
    }
    //register method is used to sign up on the template.
    RegisterV2Component.prototype.register = function (value) {
        this.authService.signupUserProfile(value);
    };
    RegisterV2Component.ctorParameters = function () { return [
        { type: _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    RegisterV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-register-session',
            template: _raw_loader_registerV2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [_registerV2_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], RegisterV2Component);
    return RegisterV2Component;
}());



/***/ }),

/***/ "Poc/":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/session/register/register-component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gene-registration-form gene-session pad-y-xl\">\r\n   <div fxLayout=\"row\" fxLayoutAlign=\"center center\" >\r\n      <div fxLayout=\"column\" fxFlex.xl=\"600px\" fxFlex.lg=\"600px\" fxFlex.md=\"600px\" fxFlex.sm=\"600px\"  fxFlex.xs=\"100\">\r\n         <mat-card>\r\n            <div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n               <div class=\"login-logo text-center\">\r\n               <img src=\"assets/img/logo.png\">\r\n               <h5 class=\"\">{{'Please Enter your details for registrations'|translate}}</h5>\r\n               </div>\r\n            </div>\r\n            <form #form=\"ngForm\" (ngSubmit)=\"register(form.value)\">\r\n               <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\r\n                  <input matInput placeholder=\"Name\" type=\"text\" name=\"name\" required [(ngModel)]=\"name\">\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\r\n                     <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\r\n                     <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\r\n                     <input matInput placeholder=\"Password (Confirm)\" type=\"password\" name=\"password-confirm\" required [(ngModel)]=\"passwordConfirm\">\r\n                  </mat-form-field>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"mrgn-b-md\">\r\n                  <mat-checkbox>I accept the <a href=\"javascript:void(0)\" class=\"primary-text\">{{'terms and conditions.'|translate}}</a></mat-checkbox>\r\n                  </div>\r\n                  <button mat-raised-button [disabled]=\"!form.valid\" class=\"primary-bg mrgn-b-md\">{{'CREATE ACCOUNT'|translate}}</button>\r\n                  <p>{{'Already have an account?'|translate}} <a [routerLink]=\"['/session/login']\" class=\"primary-text\">{{'Sign in here'|translate}}</a></p>\r\n               </div>\r\n            </form>\r\n            </div>\r\n         </mat-card>\r\n      </div>\r\n   </div>\r\n</div>");

/***/ }),

/***/ "SoY3":
/*!**********************************************************************!*\
  !*** ./src/app/session/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./forgot-password-component.html */ "2p35");
/* harmony import */ var _forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password-component.scss */ "X9O+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
    }
    /**
      * send method is used to send a reset password link into your email.
      */
    ForgotPasswordComponent.prototype.send = function (value) {
        this.authService.resetPassword(value);
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-forgot-password',
            template: _raw_loader_forgot_password_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [_forgot_password_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "X9O+":
/*!************************************************************************!*\
  !*** ./src/app/session/forgot-password/forgot-password-component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gene-forget-pass .login-logo img {\n  margin-bottom: 1.5rem;\n}\n.gene-forget-pass button {\n  margin-bottom: 1rem;\n}\n.gene-forget-pass .mat-card {\n  padding-bottom: 2rem;\n  padding-top: 2rem;\n}");

/***/ }),

/***/ "Zd1o":
/*!******************************************************************!*\
  !*** ./src/app/session/lockscreenV2/lockscreenV2-component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gene-user-section .login-logo img {\n  margin-bottom: 1.5rem;\n}\n.gene-user-section button {\n  margin-bottom: 1rem;\n}\n.gene-user-section .mat-card {\n  padding-bottom: 2rem;\n  padding-top: 2rem;\n}");

/***/ }),

/***/ "a43w":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/session/login/login-component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gene-login gene-session pad-y-xl\">\r\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n      <div fxLayout=\"column\" fxFlex.xl=\"540px\" fxFlex.lg=\"540px\" fxFlex.md=\"540px\" fxFlex.sm=\"540px\" fxFlex.xs=\"100\">\r\n         <mat-card class=\"gene-login-wrapper\">\r\n            <div>\r\n               <div fxLayout=\"column\" fxLayoutAlign=\"center center mrgn-b-md\">\r\n                  <div class=\"login-logo justify-content\">\r\n                     <img src=\"assets/img/logo.png\">\r\n                     <h5>Please enter your user information</h5>\r\n                  </div>\r\n               </div>\r\n               <form #form=\"ngForm\" (ngSubmit)=\"login(form.value)\">\r\n               <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n                  <mat-form-field class=\"full-wid mrgn-b-md\">\r\n                     <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"full-wid mrgn-b-md \">\r\n                     <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\r\n                  </mat-form-field>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                     <div fxLayout=\"column\">\r\n                        <mat-checkbox class=\"remember-me\">Remember Me</mat-checkbox>\r\n                     </div>\r\n                     <span fxFlex></span>\r\n                     <div><a [routerLink]=\"['/session/forgot-password']\">Forgot Password?</a></div>\r\n                  </div>\r\n                  <button class=\"success-bg\" mat-raised-button [disabled]=\"!form.valid\">SIGN IN</button>\r\n                  <p class=\"text-center\">Don't have an account? <a [routerLink]=\"['/session/register']\" class=\"primary-text\">Click here to create one</a></p>\r\n               </div>\r\n               </form>\r\n            </div>\r\n         </mat-card>\r\n      </div>\r\n   </div>\r\n</div>");

/***/ }),

/***/ "bFoe":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/session/registerV2/registerV2-component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gene-registerV2 pad-y-xl\">\r\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n      <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"90\" fxFlex.sm=\"80\" fxFlex.md=\"95\" fxFlex.lg=\"70\" fxFlex.xl=\"60\">\r\n         <mat-toolbar-row fxLayoutAlign=\"space-between\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"center center\">\r\n            <div class=\"mrgn-b-md\">\r\n               <img src=\"assets/img/logo-sign.png\">\r\n            </div>\r\n            <span class=\"mrgn-b-md\">\r\n               <p class=\"text-center text-inverse\"><span  class=\"mrgn-r-sm\">{{'Already have an account?'|translate}}</span><button [routerLink]=\"['/session/loginV2']\" mat-raised-button color=\"accent\">{{'Login'|translate}}</button></p>\r\n            </span>\r\n         </mat-toolbar-row>\r\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" class=\"height-full pad-t-xl pad-b-xl form-wrap-row set-resp-space\" fxLayoutGap.gt-md=\"15px\">\r\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"60\" fxFlex.lg=\"60\" fxFlex.xl=\"60\">\r\n               <mat-card class=\"gene-registerV2-wrap  card-full-height card-full-width\">\r\n                  <div>\r\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mrgn-b-md text-center\">\r\n                        <h2>{{'Get Started With Gene'|translate}}</h2>                                                    \r\n                        <p>{{'The most powerful angular app'|translate}}</p>\r\n                     </div>\r\n                     <form #form=\"ngForm\" (ngSubmit)=\"register(form.value)\" fxLayoutAlign=\"center start\">\r\n                        <div fxLayout=\"column\" fxFlex.xs=\"100\" fxFlex.sm=\"80\" fxFlex.md=\"80\" fxFlex.lg=\"70\" fxFlex.xl=\"70\" fxLayoutAlign=\"start\">\r\n                           <mat-form-field class=\"full-wid mrgn-b-sm\">\r\n                              <input matInput placeholder=\"Name\" type=\"text\" name=\"name\" required [(ngModel)]=\"name\">\r\n                              <span matSuffix><i class=\"material-icons\">account_circle</i></span>\r\n                           </mat-form-field>\r\n                           <mat-form-field class=\"full-wid mrgn-b-sm\">\r\n                              <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n                              <span matSuffix><i class=\"material-icons\">verified_user</i></span>                                 \r\n                           </mat-form-field>\r\n                           <mat-form-field class=\"full-wid mrgn-b-sm\">\r\n                              <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\r\n                              <span matSuffix><i class=\"material-icons\">vpn_key</i></span>\r\n                           </mat-form-field>\r\n                           <div fxLayoutAlign=\"center start\" class=\" mrgn-b-md\">\r\n                              <button mat-flat-button [disabled]=\"!form.valid\"  class=\"success-bg gene-btn-lg\">{{'GET STARTED'|translate}}</button>\r\n                              <!-- <button [disabled]=\"!form.valid\">LOGIN</button>     -->\r\n                           </div>\r\n                           <p class=\"text-center mrgn-b-sm\">{{'Or Signup Using'|translate}}</p>\r\n                           <div class=\"social-list mrgn-b-sm\" fxLayoutAlign=\"center start\" fxLayoutGap=\"15px\">        \r\n                              <button mat-fab color=\"primary\" matTooltip=\"Facebook\" aria-label=\"Button that displays a tooltip for social media link\">f</button>\r\n                              <button mat-fab color=\"warn\" matTooltip=\"Google\" aria-label=\"Button that displays a tooltip for social media link\">G</button>\r\n                              <button mat-fab color=\"accent\" matTooltip=\"Twitter\" aria-label=\"Button that displays a tooltip for social media link\">t</button>\r\n                              <!-- <button mat-fab color=\"warn\" matTooltip=\"Gmail\" aria-label=\"Button that displays a tooltip for social media link\">g</button>                            -->\r\n                           </div>\r\n                           <p class=\"text-center mrgn-b-xs\">{{'By signing up you agree to Gene’s'|translate}}</p>\r\n                           <span class=\"text-center policy-links accent-text\"><a href=\"javascript:void(0)\">Terms Of Service</a>&nbsp; and &nbsp;<a href=\"javascript:void(0)\">Privacy Policy</a></span>\r\n                        </div>\r\n                     </form>\r\n                  </div>\r\n               </mat-card>\r\n            </div>\r\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"38\" fxFlex.lg=\"38\" fxFlex.xl=\"38\" fxHide.lt-md>\r\n               <div class=\"height-full full-wid\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"height-full full-wid\">\r\n                     <ngx-slick-carousel [config]=\"slideConfig\"  class=\"carousel height-full full-wid\" #slickModal=\"slick-carousel\">\r\n                        <div ngxSlickItem *ngFor=\"let slide of sessionSlider\">\r\n                           <div class=\"session-slider overlay-wrap height-full full-wid\">\r\n                              <div class=\"slider-bg-img full-wid\" [ngStyle] = \"{'background-image' : 'url(' + slide.image + ')'}\"></div>\r\n                              <div class=\"overlay-content\" fxLayoutAlign=\"start end\">\r\n                                 <div class=\"content-wrap\">\r\n                                    <div class=\"sec-title\">\r\n                                       <h5 class=\"text-inverse\">{{slide.name}}</h5>\r\n                                       <span class=\"text-inverse\">{{slide.designation}}</span>\r\n                                    </div>\r\n                                    <div class=\"sec-content\">\r\n                                       <p class=\"text-inverse\">{{slide.content}}</p>\r\n                                    </div>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </ngx-slick-carousel>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "bdjn":
/*!**************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen-component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gene-user-section .login-logo img {\n  margin-bottom: 1.5rem;\n}\n.gene-user-section button {\n  margin-bottom: 1rem;\n}\n.gene-user-section .mat-card {\n  padding-bottom: 2rem;\n  padding-top: 2rem;\n}");

/***/ }),

/***/ "enyS":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/session/forgot-passwordV2/forgot-passwordV2-component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gene-forgotpassV2 pad-y-xl\">\r\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n      <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"90\" fxFlex.sm=\"80\" fxFlex.md=\"80\" fxFlex.lg=\"70\" fxFlex.xl=\"60\">\r\n         <!-- <mat-toolbar-row fxLayoutAlign=\"space-between\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"center center\">\r\n            <div class=\"mrgn-b-md\">\r\n               <img src=\"assets/img/logo-sign.png\">\r\n            </div>\r\n            <span class=\"mrgn-b-md\">\r\n               <p class=\"text-center text-inverse\"><span  class=\"mrgn-r-sm\">Create Account?</span><button [routerLink]=\"['/session/registerV2']\" mat-raised-button color=\"accent\">Sign Up</button></p>\r\n            </span>\r\n         </mat-toolbar-row> -->\r\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" class=\"height-full pad-t-xl pad-b-xl form-wrap-row\">\r\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"500px\" fxFlex.md=\"544px\" fxFlex.lg=\"544px\" fxFlex.xl=\"544px\">\r\n               <mat-card class=\"gene-login-v2 height-full \">\r\n                  <div>\r\n                     <!-- <div class=\"login-logo text-center\">\r\n                        <img class=\"img-circle\" src=\"assets/img/user-1.jpg\" alt=\"user\" title=\"user\"/>\r\n                     </div> -->\r\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mrgn-b-sm text-center\">\r\n                        <h2>{{'Reset Password'|translate}}</h2>\r\n                        <p>{{\"You’ll receive reset password instruction to you email.\" |translate}}</p>\r\n                     </div>\r\n                     <form #form=\"ngForm\"(ngSubmit)=\"send(form.value)\" fxLayoutAlign=\"center start\">\r\n                     <div fxLayout=\"column\" fxFlex.xl=\"75\" fxFlex.lg=\"75\" fxFlex.md=\"80\" fxFlex.sm=\"80\" fxFlex.xs=\"100\" fxLayoutAlign=\"start\">\r\n                        <mat-form-field class=\"full-wid mrgn-b-md\">\r\n                           <input matInput placeholder=\"Enter Your E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n                           <span matSuffix><i class=\"material-icons\">vpn_key</i></span>                              \r\n                        </mat-form-field>\r\n                        <div fxLayoutAlign=\"center start\" class=\"mrgn-b-md gene-btn-wrap\">\r\n                           <button mat-flat-button color=\"green-600\" class=\"gene-btn-lg full-wid\" [disabled]=\"!form.valid\">{{'Reset Password'|translate}}</button>    \r\n                        </div>\r\n                     </div>\r\n                     </form>\r\n                     <div  fxLayout=\"row wrap\" fxLayoutAlign=\"center start\">\r\n                        <div fxLayout=\"column\" fxFlex.xl=\"75\" fxFlex.lg=\"75\" fxFlex.md=\"80\" fxFlex.sm=\"80\" fxFlex.xs=\"100\" fxLayoutAlign=\"start\">\r\n                           <div fxLayoutAlign=\"center start\" class=\"gene-btn-wrap\">\r\n                              <button mat-flat-button color=\"accent\" class=\"gene-btn-lg full-wid\" (click)=\"router.navigate(['/session/loginV2'])\">{{'Already have an account? Login'|translate}}</button>    \r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </mat-card>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>");

/***/ }),

/***/ "feaf":
/*!**************************************************************************!*\
  !*** ./src/app/session/forgot-passwordV2/forgot-passwordV2.component.ts ***!
  \**************************************************************************/
/*! exports provided: ForgotPasswordV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordV2Component", function() { return ForgotPasswordV2Component; });
/* harmony import */ var _raw_loader_forgot_passwordV2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./forgot-passwordV2-component.html */ "enyS");
/* harmony import */ var _forgot_passwordV2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-passwordV2-component.scss */ "wO+6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordV2Component = /** @class */ (function () {
    function ForgotPasswordV2Component(authService, router, translate) {
        this.authService = authService;
        this.router = router;
        this.translate = translate;
    }
    /**
      * send method is used to send a reset password link into your email.
      */
    ForgotPasswordV2Component.prototype.send = function (value) {
        this.authService.resetPasswordV2(value);
    };
    ForgotPasswordV2Component.ctorParameters = function () { return [
        { type: _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
    ]; };
    ForgotPasswordV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-forgot-password',
            template: _raw_loader_forgot_passwordV2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [_forgot_passwordV2_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ForgotPasswordV2Component);
    return ForgotPasswordV2Component;
}());



/***/ }),

/***/ "gaDR":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/session/lockscreenV2/lockscreenV2-component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gene-lockscreenV2 pad-y-xl\">\r\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n      <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"90\" fxFlex.sm=\"80\" fxFlex.md=\"80\" fxFlex.lg=\"70\" fxFlex.xl=\"60\">\r\n         <mat-toolbar-row fxLayoutAlign=\"space-between\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"center center\">\r\n            <div class=\"mrgn-b-md\">\r\n               <img src=\"assets/img/logo-sign.png\">\r\n            </div>\r\n            <span class=\"mrgn-b-md\">\r\n               <p class=\"text-center text-inverse\"><button [routerLink]=\"['/session/registerV2']\" mat-raised-button color=\"accent\">{{'Sign Up'|translate}}</button></p>\r\n            </span>\r\n         </mat-toolbar-row>\r\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" class=\"height-full pad-t-xl pad-b-xl form-wrap-row\">\r\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"500px\" fxFlex.md=\"544px\" fxFlex.lg=\"544px\" fxFlex.xl=\"544px\">\r\n               <mat-card class=\"gene-login-v2 height-full \">\r\n                  <div>                  \r\n                     <div class=\"login-logo text-center\">\r\n                        <img class=\"img-circle\" src=\"assets/img/user-1.jpg\" alt=\"user\" title=\"user\"/>\r\n                     </div>\r\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mrgn-b-sm text-center\">\r\n                        <h2>{{'Johnshon Deo'|translate}}</h2>                                                    \r\n                        <p>{{'Welcome back to Reactify platform'|translate}}</p>\r\n                     </div>\r\n                     <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" fxLayoutAlign=\"center start\">\r\n                        <div fxLayout=\"column\" fxFlex.xl=\"75\" fxFlex.lg=\"75\" fxFlex.md=\"80\" fxFlex.sm=\"80\" fxFlex.xs=\"100\" fxLayoutAlign=\"start\">\r\n                           <mat-form-field class=\"full-wid mrgn-b-md\">\r\n                              <input matInput placeholder=\"Enter Your Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\r\n                              <span matSuffix><i class=\"material-icons\">verified_user</i></span>                              \r\n                           </mat-form-field>\r\n                           <div fxLayoutAlign=\"center start\" class=\"mrgn-b-md gene-btn-wrap\">\r\n                              <button mat-flat-button color=\"green-600\" class=\"gene-btn-lg full-wid\" [disabled]=\"!form.valid\">UnLock</button>    \r\n                           </div>\r\n                        </div>\r\n                     </form>\r\n                  </div>\r\n               </mat-card>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "p3CF":
/*!**************************************************************!*\
  !*** ./src/app/session/registerV2/registerV2-component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 599px) {\n  .set-resp-space {\n    padding-top: 0.8rem !important;\n    padding-bottom: 0.8rem !important;\n  }\n}");

/***/ }),

/***/ "vPxe":
/*!****************************************************!*\
  !*** ./src/app/session/login/login-component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body .gene-login-wrapper {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\nbody .gene-login-wrapper .login-logo {\n  margin-bottom: 2rem;\n}\nbody .gene-login-wrapper .login-logo img {\n  margin-bottom: 2rem;\n}\nbody .gene-login-wrapper button {\n  margin: 1rem 0;\n}\n.justify-content {\n  justify-content: center;\n}");

/***/ }),

/***/ "voE3":
/*!**************************************************!*\
  !*** ./src/app/session/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login-component.html */ "a43w");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-component.scss */ "vPxe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        this.email = "demo@example.com";
        this.password = "0123456789";
    }
    // when email and password is correct, user logged in.
    LoginComponent.prototype.login = function (value) {
        this.authService.loginAdmin(value);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-login-session',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "wNce":
/*!********************************************************!*\
  !*** ./src/app/session/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register-component.html */ "Poc/");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-component.scss */ "EeLk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "V7IE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
    }
    //register method is used to sign up on the template.
    RegisterComponent.prototype.register = function (value) {
        this.authService.signupUserProfile(value);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ms-register-session',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "wO+6":
/*!****************************************************************************!*\
  !*** ./src/app/session/forgot-passwordV2/forgot-passwordV2-component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gene-forget-pass .login-logo img {\n  margin-bottom: 1.5rem;\n}\n.gene-forget-pass button {\n  margin-bottom: 1rem;\n}\n.gene-forget-pass .mat-card {\n  padding-bottom: 2rem;\n  padding-top: 2rem;\n}");

/***/ })

}]);