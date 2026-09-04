(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-apparatus-apparatus-module"],{

/***/ "590J":
/*!********************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/security-apparatus/apparatus.module.ts ***!
  \********************************************************************************/
/*! exports provided: ApparatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApparatusModule", function() { return ApparatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _apparatus_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apparatus.routes */ "DlJc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApparatusModule = /** @class */ (function () {
    function ApparatusModule() {
    }
    ApparatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_apparatus_routes__WEBPACK_IMPORTED_MODULE_4__["APPARATUS_ROUTES"]),
            ]
        })
    ], ApparatusModule);
    return ApparatusModule;
}());



/***/ }),

/***/ "DlJc":
/*!********************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/security-apparatus/apparatus.routes.ts ***!
  \********************************************************************************/
/*! exports provided: APPARATUS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPARATUS_ROUTES", function() { return APPARATUS_ROUTES; });
var APPARATUS_ROUTES = [
    // Guard for Modules
    { path: 'acs', loadChildren: function () { return __webpack_require__.e(/*! import() | acs-fp-acs-fp-module */ "acs-fp-acs-fp-module").then(__webpack_require__.bind(null, /*! ./acs-fp/acs-fp.module */ "vt47")).then(function (m) { return m.AcsFpModule; }); } },
    { path: 'communication-infra', loadChildren: function () { return __webpack_require__.e(/*! import() | communication-infra-communication-infra-module */ "communication-infra-communication-infra-module").then(__webpack_require__.bind(null, /*! ./communication-infra/communication-infra.module */ "jIo7")).then(function (m) { return m.CommunicationInfraModule; }); } },
    { path: 'sre', loadChildren: function () { return __webpack_require__.e(/*! import() | sre-sre-module */ "sre-sre-module").then(__webpack_require__.bind(null, /*! ./sre/sre.module */ "+Ghu")).then(function (m) { return m.SreModule; }); } },
    { path: 'other-security', loadChildren: function () { return __webpack_require__.e(/*! import() | other-security-other-security-module */ "other-security-other-security-module").then(__webpack_require__.bind(null, /*! ./other-security/other-security.module */ "03rk")).then(function (m) { return m.OtherSecurityModule; }); } },
];


/***/ }),

/***/ "F9eD":
/*!**************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/security-apparatus/apparatus.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ApparatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApparatusModule", function() { return ApparatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _apparatus_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apparatus.routes */ "MU6h");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApparatusModule = /** @class */ (function () {
    function ApparatusModule() {
    }
    ApparatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_apparatus_routes__WEBPACK_IMPORTED_MODULE_4__["APPARATUS_ROUTES"]),
            ]
        })
    ], ApparatusModule);
    return ApparatusModule;
}());



/***/ }),

/***/ "MU6h":
/*!**************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/security-apparatus/apparatus.routes.ts ***!
  \**************************************************************************************/
/*! exports provided: APPARATUS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPARATUS_ROUTES", function() { return APPARATUS_ROUTES; });
var APPARATUS_ROUTES = [
    // Guard for Modules
    { path: 'acs', loadChildren: function () { return __webpack_require__.e(/*! import() | acs-fp-acs-fp-module */ "acs-fp-acs-fp-module").then(__webpack_require__.bind(null, /*! ./acs-fp/acs-fp.module */ "roql")).then(function (m) { return m.AcsFpModule; }); } },
    { path: 'communication-infra', loadChildren: function () { return __webpack_require__.e(/*! import() | communication-infra-communication-infra-module */ "communication-infra-communication-infra-module").then(__webpack_require__.bind(null, /*! ./communication-infra/communication-infra.module */ "WiXY")).then(function (m) { return m.CommunicationInfraModule; }); } },
    { path: 'sre', loadChildren: function () { return __webpack_require__.e(/*! import() | sre-sre-module */ "sre-sre-module").then(__webpack_require__.bind(null, /*! ./sre/sre.module */ "CdMC")).then(function (m) { return m.SreModule; }); } },
    { path: 'other-security', loadChildren: function () { return __webpack_require__.e(/*! import() | other-security-other-security-module */ "other-security-other-security-module").then(__webpack_require__.bind(null, /*! ./other-security/other-security.module */ "sEc1")).then(function (m) { return m.OtherSecurityModule; }); } },
];


/***/ })

}]);