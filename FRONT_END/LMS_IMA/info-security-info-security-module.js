(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-security-info-security-module"],{

/***/ "2/wG":
/*!*******************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/info-security/info-security.routes.ts ***!
  \*******************************************************************************/
/*! exports provided: INFO_SECURITY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_SECURITY_ROUTES", function() { return INFO_SECURITY_ROUTES; });
var INFO_SECURITY_ROUTES = [
    // Guard for Modules
    { path: 'policies', loadChildren: function () { return __webpack_require__.e(/*! import() | policies-advisories-policies-advisories-module */ "policies-advisories-policies-advisories-module").then(__webpack_require__.bind(null, /*! ./policies-advisories/policies-advisories.module */ "c9J2")).then(function (m) { return m.PoliciesAdvisoriesModule; }); } },
    { path: 'return', loadChildren: function () { return __webpack_require__.e(/*! import() | report-return-report-return-module */ "report-return-report-return-module").then(__webpack_require__.bind(null, /*! ./report-return/report-return.module */ "eHQl")).then(function (m) { return m.ReportReturnModule; }); } },
];


/***/ }),

/***/ "ZUis":
/*!*******************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/info-security/info-security.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InfoSecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSecurityModule", function() { return InfoSecurityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _info_security_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-security.routes */ "2/wG");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InfoSecurityModule = /** @class */ (function () {
    function InfoSecurityModule() {
    }
    InfoSecurityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_info_security_routes__WEBPACK_IMPORTED_MODULE_4__["INFO_SECURITY_ROUTES"]),
            ]
        })
    ], InfoSecurityModule);
    return InfoSecurityModule;
}());



/***/ }),

/***/ "hFVK":
/*!*************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/info-security/info-security.routes.ts ***!
  \*************************************************************************************/
/*! exports provided: INFO_SECURITY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_SECURITY_ROUTES", function() { return INFO_SECURITY_ROUTES; });
var INFO_SECURITY_ROUTES = [
    // Guard for Modules
    { path: 'policies', loadChildren: function () { return __webpack_require__.e(/*! import() | policies-advisories-policies-advisories-module */ "policies-advisories-policies-advisories-module").then(__webpack_require__.bind(null, /*! ./policies-advisories/policies-advisories.module */ "Obcy")).then(function (m) { return m.PoliciesAdvisoriesModule; }); } },
    { path: 'return', loadChildren: function () { return __webpack_require__.e(/*! import() | report-return-report-return-module */ "report-return-report-return-module").then(__webpack_require__.bind(null, /*! ./report-return/report-return.module */ "5ba8")).then(function (m) { return m.ReportReturnModule; }); } },
];


/***/ }),

/***/ "xxV+":
/*!*************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/info-security/info-security.module.ts ***!
  \*************************************************************************************/
/*! exports provided: InfoSecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSecurityModule", function() { return InfoSecurityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _info_security_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-security.routes */ "hFVK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InfoSecurityModule = /** @class */ (function () {
    function InfoSecurityModule() {
    }
    InfoSecurityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_info_security_routes__WEBPACK_IMPORTED_MODULE_4__["INFO_SECURITY_ROUTES"]),
            ]
        })
    ], InfoSecurityModule);
    return InfoSecurityModule;
}());



/***/ })

}]);