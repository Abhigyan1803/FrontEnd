(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["current-cases-current-cases-module"],{

/***/ "FptL":
/*!**********************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/current-cases/current-cases.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CurrentCasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentCasesModule", function() { return CurrentCasesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _current_cases_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-cases.routes */ "fDtJ");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CurrentCasesModule = /** @class */ (function () {
    function CurrentCasesModule() {
    }
    CurrentCasesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_current_cases_routes__WEBPACK_IMPORTED_MODULE_4__["CURRENT_CASES_ROUTES"]),
            ]
        })
    ], CurrentCasesModule);
    return CurrentCasesModule;
}());



/***/ }),

/***/ "KFQ2":
/*!****************************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/current-cases/current-cases.module.ts ***!
  \****************************************************************************/
/*! exports provided: CurrentCasesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentCasesModule", function() { return CurrentCasesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _current_cases_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current-cases.routes */ "RUTi");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CurrentCasesModule = /** @class */ (function () {
    function CurrentCasesModule() {
    }
    CurrentCasesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_current_cases_routes__WEBPACK_IMPORTED_MODULE_4__["CURRENT_CASES_ROUTES"]),
            ]
        })
    ], CurrentCasesModule);
    return CurrentCasesModule;
}());



/***/ }),

/***/ "RUTi":
/*!****************************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/current-cases/current-cases.routes.ts ***!
  \****************************************************************************/
/*! exports provided: CURRENT_CASES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_CASES_ROUTES", function() { return CURRENT_CASES_ROUTES; });
var CURRENT_CASES_ROUTES = [
    // Guard for Modules
    { path: 'court-cases', loadChildren: function () { return __webpack_require__.e(/*! import() | court-cases-court-cases-module */ "court-cases-court-cases-module").then(__webpack_require__.bind(null, /*! ./court-cases/court-cases.module */ "xlWu")).then(function (m) { return m.CourtCasesModule; }); } },
    { path: 'relegation', loadChildren: function () { return __webpack_require__.e(/*! import() | relegation-relegation-module */ "relegation-relegation-module").then(__webpack_require__.bind(null, /*! ./relegation/relegation.module */ "vsiL")).then(function (m) { return m.RelegationModule; }); } },
    { path: 'resignation', loadChildren: function () { return __webpack_require__.e(/*! import() | resignation-resignation-module */ "resignation-resignation-module").then(__webpack_require__.bind(null, /*! ./resignation/resignation.module */ "cNzl")).then(function (m) { return m.ResignationModule; }); } },
    { path: 'withdrawal', loadChildren: function () { return __webpack_require__.e(/*! import() | withdrawal-withdrawal-module */ "withdrawal-withdrawal-module").then(__webpack_require__.bind(null, /*! ./withdrawal/withdrawal.module */ "yQrf")).then(function (m) { return m.WithdrawalModule; }); } },
];


/***/ }),

/***/ "fDtJ":
/*!**********************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/current-cases/current-cases.routes.ts ***!
  \**********************************************************************************/
/*! exports provided: CURRENT_CASES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_CASES_ROUTES", function() { return CURRENT_CASES_ROUTES; });
var CURRENT_CASES_ROUTES = [
    // Guard for Modules
    { path: 'court-cases', loadChildren: function () { return __webpack_require__.e(/*! import() | court-cases-court-cases-module */ "court-cases-court-cases-module").then(__webpack_require__.bind(null, /*! ./court-cases/court-cases.module */ "XOo0")).then(function (m) { return m.CourtCasesModule; }); } },
    { path: 'relegation', loadChildren: function () { return __webpack_require__.e(/*! import() | relegation-relegation-module */ "relegation-relegation-module").then(__webpack_require__.bind(null, /*! ./relegation/relegation.module */ "bmG8")).then(function (m) { return m.RelegationModule; }); } },
    { path: 'resignation', loadChildren: function () { return __webpack_require__.e(/*! import() | resignation-resignation-module */ "resignation-resignation-module").then(__webpack_require__.bind(null, /*! ./resignation/resignation.module */ "ijcz")).then(function (m) { return m.ResignationModule; }); } },
    { path: 'withdrawal', loadChildren: function () { return __webpack_require__.e(/*! import() | withdrawal-withdrawal-module */ "withdrawal-withdrawal-module").then(__webpack_require__.bind(null, /*! ./withdrawal/withdrawal.module */ "FLLF")).then(function (m) { return m.WithdrawalModule; }); } },
];


/***/ })

}]);