(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assessment-assessment-module"],{

/***/ "3TwN":
/*!**********************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/assessment/assessment.routes.ts ***!
  \**********************************************************************/
/*! exports provided: ASSESSMENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSESSMENT_ROUTES", function() { return ASSESSMENT_ROUTES; });
var ASSESSMENT_ROUTES = [
    { path: 'matrix', loadChildren: function () { return __webpack_require__.e(/*! import() | matrix-matrix-module */ "matrix-matrix-module").then(__webpack_require__.bind(null, /*! ./matrix/matrix.module */ "Vzvb")).then(function (m) { return m.MatrixModule; }); } },
    { path: 'schedule', loadChildren: function () { return __webpack_require__.e(/*! import() | schedule-schedule-module */ "schedule-schedule-module").then(__webpack_require__.bind(null, /*! ./schedule/schedule.module */ "9vw+")).then(function (m) { return m.ScheduleModule; }); } },
];


/***/ }),

/***/ "JH8Z":
/*!**********************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/assessment.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AssessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentModule", function() { return AssessmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assessment_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assessment.routes */ "Orot");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { AddCreditExellenceComponent } from './credit-exellence/add-credit-exellence/add-credit-exellence.component';
// import { DistributionMarksComponent } from './distribution-marks/distribution-marks.component';
// import { ExamScheduleComponent } from './exam-schedule/exam-schedule.component';
var AssessmentModule = /** @class */ (function () {
    function AssessmentModule() {
    }
    AssessmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_assessment_routes__WEBPACK_IMPORTED_MODULE_4__["ASSESSMENT_ROUTES"]),
            ]
        })
    ], AssessmentModule);
    return AssessmentModule;
}());



/***/ }),

/***/ "Orot":
/*!**********************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/assessment/assessment.routes.ts ***!
  \**********************************************************************************/
/*! exports provided: ASSESSMENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSESSMENT_ROUTES", function() { return ASSESSMENT_ROUTES; });
var ASSESSMENT_ROUTES = [
    // Guard for Modules
    { path: 'leadership-development-matrix', loadChildren: function () { return __webpack_require__.e(/*! import() | leadership-development-matrix-leadership-development-matrix-module */ "leadership-development-matrix-leadership-development-matrix-module").then(__webpack_require__.bind(null, /*! ./leadership-development-matrix/leadership-development-matrix.module */ "xHiz")).then(function (m) { return m.LDMatrixModule; }); } },
    { path: 'oq-matrix', loadChildren: function () { return __webpack_require__.e(/*! import() | oq-matrix-both-oq-matrix-module */ "oq-matrix-both-oq-matrix-module").then(__webpack_require__.bind(null, /*! ./oq-matrix-both/oq-matrix.module */ "5vSE")).then(function (m) { return m.OQModule; }); } },
    { path: 'Credit-for-Excellence', loadChildren: function () { return __webpack_require__.e(/*! import() | credit-exellence-credit-exellence-module */ "credit-exellence-credit-exellence-module").then(__webpack_require__.bind(null, /*! ./credit-exellence/credit-exellence.module */ "0M0V")).then(function (m) { return m.CreditExellenceModule; }); } },
    { path: 'intellectual', loadChildren: function () { return __webpack_require__.e(/*! import() | intellectual-intellectual-module */ "intellectual-intellectual-module").then(__webpack_require__.bind(null, /*! ./intellectual/intellectual.module */ "tAfo")).then(function (m) { return m.INTELLECModule; }); } },
];


/***/ }),

/***/ "Z7uX":
/*!****************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/assessment/assessment.module.ts ***!
  \****************************************************************************/
/*! exports provided: AssessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentModule", function() { return AssessmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assessment_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assessment.routes */ "rBgn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AssessmentModule = /** @class */ (function () {
    function AssessmentModule() {
    }
    AssessmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_assessment_routes__WEBPACK_IMPORTED_MODULE_4__["ASSESSMENT_ROUTES"]),
            ]
        })
    ], AssessmentModule);
    return AssessmentModule;
}());



/***/ }),

/***/ "pmkf":
/*!**********************************************************************!*\
  !*** ./src/app/main/gs-branch/stats/assessment/assessment.module.ts ***!
  \**********************************************************************/
/*! exports provided: AssessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentModule", function() { return AssessmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assessment_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assessment.routes */ "3TwN");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AssessmentModule = /** @class */ (function () {
    function AssessmentModule() {
    }
    AssessmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_assessment_routes__WEBPACK_IMPORTED_MODULE_4__["ASSESSMENT_ROUTES"]),
            ]
        })
    ], AssessmentModule);
    return AssessmentModule;
}());



/***/ }),

/***/ "rBgn":
/*!****************************************************************************!*\
  !*** ./src/app/main/admin/gs-branch/stats/assessment/assessment.routes.ts ***!
  \****************************************************************************/
/*! exports provided: ASSESSMENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSESSMENT_ROUTES", function() { return ASSESSMENT_ROUTES; });
var ASSESSMENT_ROUTES = [
    { path: 'matrix', loadChildren: function () { return __webpack_require__.e(/*! import() | matrix-matrix-module */ "matrix-matrix-module").then(__webpack_require__.bind(null, /*! ./matrix/matrix.module */ "LO1A")).then(function (m) { return m.MatrixModule; }); } },
    { path: 'schedule', loadChildren: function () { return __webpack_require__.e(/*! import() | schedule-schedule-module */ "schedule-schedule-module").then(__webpack_require__.bind(null, /*! ./schedule/schedule.module */ "OddH")).then(function (m) { return m.ScheduleModule; }); } },
];


/***/ })

}]);