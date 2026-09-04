(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examination-examination-module"],{

/***/ "MAtE":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/examination.module.ts ***!
  \************************************************************************/
/*! exports provided: ExamniationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamniationModule", function() { return ExamniationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _examination_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examination.routes */ "ysGM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { DistributionMarksComponent } from './distribution-marks/distribution-marks.component';
// import { ExamScheduleComponent } from './exam-schedule/exam-schedule.component';
var ExamniationModule = /** @class */ (function () {
    function ExamniationModule() {
    }
    ExamniationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_examination_routes__WEBPACK_IMPORTED_MODULE_4__["EXAMINATION_ROUTES"]),
            ]
        })
    ], ExamniationModule);
    return ExamniationModule;
}());



/***/ }),

/***/ "ysGM":
/*!************************************************************************!*\
  !*** ./src/app/main/academic-depart/examination/examination.routes.ts ***!
  \************************************************************************/
/*! exports provided: EXAMINATION_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMINATION_ROUTES", function() { return EXAMINATION_ROUTES; });
var EXAMINATION_ROUTES = [
    // Guard for Modules
    { path: 'pcht', loadChildren: function () { return __webpack_require__.e(/*! import() | pcht-pcht-module */ "pcht-pcht-module").then(__webpack_require__.bind(null, /*! ./pcht/pcht.module */ "nYGq")).then(function (m) { return m.PchtModule; }); } },
    { path: 'goi', loadChildren: function () { return __webpack_require__.e(/*! import() | goi-goi-module */ "goi-goi-module").then(__webpack_require__.bind(null, /*! ./goi/goi.module */ "HYan")).then(function (m) { return m.GoiModule; }); } },
    { path: 'Distribution-of-Marks/:type', loadChildren: function () { return __webpack_require__.e(/*! import() | distribution-marks-distribution-marks-module */ "distribution-marks-distribution-marks-module").then(__webpack_require__.bind(null, /*! ./distribution-marks/distribution-marks.module */ "shHF")).then(function (m) { return m.DistributionMarksModule; }); } },
    { path: 'Exam-schedule/:type', loadChildren: function () { return Promise.all(/*! import() | exam-schedule-exam-schedule-module */[__webpack_require__.e("default~add-exam-param-add-exam-param-module~add-exam-schedule-add-exam-schedule-module~app-main-trg~28477f75"), __webpack_require__.e("exam-schedule-exam-schedule-module")]).then(__webpack_require__.bind(null, /*! ./exam-schedule/exam-schedule.module */ "y9i3")).then(function (m) { return m.ExamScheduleModule; }); } },
    // { path: 'term-III', loadChildren: () => import('./terms/term-III/term-III.module').then(m => m.Term_III_Module) },
    { path: 'Assessment/:term', loadChildren: function () { return __webpack_require__.e(/*! import() | assessment-assessment-module */ "assessment-assessment-module").then(__webpack_require__.bind(null, /*! ./assessment/assessment.module */ "JH8Z")).then(function (m) { return m.AssessmentModule; }); } },
];


/***/ })

}]);