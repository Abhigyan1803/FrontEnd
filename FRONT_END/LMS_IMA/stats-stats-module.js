(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stats-stats-module"],{

/***/ "5d3n":
/*!******************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/stats/stats.routes.ts ***!
  \******************************************************************/
/*! exports provided: STATS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATS_ROUTES", function() { return STATS_ROUTES; });
var STATS_ROUTES = [
    // Guard for Modules
    { path: 'intake', loadChildren: function () { return __webpack_require__.e(/*! import() | intake-intake-module */ "intake-intake-module").then(__webpack_require__.bind(null, /*! ./intake/intake.module */ "cXyy")).then(function (m) { return m.IntakeModule; }); } },
    { path: 'poc', loadChildren: function () { return __webpack_require__.e(/*! import() | poc-poc-module */ "poc-poc-module").then(__webpack_require__.bind(null, /*! ./poc/poc.module */ "4Drc")).then(function (m) { return m.PocModule; }); } },
];


/***/ }),

/***/ "KMeL":
/*!************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/stats.module.ts ***!
  \************************************************************/
/*! exports provided: StatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsModule", function() { return StatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _stats_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats.routes */ "cpSw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StatsModule = /** @class */ (function () {
    function StatsModule() {
    }
    StatsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_stats_routes__WEBPACK_IMPORTED_MODULE_4__["STATS_ROUTES"]),
            ]
        })
    ], StatsModule);
    return StatsModule;
}());



/***/ }),

/***/ "cpSw":
/*!************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/stats.routes.ts ***!
  \************************************************************/
/*! exports provided: STATS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATS_ROUTES", function() { return STATS_ROUTES; });
var STATS_ROUTES = [
    // Guard for Modules
    { path: 'academy-parade-state', loadChildren: function () { return __webpack_require__.e(/*! import() | academy-parade-state-academy-parade-state-module */ "academy-parade-state-academy-parade-state-module").then(__webpack_require__.bind(null, /*! ./academy-parade-state/academy-parade-state.module */ "GXMf")).then(function (m) { return m.AcademyParadeStateModule; }); } },
    { path: 'assessment', loadChildren: function () { return __webpack_require__.e(/*! import() | assessment-assessment-module */ "assessment-assessment-module").then(__webpack_require__.bind(null, /*! ./assessment/assessment.module */ "Z7uX")).then(function (m) { return m.AssessmentModule; }); } },
    { path: 'policy-guidelines', loadChildren: function () { return __webpack_require__.e(/*! import() | guidelines-guidelines-module */ "guidelines-guidelines-module").then(__webpack_require__.bind(null, /*! ./guidelines/guidelines.module */ "Mu88")).then(function (m) { return m.GuidelinesModule; }); } },
    { path: 'current-cases', loadChildren: function () { return __webpack_require__.e(/*! import() | current-cases-current-cases-module */ "current-cases-current-cases-module").then(__webpack_require__.bind(null, /*! ./current-cases/current-cases.module */ "FptL")).then(function (m) { return m.CurrentCasesModule; }); } },
    { path: 'guidelines', loadChildren: function () { return __webpack_require__.e(/*! import() | guidelines-guidelines-module */ "guidelines-guidelines-module").then(__webpack_require__.bind(null, /*! ./guidelines/guidelines.module */ "Mu88")).then(function (m) { return m.GuidelinesModule; }); } },
    { path: 'document-checkboard', loadChildren: function () { return __webpack_require__.e(/*! import() | document-checkboard-document-checkboard-module */ "document-checkboard-document-checkboard-module").then(__webpack_require__.bind(null, /*! ./document-checkboard/document-checkboard.module */ "LD9b")).then(function (m) { return m.DocumentCheckboardModule; }); } },
    { path: 'stats', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./stats/stats.module */ "xsgN")).then(function (m) { return m.StatsModule; }); } },
];


/***/ }),

/***/ "j/AF":
/*!******************************************************!*\
  !*** ./src/app/main/gs-branch/stats/stats.module.ts ***!
  \******************************************************/
/*! exports provided: StatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsModule", function() { return StatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _stats_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats.routes */ "pH/f");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StatsModule = /** @class */ (function () {
    function StatsModule() {
    }
    StatsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_stats_routes__WEBPACK_IMPORTED_MODULE_4__["STATS_ROUTES"]),
            ]
        })
    ], StatsModule);
    return StatsModule;
}());



/***/ }),

/***/ "p5HP":
/*!************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/stats/stats.module.ts ***!
  \************************************************************/
/*! exports provided: StatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsModule", function() { return StatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _stats_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats.routes */ "vV8Q");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StatsModule = /** @class */ (function () {
    function StatsModule() {
    }
    StatsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_stats_routes__WEBPACK_IMPORTED_MODULE_4__["STATS_ROUTES"]),
            ]
        })
    ], StatsModule);
    return StatsModule;
}());



/***/ }),

/***/ "pH/f":
/*!******************************************************!*\
  !*** ./src/app/main/gs-branch/stats/stats.routes.ts ***!
  \******************************************************/
/*! exports provided: STATS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATS_ROUTES", function() { return STATS_ROUTES; });
var STATS_ROUTES = [
    // Guard for Modules
    { path: 'academy-parade-state', loadChildren: function () { return __webpack_require__.e(/*! import() | academy-parade-state-academy-parade-state-module */ "academy-parade-state-academy-parade-state-module").then(__webpack_require__.bind(null, /*! ./academy-parade-state/academy-parade-state.module */ "ippK")).then(function (m) { return m.AcademyParadeStateModule; }); } },
    { path: 'assessment', loadChildren: function () { return __webpack_require__.e(/*! import() | assessment-assessment-module */ "assessment-assessment-module").then(__webpack_require__.bind(null, /*! ./assessment/assessment.module */ "pmkf")).then(function (m) { return m.AssessmentModule; }); } },
    { path: 'policy-guidelines', loadChildren: function () { return __webpack_require__.e(/*! import() | guidelines-guidelines-module */ "guidelines-guidelines-module").then(__webpack_require__.bind(null, /*! ./guidelines/guidelines.module */ "4eTe")).then(function (m) { return m.GuidelinesModule; }); } },
    { path: 'current-cases', loadChildren: function () { return __webpack_require__.e(/*! import() | current-cases-current-cases-module */ "current-cases-current-cases-module").then(__webpack_require__.bind(null, /*! ./current-cases/current-cases.module */ "KFQ2")).then(function (m) { return m.CurrentCasesModule; }); } },
    { path: 'guidelines', loadChildren: function () { return __webpack_require__.e(/*! import() | guidelines-guidelines-module */ "guidelines-guidelines-module").then(__webpack_require__.bind(null, /*! ./guidelines/guidelines.module */ "4eTe")).then(function (m) { return m.GuidelinesModule; }); } },
    { path: 'document-checkboard', loadChildren: function () { return __webpack_require__.e(/*! import() | document-checkboard-document-checkboard-module */ "document-checkboard-document-checkboard-module").then(__webpack_require__.bind(null, /*! ./document-checkboard/document-checkboard.module */ "kM1m")).then(function (m) { return m.DocumentCheckboardModule; }); } },
    { path: 'stats', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./stats/stats.module */ "p5HP")).then(function (m) { return m.StatsModule; }); } },
];


/***/ }),

/***/ "vV8Q":
/*!************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/stats/stats.routes.ts ***!
  \************************************************************/
/*! exports provided: STATS_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATS_ROUTES", function() { return STATS_ROUTES; });
var STATS_ROUTES = [
    // Guard for Modules
    { path: 'intake', loadChildren: function () { return __webpack_require__.e(/*! import() | intake-intake-module */ "intake-intake-module").then(__webpack_require__.bind(null, /*! ./intake/intake.module */ "F1GL")).then(function (m) { return m.IntakeModule; }); } },
    { path: 'poc', loadChildren: function () { return __webpack_require__.e(/*! import() | poc-poc-module */ "poc-poc-module").then(__webpack_require__.bind(null, /*! ./poc/poc.module */ "UM01")).then(function (m) { return m.PocModule; }); } },
];


/***/ }),

/***/ "xsgN":
/*!******************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/stats/stats.module.ts ***!
  \******************************************************************/
/*! exports provided: StatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsModule", function() { return StatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _stats_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats.routes */ "5d3n");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StatsModule = /** @class */ (function () {
    function StatsModule() {
    }
    StatsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_stats_routes__WEBPACK_IMPORTED_MODULE_4__["STATS_ROUTES"]),
            ]
        })
    ], StatsModule);
    return StatsModule;
}());



/***/ })

}]);