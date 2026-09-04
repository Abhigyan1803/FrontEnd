(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intelligence-intelligence-module"],{

/***/ "J605":
/*!*****************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/intelligence/intelligence.module.ts ***!
  \*****************************************************************************/
/*! exports provided: IntelligenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntelligenceModule", function() { return IntelligenceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _intelligence_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intelligence.routes */ "e20G");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IntelligenceModule = /** @class */ (function () {
    function IntelligenceModule() {
    }
    IntelligenceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_intelligence_routes__WEBPACK_IMPORTED_MODULE_4__["INTELLIGENCE_ROUTES"]),
            ]
        })
    ], IntelligenceModule);
    return IntelligenceModule;
}());



/***/ }),

/***/ "Z2rV":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/intelligence/intelligence.module.ts ***!
  \***********************************************************************************/
/*! exports provided: IntelligenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntelligenceModule", function() { return IntelligenceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _intelligence_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intelligence.routes */ "av58");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IntelligenceModule = /** @class */ (function () {
    function IntelligenceModule() {
    }
    IntelligenceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_intelligence_routes__WEBPACK_IMPORTED_MODULE_4__["INTELLIGENCE_ROUTES"]),
            ]
        })
    ], IntelligenceModule);
    return IntelligenceModule;
}());



/***/ }),

/***/ "av58":
/*!***********************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/security/intelligence/intelligence.routes.ts ***!
  \***********************************************************************************/
/*! exports provided: INTELLIGENCE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTELLIGENCE_ROUTES", function() { return INTELLIGENCE_ROUTES; });
var INTELLIGENCE_ROUTES = [
    // Guard for Modules
    { path: 'intelligence-policies', loadChildren: function () { return __webpack_require__.e(/*! import() | intelligence-policies-intelligence-policies-module */ "intelligence-policies-intelligence-policies-module").then(__webpack_require__.bind(null, /*! ./intelligence-policies/intelligence-policies.module */ "dQnX")).then(function (m) { return m.IntelligencePoliciesModule; }); } },
    { path: 'intelligence-reports', loadChildren: function () { return __webpack_require__.e(/*! import() | intelligence-reports-intelligence-reports-module */ "intelligence-reports-intelligence-reports-module").then(__webpack_require__.bind(null, /*! ./intelligence-reports/intelligence-reports.module */ "GIWa")).then(function (m) { return m.IntelligenceReportsModule; }); } },
];


/***/ }),

/***/ "e20G":
/*!*****************************************************************************!*\
  !*** ./src/app/main/gs-branch/security/intelligence/intelligence.routes.ts ***!
  \*****************************************************************************/
/*! exports provided: INTELLIGENCE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTELLIGENCE_ROUTES", function() { return INTELLIGENCE_ROUTES; });
var INTELLIGENCE_ROUTES = [
    // Guard for Modules
    { path: 'intelligence-policies', loadChildren: function () { return __webpack_require__.e(/*! import() | intelligence-policies-intelligence-policies-module */ "intelligence-policies-intelligence-policies-module").then(__webpack_require__.bind(null, /*! ./intelligence-policies/intelligence-policies.module */ "M4YM")).then(function (m) { return m.IntelligencePoliciesModule; }); } },
    { path: 'intelligence-reports', loadChildren: function () { return __webpack_require__.e(/*! import() | intelligence-reports-intelligence-reports-module */ "intelligence-reports-intelligence-reports-module").then(__webpack_require__.bind(null, /*! ./intelligence-reports/intelligence-reports.module */ "+LXS")).then(function (m) { return m.IntelligenceReportsModule; }); } },
];


/***/ })

}]);