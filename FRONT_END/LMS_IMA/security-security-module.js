(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-security-module"],{

/***/ "/Qz7":
/*!************************************************************!*\
  !*** ./src/app/main/gs-branch/security/security.routes.ts ***!
  \************************************************************/
/*! exports provided: SECURITY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECURITY_ROUTES", function() { return SECURITY_ROUTES; });
var SECURITY_ROUTES = [
    // Guard for Modules
    { path: 'territorial', loadChildren: function () { return __webpack_require__.e(/*! import() | territorial-army-territorial-module */ "territorial-army-territorial-module").then(__webpack_require__.bind(null, /*! ./territorial-army/territorial.module */ "qZXp")).then(function (m) { return m.TerritorialArmyModule; }); } },
    { path: 'rp', loadChildren: function () { return __webpack_require__.e(/*! import() | rp-sec-rp-sec-module */ "rp-sec-rp-sec-module").then(__webpack_require__.bind(null, /*! ./rp-sec/rp-sec.module */ "oAKT")).then(function (m) { return m.RpSecModule; }); } },
    { path: 'demo', loadChildren: function () { return __webpack_require__.e(/*! import() | demo-coy-demo-coy-module */ "demo-coy-demo-coy-module").then(__webpack_require__.bind(null, /*! ./demo-coy/demo-coy.module */ "6Z20")).then(function (m) { return m.DemoCoyModule; }); } },
    { path: 'dsc', loadChildren: function () { return __webpack_require__.e(/*! import() | dsc-dsc-module */ "dsc-dsc-module").then(__webpack_require__.bind(null, /*! ./dsc/dsc.module */ "SZR+")).then(function (m) { return m.DscModule; }); } },
    { path: 'policies', loadChildren: function () { return __webpack_require__.e(/*! import() | policies-policies-module */ "policies-policies-module").then(__webpack_require__.bind(null, /*! ./policies/policies.module */ "F22C")).then(function (m) { return m.PoliciesModule; }); } },
    { path: 'access-control', loadChildren: function () { return __webpack_require__.e(/*! import() | access-control-access-control-module */ "access-control-access-control-module").then(__webpack_require__.bind(null, /*! ./access-control/access-control.module */ "VqR1")).then(function (m) { return m.AccessControlModule; }); } },
    { path: 'info-security', loadChildren: function () { return __webpack_require__.e(/*! import() | info-security-info-security-module */ "info-security-info-security-module").then(__webpack_require__.bind(null, /*! ./info-security/info-security.module */ "ZUis")).then(function (m) { return m.InfoSecurityModule; }); } },
    { path: 'prophylactic', loadChildren: function () { return __webpack_require__.e(/*! import() | prophylactic-security-prophylactic-module */ "prophylactic-security-prophylactic-module").then(__webpack_require__.bind(null, /*! ./prophylactic-security/prophylactic.module */ "Iv6e")).then(function (m) { return m.ProphylacticModule; }); } },
    { path: 'intelligence', loadChildren: function () { return __webpack_require__.e(/*! import() | intelligence-intelligence-module */ "intelligence-intelligence-module").then(__webpack_require__.bind(null, /*! ./intelligence/intelligence.module */ "J605")).then(function (m) { return m.IntelligenceModule; }); } },
    { path: 'apparatus', loadChildren: function () { return __webpack_require__.e(/*! import() | security-apparatus-apparatus-module */ "security-apparatus-apparatus-module").then(__webpack_require__.bind(null, /*! ./security-apparatus/apparatus.module */ "590J")).then(function (m) { return m.ApparatusModule; }); } },
];


/***/ }),

/***/ "4zPP":
/*!******************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/security.module.ts ***!
  \******************************************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _security_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security.routes */ "joQa");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_security_routes__WEBPACK_IMPORTED_MODULE_4__["SECURITY_ROUTES"]),
            ]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ }),

/***/ "joQa":
/*!******************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/security.routes.ts ***!
  \******************************************************************/
/*! exports provided: SECURITY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECURITY_ROUTES", function() { return SECURITY_ROUTES; });
var SECURITY_ROUTES = [
    // Guard for Modules
    { path: 'territorial', loadChildren: function () { return __webpack_require__.e(/*! import() | territorial-army-territorial-module */ "territorial-army-territorial-module").then(__webpack_require__.bind(null, /*! ./territorial-army/territorial.module */ "mLDB")).then(function (m) { return m.TerritorialArmyModule; }); } },
    { path: 'rp', loadChildren: function () { return __webpack_require__.e(/*! import() | rp-sec-rp-sec-module */ "rp-sec-rp-sec-module").then(__webpack_require__.bind(null, /*! ./rp-sec/rp-sec.module */ "yCul")).then(function (m) { return m.RpSecModule; }); } },
    { path: 'demo', loadChildren: function () { return __webpack_require__.e(/*! import() | demo-coy-demo-coy-module */ "demo-coy-demo-coy-module").then(__webpack_require__.bind(null, /*! ./demo-coy/demo-coy.module */ "bKrq")).then(function (m) { return m.DemoCoyModule; }); } },
    { path: 'dsc', loadChildren: function () { return __webpack_require__.e(/*! import() | dsc-dsc-module */ "dsc-dsc-module").then(__webpack_require__.bind(null, /*! ./dsc/dsc.module */ "/lHJ")).then(function (m) { return m.DscModule; }); } },
    { path: 'policies', loadChildren: function () { return __webpack_require__.e(/*! import() | policies-policies-module */ "policies-policies-module").then(__webpack_require__.bind(null, /*! ./policies/policies.module */ "5NjQ")).then(function (m) { return m.PoliciesModule; }); } },
    { path: 'access-control', loadChildren: function () { return __webpack_require__.e(/*! import() | access-control-access-control-module */ "access-control-access-control-module").then(__webpack_require__.bind(null, /*! ./access-control/access-control.module */ "OC6p")).then(function (m) { return m.AccessControlModule; }); } },
    { path: 'info-security', loadChildren: function () { return __webpack_require__.e(/*! import() | info-security-info-security-module */ "info-security-info-security-module").then(__webpack_require__.bind(null, /*! ./info-security/info-security.module */ "xxV+")).then(function (m) { return m.InfoSecurityModule; }); } },
    { path: 'prophylactic', loadChildren: function () { return __webpack_require__.e(/*! import() | prophylactic-security-prophylactic-module */ "prophylactic-security-prophylactic-module").then(__webpack_require__.bind(null, /*! ./prophylactic-security/prophylactic.module */ "N9Mc")).then(function (m) { return m.ProphylacticModule; }); } },
    { path: 'intelligence', loadChildren: function () { return __webpack_require__.e(/*! import() | intelligence-intelligence-module */ "intelligence-intelligence-module").then(__webpack_require__.bind(null, /*! ./intelligence/intelligence.module */ "Z2rV")).then(function (m) { return m.IntelligenceModule; }); } },
    { path: 'apparatus', loadChildren: function () { return __webpack_require__.e(/*! import() | security-apparatus-apparatus-module */ "security-apparatus-apparatus-module").then(__webpack_require__.bind(null, /*! ./security-apparatus/apparatus.module */ "F9eD")).then(function (m) { return m.ApparatusModule; }); } },
];


/***/ }),

/***/ "nbb+":
/*!************************************************************!*\
  !*** ./src/app/main/gs-branch/security/security.module.ts ***!
  \************************************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _security_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security.routes */ "/Qz7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_security_routes__WEBPACK_IMPORTED_MODULE_4__["SECURITY_ROUTES"]),
            ]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ })

}]);