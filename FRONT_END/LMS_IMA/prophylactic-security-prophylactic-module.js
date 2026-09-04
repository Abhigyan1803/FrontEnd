(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prophylactic-security-prophylactic-module"],{

/***/ "FFrT":
/*!********************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/prophylactic-security/prophylactic.routes.ts ***!
  \********************************************************************************************/
/*! exports provided: PROPHYLACTIC_SECURITY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPHYLACTIC_SECURITY_ROUTES", function() { return PROPHYLACTIC_SECURITY_ROUTES; });
var PROPHYLACTIC_SECURITY_ROUTES = [
    // Guard for Modules
    { path: 'prophylactic-reports', loadChildren: function () { return __webpack_require__.e(/*! import() | prophylactic-reports-prophylactic-reports-module */ "prophylactic-reports-prophylactic-reports-module").then(__webpack_require__.bind(null, /*! ./prophylactic-reports/prophylactic-reports.module */ "FhSR")).then(function (m) { return m.ProphylacticModule; }); } },
    { path: 'prophylactic-policies', loadChildren: function () { return __webpack_require__.e(/*! import() | prophylactic-policies-prophylactic-policies-module */ "prophylactic-policies-prophylactic-policies-module").then(__webpack_require__.bind(null, /*! ./prophylactic-policies/prophylactic-policies.module */ "8dGk")).then(function (m) { return m.ProphylacticModule; }); } },
];


/***/ }),

/***/ "Iv6e":
/*!**************************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/prophylactic-security/prophylactic.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ProphylacticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProphylacticModule", function() { return ProphylacticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _prophylactic_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prophylactic.routes */ "YX9a");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProphylacticModule = /** @class */ (function () {
    function ProphylacticModule() {
    }
    ProphylacticModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_prophylactic_routes__WEBPACK_IMPORTED_MODULE_4__["PROPHYLACTIC_SECURITY_ROUTES"]),
            ]
        })
    ], ProphylacticModule);
    return ProphylacticModule;
}());



/***/ }),

/***/ "N9Mc":
/*!********************************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/prophylactic-security/prophylactic.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ProphylacticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProphylacticModule", function() { return ProphylacticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _prophylactic_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prophylactic.routes */ "FFrT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProphylacticModule = /** @class */ (function () {
    function ProphylacticModule() {
    }
    ProphylacticModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_prophylactic_routes__WEBPACK_IMPORTED_MODULE_4__["PROPHYLACTIC_SECURITY_ROUTES"]),
            ]
        })
    ], ProphylacticModule);
    return ProphylacticModule;
}());



/***/ }),

/***/ "YX9a":
/*!**************************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/prophylactic-security/prophylactic.routes.ts ***!
  \**************************************************************************************/
/*! exports provided: PROPHYLACTIC_SECURITY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPHYLACTIC_SECURITY_ROUTES", function() { return PROPHYLACTIC_SECURITY_ROUTES; });
var PROPHYLACTIC_SECURITY_ROUTES = [
    // Guard for Modules
    { path: 'prophylactic-reports', loadChildren: function () { return __webpack_require__.e(/*! import() | prophylactic-reports-prophylactic-reports-module */ "prophylactic-reports-prophylactic-reports-module").then(__webpack_require__.bind(null, /*! ./prophylactic-reports/prophylactic-reports.module */ "SDma")).then(function (m) { return m.ProphylacticModule; }); } },
    { path: 'prophylactic-policies', loadChildren: function () { return __webpack_require__.e(/*! import() | prophylactic-policies-prophylactic-policies-module */ "prophylactic-policies-prophylactic-policies-module").then(__webpack_require__.bind(null, /*! ./prophylactic-policies/prophylactic-policies.module */ "VPcG")).then(function (m) { return m.ProphylacticModule; }); } },
];


/***/ })

}]);